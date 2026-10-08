"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
export default function SiteChrome({children}:{children:React.ReactNode}){const path=usePathname();const admin=path.startsWith('/admin');return admin?<>{children}</>:<><Navbar/><main className="min-h-screen">{children}</main><Footer/></>}
