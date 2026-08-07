"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, Plus, ExternalLink, MoreHorizontal, RotateCw, Boxes } from "lucide-react";
import { CloudShell, Status } from "@/components/CloudShell";
import { applications } from "@/lib/mock-data";

export default function ApplicationsPage(){
  const [query,setQuery]=useState(""); const [filter,setFilter]=useState("All"); const [toast,setToast]=useState("");
  const rows=useMemo(()=>applications.filter(a=>(filter==="All"||a.health===filter)&&`${a.name} ${a.domain} ${a.repo}`.toLowerCase().includes(query.toLowerCase())),[query,filter]);
  const notify=(m:string)=>{setToast(m);setTimeout(()=>setToast(""),2200)};
  return <CloudShell title="Applications" eyebrow="INFRASTRUCTURE" action={<Link className="primary-action" href="/deploy"><Plus size={15}/> Deploy application</Link>}>
    <div className="page-intro"><div><h2>Application fleet</h2><p>Deploy, inspect and manage every internal application from one place.</p></div><div className="mini-stats"><span><b>12</b>Total</span><span><b className="green-text">10</b>Healthy</span><span><b className="red-text">2</b>Attention</span></div></div>
    <section className="dark-panel"><div className="toolbar"><label><Search size={15}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search applications, domains or repositories…"/></label><select value={filter} onChange={e=>setFilter(e.target.value)}><option>All</option><option>Healthy</option><option>Degraded</option><option>Offline</option></select><span>{rows.length} applications</span></div><div className="dark-table-wrap"><table className="dark-table"><thead><tr><th>APPLICATION</th><th>ENVIRONMENT</th><th>DEPLOYMENT</th><th>HEALTH</th><th>RESOURCES</th><th>LAST DEPLOYED</th><th></th></tr></thead><tbody>{rows.map(a=><tr key={a.id}><td><div className="table-app"><i style={{background:a.color}}>{a.initials}</i><span><Link href={`/applications/${a.id}`}>{a.name}</Link><small>{a.domain}</small></span></div></td><td><span className="tag">{a.environment}</span><small className="cell-sub">{a.server}</small></td><td><Status value={a.deployment}/><small className="cell-sub">{a.branch}</small></td><td><Status value={a.health}/><small className="cell-sub">Uptime {a.uptime}</small></td><td><div className="resource-pair"><span>CPU <b>{a.cpu}%</b></span><span>RAM <b>{a.memory}%</b></span></div></td><td>{a.deployed}</td><td><div className="row-actions"><a href={`https://${a.domain}`} aria-label="Open"><ExternalLink size={14}/></a><button onClick={()=>notify(`${a.name} restart queued`)} aria-label="Restart"><RotateCw size={14}/></button><button aria-label="More"><MoreHorizontal size={15}/></button></div></td></tr>)}</tbody></table></div>{rows.length===0&&<div className="empty-state"><Boxes size={28}/><b>No applications found</b><span>Try changing your search or status filter.</span></div>}</section>{toast&&<div className="dark-toast">✓ {toast}</div>}
  </CloudShell>
}
