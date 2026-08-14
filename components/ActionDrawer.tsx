"use client";
import { Check, X } from "lucide-react";
import type { ReactNode } from "react";
export function ActionDrawer({title,subtitle,onClose,children,footer}:{title:string;subtitle?:string;onClose:()=>void;children:ReactNode;footer?:ReactNode}){return <div className="drawer-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><aside className="action-drawer" role="dialog" aria-modal="true"><header><div><small>PREMIER CLOUD WORKFLOW</small><h2>{title}</h2>{subtitle&&<p>{subtitle}</p>}</div><button aria-label="Close" onClick={onClose}><X/></button></header><div className="drawer-body">{children}</div>{footer&&<footer>{footer}</footer>}</aside></div>}
export function FormField({label,children}:{label:string;children:ReactNode}){return <label className="drawer-field"><span>{label}</span>{children}</label>}
export function StepList({steps,current=0}:{steps:string[];current?:number}){return <div className="drawer-steps">{steps.map((s,i)=><div className={i<current?"done":i===current?"current":""} key={s}><i>{i<current?<Check/>:i+1}</i><span><b>{s}</b><small>{i<current?"Complete":i===current?"Current step":"Waiting"}</small></span></div>)}</div>}
