"use client";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Download, LayoutDashboard, LogOut, Search, Users, X } from "lucide-react";
import { leadStatuses, serviceNames } from "@/lib/content";

type Activity = { action: string; detail: string; at: string };
type Lead = { _id:string; name:string; email:string; phone:string; company:string; service:string; budget:string; projectDetails:string; preferredContact:string; preferredTime:string; status:string; notes:string; assignedTo:string; createdAt:string; followUpAt?:string|null; duplicateOf?:string|null; source?:string; activity?:Activity[] };

export default function Dashboard({ email }: { email: string }) {
  const router = useRouter();
  const [items, setItems] = useState<Lead[]>([]);
  const [selected, setSelected] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [overdue, setOverdue] = useState(0);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [service, setService] = useState("");
  const query = new URLSearchParams({ page: String(page), ...(search && { search }), ...(status && { status }), ...(service && { service }) });

  const load = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`/api/admin/leads?${query}`);
    if (response.status === 401) { router.push("/admin-login"); return; }
    const data = await response.json();
    setItems(data.items ?? []); setTotal(data.total ?? 0); setCounts(data.counts ?? {});
    setOverdue(data.overdue ?? 0); setPages(data.pages ?? 1); setLoading(false);
  }, [page, search, status, service, router]);

  useEffect(() => { const timer = setTimeout(load, search ? 300 : 0); return () => clearTimeout(timer); }, [load, search]);

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (!selected) return;
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const response = await fetch(`/api/admin/leads/${selected._id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    if (response.ok) { setSelected(null); load(); }
  }
  async function logout() { await fetch("/api/auth/logout", { method: "POST" }); router.push("/admin-login"); router.refresh(); }
  const allLeads = Object.values(counts).reduce((sum, value) => sum + value, 0);

  return <div className="min-h-screen bg-slate-100 text-slate-900">
    <aside className="fixed inset-y-0 left-0 hidden w-64 bg-[#14261f] p-6 text-white lg:block"><div className="text-xl font-bold">SocialEdge</div><p className="mt-1 text-xs text-white/45">CREATIVE CRM</p><nav className="mt-10"><div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3"><LayoutDashboard className="h-5 w-5"/>Leads</div></nav><button onClick={logout} className="absolute bottom-6 left-6 flex items-center gap-2 text-sm text-white/60"><LogOut className="h-4 w-4"/>Sign out</button></aside>
    <main className="lg:ml-64"><header className="flex items-center justify-between border-b bg-white px-5 py-4 sm:px-8"><div><h1 className="text-xl font-semibold">Leads</h1><p className="text-xs text-slate-500">Signed in as {email}</p></div><button onClick={logout} className="lg:hidden"><LogOut/></button></header>
      <div className="p-5 sm:p-8"><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Stat label="All leads" value={allLeads}/><Stat label="New leads" value={counts.new ?? 0}/><Stat label="Qualified" value={counts.qualified ?? 0}/><Stat label="Overdue follow-ups" value={overdue}/></div>
        <div className="mt-6 rounded-2xl border bg-white"><div className="grid gap-3 border-b p-4 md:grid-cols-[1fr_180px_220px_auto]"><label className="relative"><Search className="absolute left-3 top-3 h-4 w-4 text-slate-400"/><input value={search} onChange={event=>{setSearch(event.target.value);setPage(1)}} placeholder="Search leads…" className="w-full rounded-lg border py-2.5 pl-9 pr-3 text-sm"/></label><select value={status} onChange={event=>{setStatus(event.target.value);setPage(1)}} className="rounded-lg border px-3 text-sm"><option value="">All statuses</option>{leadStatuses.map(item=><option key={item}>{item}</option>)}</select><select value={service} onChange={event=>{setService(event.target.value);setPage(1)}} className="rounded-lg border px-3 text-sm"><option value="">All services</option>{serviceNames.map(item=><option key={item}>{item}</option>)}</select><a href={`/api/admin/export?${query}`} className="flex items-center justify-center gap-2 rounded-lg bg-site-primary px-4 py-2 text-sm font-semibold text-white"><Download className="h-4 w-4"/>CSV</a></div>
          <div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr>{["Contact","Company","Service","Status","Follow-up","Received",""] .map(item=><th key={item} className="px-5 py-3">{item}</th>)}</tr></thead><tbody>{loading?<tr><td colSpan={7} className="p-8 text-center">Loading…</td></tr>:items.length===0?<tr><td colSpan={7} className="p-8 text-center text-slate-500">No leads found.</td></tr>:items.map(lead=><tr key={lead._id} className="border-t"><td className="px-5 py-4"><b>{lead.name}</b>{lead.duplicateOf&&<span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-800">POSSIBLE DUPLICATE</span>}<div className="text-xs text-slate-500">{lead.email}</div></td><td className="px-5 py-4">{lead.company}</td><td className="px-5 py-4">{lead.service}</td><td className="px-5 py-4"><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold capitalize text-emerald-800">{lead.status}</span></td><td className={`px-5 py-4 ${isOverdue(lead)?"font-semibold text-red-700":"text-slate-500"}`}>{lead.followUpAt?new Date(lead.followUpAt).toLocaleDateString():"—"}</td><td className="px-5 py-4 text-slate-500">{new Date(lead.createdAt).toLocaleDateString()}</td><td className="px-5 py-4"><button onClick={()=>setSelected(lead)} className="font-semibold text-emerald-800">Open</button></td></tr>)}</tbody></table></div>
          <div className="flex items-center justify-between border-t p-4 text-sm"><span>{total} results · Page {page} of {pages}</span><div className="flex gap-2"><button disabled={page<=1} onClick={()=>setPage(value=>value-1)} className="rounded border px-3 py-1.5 disabled:opacity-40">Previous</button><button disabled={page>=pages} onClick={()=>setPage(value=>value+1)} className="rounded border px-3 py-1.5 disabled:opacity-40">Next</button></div></div>
        </div>
      </div>
    </main>
    {selected && <div className="fixed inset-0 z-50 flex justify-end bg-black/35" onMouseDown={()=>setSelected(null)}><div className="h-full w-full max-w-xl overflow-y-auto bg-white p-6 shadow-2xl" onMouseDown={event=>event.stopPropagation()}><button onClick={()=>setSelected(null)} className="float-right"><X/></button><h2 className="text-2xl font-semibold">{selected.name}</h2><p className="mt-1 text-slate-500">{selected.company} · {selected.email} · {selected.phone}</p>{selected.duplicateOf&&<div className="mt-5 rounded-xl bg-amber-50 p-3 text-sm font-medium text-amber-900">Possible duplicate: the same email or phone submitted within 30 days.</div>}<div className="mt-6 grid grid-cols-2 gap-4 text-sm"><Info k="Service" v={selected.service}/><Info k="Budget" v={selected.budget}/><Info k="Contact via" v={selected.preferredContact}/><Info k="Best time" v={selected.preferredTime}/></div><div className="mt-6"><div className="text-xs font-bold uppercase text-slate-400">Project details</div><p className="mt-2 whitespace-pre-wrap leading-7">{selected.projectDetails}</p></div>
      <form onSubmit={save} className="mt-7 grid gap-4"><label className="grid gap-2 text-sm font-semibold">Status<select name="status" defaultValue={selected.status} className="rounded-lg border px-3 py-2.5">{leadStatuses.map(item=><option key={item}>{item}</option>)}</select></label><label className="grid gap-2 text-sm font-semibold">Follow-up date<input type="date" name="followUpAt" defaultValue={selected.followUpAt?.slice(0,10)??""} className="rounded-lg border px-3 py-2.5"/></label><label className="grid gap-2 text-sm font-semibold">Assigned to<input name="assignedTo" defaultValue={selected.assignedTo} className="rounded-lg border px-3 py-2.5"/></label><label className="grid gap-2 text-sm font-semibold">Internal notes<textarea name="notes" defaultValue={selected.notes} rows={6} className="rounded-lg border px-3 py-2.5"/></label><button className="rounded-lg bg-site-primary px-5 py-3 font-semibold text-white">Save changes</button></form>
      <div className="mt-8 border-t pt-6"><h3 className="font-semibold">Activity history</h3><div className="mt-4 grid gap-4">{[...(selected.activity??[])].reverse().map((entry,index)=><div key={`${entry.at}-${index}`} className="border-l-2 border-emerald-200 pl-4"><div className="text-xs font-bold uppercase text-emerald-700">{entry.action}</div><p className="mt-1 text-sm text-slate-600">{entry.detail}</p><time className="mt-1 block text-xs text-slate-400">{new Date(entry.at).toLocaleString()}</time></div>)}{!selected.activity?.length&&<p className="text-sm text-slate-500">No recorded activity yet.</p>}</div></div>
    </div></div>}
  </div>;
}

function isOverdue(lead: Lead) { return Boolean(lead.followUpAt && new Date(lead.followUpAt) < new Date() && !["won","lost","archived"].includes(lead.status)); }
function Stat({label,value}:{label:string;value:number}){return <div className="rounded-2xl border bg-white p-5"><div className="flex items-center gap-2 text-sm text-slate-500"><Users className="h-4 w-4"/>{label}</div><div className="mt-2 text-3xl font-bold">{value}</div></div>}
function Info({k,v}:{k:string;v:string}){return <div className="rounded-xl bg-slate-50 p-3"><div className="text-xs uppercase text-slate-400">{k}</div><div className="mt-1 font-medium">{v}</div></div>}
