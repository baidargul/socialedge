import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import Dashboard from "./Dashboard";
export const metadata:Metadata={title:"Leads CRM",robots:{index:false,follow:false}};
export default async function AdminPage(){const session=await getSession();if(!session)redirect('/admin-login');return <Dashboard email={session.email}/>}

