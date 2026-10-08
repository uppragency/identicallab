import { cookies } from "next/headers";
import { ADMIN_COOKIE, rpc, verifySession, type AdminLead, type AdminSub } from "@/lib/admin";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";

export const dynamic = "force-dynamic";

export default async function Page() {
  const jar = await cookies();
  if (!verifySession(jar.get(ADMIN_COOKIE)?.value)) return <Login />;
  let leads: AdminLead[] = [];
  let subs: AdminSub[] = [];
  let error = false;
  try {
    [leads, subs] = await Promise.all([rpc<AdminLead[]>("admin_list_leads", {}), rpc<AdminSub[]>("admin_list_subscribers", {})]);
  } catch {
    error = true;
  }
  return <Dashboard initialLeads={leads} subscribers={subs} error={error} />;
}
