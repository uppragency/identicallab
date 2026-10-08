import { Resend } from "resend";
import { escapeHtml } from "./validation";

export type Lead = {
  source: "offer" | "contact";
  name: string;
  clinic: string;
  email: string;
  phone: string;
  workType: string;
  message: string;
  pageUrl: string;
};

const DEFAULT_FROM = "iDentical Lab <onboarding@resend.dev>";

function config() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  const from = process.env.RESEND_FROM || DEFAULT_FROM;
  return {
    resend: new Resend(apiKey),
    from,
    to: process.env.LEADS_TO_EMAIL || "",
    // Resend's shared sandbox sender can only deliver to the account owner,
    // so confirmations to clinics need a verified sending domain.
    canConfirm: !from.includes("@resend.dev"),
    brochureUrl: process.env.BROCHURE_URL || "",
  };
}

function row(label: string, value: string) {
  if (!value) return "";
  return `<tr><td style="padding:6px 16px 6px 0;color:#6E6E78;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td><td style="padding:6px 0;color:#1A1A1A;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`;
}

/** Sends the internal notification and, when possible, a confirmation to the clinic. */
export async function sendLeadEmails(lead: Lead): Promise<boolean> {
  const cfg = config();
  if (!cfg || !cfg.to) return false;

  const subject = `Cerere de ofertă: ${lead.name}${lead.clinic ? `, ${lead.clinic}` : ""}`;
  const html = `<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;color:#1A1A1A">
<p style="margin:0 0 16px;color:#0F0053;font-size:12px;letter-spacing:.12em;text-transform:uppercase">iDentical Lab · ${lead.source === "offer" ? "Modal ofertă" : "Formular contact"}</p>
<table style="border-collapse:collapse">${row("Nume", lead.name)}${row("Clinică", lead.clinic)}${row("Email", lead.email)}${row("Telefon", lead.phone)}${row("Tip lucrare", lead.workType)}${row("Mesaj", lead.message)}${row("Pagină", lead.pageUrl)}</table></div>`;
  const text = [
    `Nume: ${lead.name}`,
    lead.clinic && `Clinică: ${lead.clinic}`,
    `Email: ${lead.email}`,
    lead.phone && `Telefon: ${lead.phone}`,
    lead.workType && `Tip lucrare: ${lead.workType}`,
    lead.message && `Mesaj: ${lead.message}`,
    lead.pageUrl && `Pagină: ${lead.pageUrl}`,
  ]
    .filter(Boolean)
    .join("\n");

  const results = await Promise.allSettled([
    cfg.resend.emails.send({ from: cfg.from, to: cfg.to.split(",").map((s) => s.trim()), replyTo: lead.email, subject, html, text }),
    cfg.canConfirm
      ? cfg.resend.emails.send({
          from: cfg.from,
          to: lead.email,
          subject: "Am primit cererea ta | iDentical Lab",
          text: `Bună ziua, ${lead.name},\n\nAm primit cererea ta. Revenim cu termenul de execuție și cu prețul înainte să începem.${
            cfg.brochureUrl ? `\n\nBroșura iDentical Lab: ${cfg.brochureUrl}` : ""
          }\n\niDentical Lab`,
          html: `<div style="font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#1A1A1A"><p>Bună ziua, ${escapeHtml(lead.name)},</p><p>Am primit cererea ta. Revenim cu termenul de execuție și cu prețul înainte să începem.</p>${
            cfg.brochureUrl ? `<p><a href="${escapeHtml(cfg.brochureUrl)}" style="color:#0F0053">Descarcă broșura iDentical Lab (PDF)</a></p>` : ""
          }<p style="color:#0F0053">iDentical Lab</p></div>`,
        })
      : Promise.resolve(null),
  ]);

  const [notify] = results;
  if (notify.status === "rejected" || (notify.status === "fulfilled" && notify.value && "error" in notify.value && notify.value.error)) {
    console.error("[mail] notification failed", notify.status === "rejected" ? notify.reason : notify.value);
    return false;
  }
  return true;
}
