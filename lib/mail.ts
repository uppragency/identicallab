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

export const RESPONSE_SLA = "cel mult 24 de ore lucrătoare";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://identical.ro";

function confirmation(cfg: NonNullable<ReturnType<typeof config>>, lead: Lead) {
  const summary = [
    lead.clinic && ["Clinică", lead.clinic],
    lead.workType && ["Tip lucrare", lead.workType],
    lead.message && ["Mesaj", lead.message.length > 400 ? lead.message.slice(0, 400) + "..." : lead.message],
  ].filter(Boolean) as string[][];
  const text = [
    `Bună ziua, ${lead.name},`,
    "",
    `Am primit cererea ta. Un specialist iDentical Lab te contactează în ${RESPONSE_SLA}, cu termenul de execuție și prețul, înainte să începem lucrul.`,
    "",
    ...summary.map(([k, v]) => `${k}: ${v}`),
    cfg.brochureUrl ? `\nBroșura iDentical Lab: ${cfg.brochureUrl}` : "",
    "",
    "Dacă e urgent, răspunde direct la acest email.",
    "",
    "Echipa iDentical Lab",
    SITE,
  ].join("\n");
  const html = `<div style="font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#1A1A1A;max-width:560px">
<p style="margin:0 0 20px;color:#0F0053;font-size:12px;letter-spacing:.14em;text-transform:uppercase">[ iDentical Lab ]</p>
<p>Bună ziua, ${escapeHtml(lead.name)},</p>
<p>Am primit cererea ta. Un specialist iDentical Lab te contactează în <strong>${RESPONSE_SLA}</strong>, cu termenul de execuție și prețul, înainte să începem lucrul.</p>
${summary.length ? `<table style="border-collapse:collapse;margin:8px 0 16px;font-size:15px">${summary.map(([k, v]) => row(k, v)).join("")}</table>` : ""}
${cfg.brochureUrl ? `<p><a href="${escapeHtml(cfg.brochureUrl)}" style="color:#0F0053">Descarcă broșura iDentical Lab (PDF)</a></p>` : ""}
<p style="color:#6E6E78;font-size:14px">Dacă e urgent, răspunde direct la acest email.</p>
<p style="margin-top:24px">Echipa iDentical Lab<br><a href="${SITE}" style="color:#0F0053">${SITE.replace("https://", "")}</a></p></div>`;
  return { from: cfg.from, to: lead.email, replyTo: cfg.to.split(",")[0].trim(), subject: "Am primit cererea ta | iDentical Lab", text, html };
}

/** Daily reminder for leads still in status "nou" after 24h. */
export async function sendOverdueReminder(leads: { name: string; clinic: string | null; email: string; phone: string | null; created_at: string }[]): Promise<boolean> {
  const cfg = config();
  if (!cfg || !cfg.to || !leads.length) return false;
  const hrs = (d: string) => Math.floor((Date.now() - new Date(d).getTime()) / 36e5);
  const rows = leads
    .map((l) => `<tr><td style="padding:6px 14px 6px 0">${escapeHtml(l.name)}${l.clinic ? `, ${escapeHtml(l.clinic)}` : ""}</td><td style="padding:6px 14px 6px 0">${escapeHtml(l.phone || l.email)}</td><td style="padding:6px 0;color:#B3261E">${hrs(l.created_at)} h</td></tr>`)
    .join("");
  const text = leads.map((l) => `${l.name}${l.clinic ? ", " + l.clinic : ""} | ${l.phone || l.email} | ${hrs(l.created_at)} h`).join("\n");
  const res = await cfg.resend.emails.send({
    from: cfg.from,
    to: cfg.to.split(",").map((s) => s.trim()),
    subject: `${leads.length} lead-uri fără răspuns peste 24h | iDentical Lab`,
    text: `Lead-uri în status Nou, necontactate:\n\n${text}\n\n${SITE}/leads-x7k2p9w4tq`,
    html: `<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;color:#1A1A1A"><p style="margin:0 0 12px"><strong>${leads.length} lead-uri</strong> în status Nou, necontactate de peste 24h:</p><table style="border-collapse:collapse">${rows}</table><p style="margin-top:16px"><a href="${SITE}/leads-x7k2p9w4tq" style="color:#0F0053">Deschide panoul de lead-uri</a></p></div>`,
  });
  return !res.error;
}

/** Sends the internal notification and, when possible, a confirmation to the clinic. */
export async function sendLeadEmails(lead: Lead): Promise<boolean> {
  const cfg = config();
  if (!cfg || !cfg.to) return false;

  const subject = `Lead nou: ${lead.name}${lead.clinic ? `, ${lead.clinic}` : ""}`;
  const html = `<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;color:#1A1A1A">
<p style="margin:0 0 16px;color:#0F0053;font-size:12px;letter-spacing:.12em;text-transform:uppercase">iDentical Lab · ${lead.source === "offer" ? "Modal ofertă" : "Formular contact"}</p>
<table style="border-collapse:collapse">${row("Nume", lead.name)}${row("Clinică", lead.clinic)}${row("Email", lead.email)}${row("Telefon", lead.phone)}${row("Tip lucrare", lead.workType)}${row("Mesaj", lead.message)}${row("Pagină", lead.pageUrl)}</table><p style="margin-top:16px"><a href="${SITE}/leads-x7k2p9w4tq" style="color:#0F0053">Deschide în panoul de lead-uri</a> · răspunde în ${RESPONSE_SLA}</p></div>`;
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
    cfg.canConfirm ? cfg.resend.emails.send(confirmation(cfg, lead)) : Promise.resolve(null),
  ]);

  const [notify] = results;
  if (notify.status === "rejected" || (notify.status === "fulfilled" && notify.value && "error" in notify.value && notify.value.error)) {
    console.error("[mail] notification failed", notify.status === "rejected" ? notify.reason : notify.value);
    return false;
  }
  return true;
}
