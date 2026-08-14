"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Boxes, Rocket, Server, Database, Archive, Activity, ScrollText, Users, CreditCard, Settings, ShieldCheck, Bell, UsersRound, WalletCards, GitPullRequestArrow } from "lucide-react";
import type { ReactNode } from "react";

const groups = [
  { label: "COMPANY OS", items: [["Overview","/",LayoutDashboard],["HR & People","/hr",UsersRound],["Accounts","/accounts",WalletCards],["Approvals","/approvals",GitPullRequestArrow]] },
  { label: "CLOUD OPERATIONS", items: [["Applications","/applications",Boxes],["Deploy","/deploy",Rocket],["Servers","/servers",Server],["Databases","/databases",Database],["Backups","/backups",Archive],["Monitoring","/monitoring",Activity],["Logs","/logs",ScrollText]] },
  { label: "ADMINISTRATION", items: [["Users","/users",Users],["Billing","/billing",CreditCard],["Settings","/settings",Settings]] },
] as const;

export function CloudShell({ title, eyebrow, children, action }: { title:string; eyebrow?:string; children:ReactNode; action?:ReactNode }) {
  const pathname = usePathname();
  return <div className="dark-shell">
    <aside className="dark-sidebar"><Link href="/" className="dark-brand"><span><ShieldCheck size={19}/></span><b>Premier <i>Cloud</i></b></Link><div className="tenant"><small>ORGANISATION</small><strong>Premier Centre Group</strong><span>Malaysia · Production</span></div><nav>{groups.map(group=><div className="nav-group" key={group.label}><small>{group.label}</small>{group.items.map(([label,href,Icon])=><Link key={href} href={href} className={pathname===href || (href!=="/"&&pathname.startsWith(href)) ? "on":""}><Icon size={16}/><span>{label}</span>{href==="/approvals"&&<b className="nav-count">14</b>}</Link>)}</div>)}</nav><div className="dark-profile"><div>AR</div><span><b>Amir Rahman</b><small>Super Admin</small></span><i>•••</i></div></aside>
    <section className="dark-main"><header className="dark-header"><div><small>{eyebrow || "PREMIER CLOUD"}</small><h1>{title}</h1></div><div className="dark-header-actions"><button aria-label="Notifications"><Bell size={17}/><i/></button>{action}</div></header><div className="dark-content">{children}</div></section>
  </div>;
}

export function Status({value}:{value:string}) { const type=value.toLowerCase().replaceAll(" ","-"); return <span className={`dark-status ${type}`}><i/>{value}</span>; }
