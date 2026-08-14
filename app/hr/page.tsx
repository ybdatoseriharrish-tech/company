"use client";
import { useState } from "react";
import { CalendarCheck, Clock3, FileCheck2, LockKeyhole, UserPlus, UsersRound } from "lucide-react";
import { CloudShell } from "@/components/CloudShell";
import { hrMetrics } from "@/lib/company-data";

const departments=[{n:"Operations",v:54},{n:"Others",v:33},{n:"Finance",v:17},{n:"IT",v:13},{n:"Management",v:11}];
const people=[
  ["PCG-0118","Siti Aisyah","Finance","Farah Ibrahim","Present","Ready"],
  ["PCG-0092","Daniel Lim","IT","Kumar Raj","Present","Ready"],
  ["PCG-0124","Nur Amalina","Operations","Farid Azman","On leave","Verified"],
  ["PCG-0064","Haziq Roslan","Management","Amir Rahman","Present","Review"],
];

export default function HRPage(){
 const [toast,setToast]=useState(""); const act=(s:string)=>{setToast(s);setTimeout(()=>setToast(""),2200)};
 return <CloudShell title="HR & People" eyebrow="COMPANY OS · PEOPLE OPERATIONS" action={<button className="primary-action" onClick={()=>act("Employee onboarding opened")}><UserPlus size={14}/> Add employee</button>}>
  <section className="os-hero"><div><span className="os-kicker"><i/> PEOPLE OPERATIONS</span><h2>Your workforce, connected to payroll.</h2><p>Attendance, leave, overtime and payroll move through one governed workflow.</p></div><div className="os-period">AUGUST 2026 <b>Payroll closes in 4 days</b></div></section>
  <section className="os-metrics">{hrMetrics.map((m,i)=><article key={m.label}><div className={`os-icon ${m.tone}`}>{[<UsersRound key="u"/>,<CalendarCheck key="c"/>,<FileCheck2 key="f"/>,<Clock3 key="t"/>][i]}</div><span>{m.label}</span><strong>{m.value}</strong><small className={m.tone}>{m.note}</small></article>)}</section>
  <section className="os-split">
   <article className="os-panel"><header><div><small>PAYROLL HANDOFF</small><h3>August payroll readiness</h3></div><b className="os-pill amber">12 actions</b></header><div className="workflow-track">{["Attendance","HR verified","Payroll engine","HR approval","Accounts approval","Payment","Payslips"].map((s,i)=><div className={i<3?"done":i===3?"current":""} key={s}><i>{i<3?"✓":i+1}</i><span>{s}</span></div>)}</div><div className="handoff"><div><span>Employees</span><b>128 / 128</b></div><div><span>Gross payroll</span><b>RM63,400</b></div><div><span>Exceptions</span><b className="amber-text">4 open</b></div><button onClick={()=>act("Payroll review opened")}>Review payroll →</button></div><p className="security-rule"><LockKeyhole size={13}/><span><b>Controlled handoff:</b> HR can prepare and approve payroll details. Only Accounts can mark the batch as paid.</span></p></article>
   <article className="os-panel"><header><div><small>WORKFORCE MIX</small><h3>Employees by department</h3></div><b>128 total</b></header><div className="dept-chart">{departments.map(d=><div key={d.n}><label><span>{d.n}</span><b>{d.v}</b></label><i><b style={{width:`${d.v/54*100}%`}}/></i></div>)}</div></article>
  </section>
  <section className="os-panel os-table-panel"><header><div><small>PEOPLE DIRECTORY</small><h3>Employee records</h3></div><div className="action-summary"><span><b>4</b> leave requests</span><span><b>6</b> OT claims</span><span><b>2</b> contracts</span></div></header><div className="dark-table-wrap"><table className="os-table"><thead><tr><th>EMPLOYEE</th><th>DEPARTMENT</th><th>MANAGER</th><th>TODAY</th><th>PAYROLL</th><th>ACCESS</th></tr></thead><tbody>{people.map(p=><tr key={p[0]}><td><b>{p[1]}</b><small>{p[0]}</small></td><td>{p[2]}</td><td>{p[3]}</td><td><span className="os-dot">{p[4]}</span></td><td><span className={p[5]==="Review"?"os-pill amber":"os-pill green"}>{p[5]}</span></td><td><button onClick={()=>act(`${p[1]} profile opened`)}>View profile</button></td></tr>)}</tbody></table></div></section>
  {toast&&<div className="dark-toast">✓ {toast}</div>}
 </CloudShell>
}
