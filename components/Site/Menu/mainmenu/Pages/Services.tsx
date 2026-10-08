import { Blocks, Clapperboard, Code2, Megaphone, Palette, ShoppingBag } from "lucide-react";
import Row, { MenuRowType } from "../Row";
const rows:MenuRowType[]=[
 {title:"Video Editing",description:"Short-form, long-form and motion",icon:<Clapperboard size={16}/>,href:"/services/video-editing"},
 {title:"Social Media Management",description:"Planning and consistent publishing",icon:<Megaphone size={16}/>,href:"/services/social-media-management"},
 {title:"E-commerce Promotion",description:"Product-led social creative",icon:<ShoppingBag size={16}/>,href:"/services/ecommerce-product-promotion"},
 {title:"Web / App Development",description:"Responsive digital experiences",icon:<Code2 size={16}/>,href:"/services/web-app-development"},
 {title:"Creative Strategy",description:"Content concepts and direction",icon:<Blocks size={16}/>,href:"/services/creative-strategy-content"},
 {title:"Branding & Design",description:"Connected visual systems",icon:<Palette size={16}/>,href:"/services/branding-design"},
];
export default function Services(){return <div className="w-[680px] rounded-3xl border border-white/20 bg-slate-950 p-5 text-white shadow-soft"><div className="grid grid-cols-2 gap-2">{rows.map(row=><Row key={row.title} {...row} tone="dark" />)}</div></div>}
