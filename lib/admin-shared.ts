export const LEAD_STATUSES = [
  { value: "nou", label: "Nou" },
  { value: "contactat", label: "Contactat" },
  { value: "ofertat", label: "Ofertat" },
  { value: "castigat", label: "Câștigat" },
  { value: "pierdut", label: "Pierdut" },
] as const;

export type AdminLead = {
  id: string;
  created_at: string;
  updated_at: string;
  source: "offer" | "contact";
  name: string;
  clinic: string | null;
  email: string;
  phone: string | null;
  work_type: string | null;
  message: string | null;
  page_url: string | null;
  status: string;
  notes: string | null;
};
export type AdminSub = { id: string; created_at: string; email: string };

