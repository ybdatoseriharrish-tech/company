"use client";

import { useState } from "react";

const nav = [
  ["Dashboard", "grid"], ["Applications", "apps"], ["Deploy", "plus"],
  ["Servers", "server"], ["Databases", "database"], ["Backups", "backup"],
  ["Monitoring", "pulse"], ["Logs", "logs"], ["Users & permissions", "users"],
  ["Billing", "billing"], ["Settings", "settings"],
];

const metrics = [
  { label: "Total applications", value: "12", note: "+2 this month", tone: "violet", icon: "apps" },
  { label: "Applications running", value: "10", note: "All systems normal", tone: "green", icon: "check" },
  { label: "Applications offline", value: "2", note: "Requires attention", tone: "red", icon: "warning" },
];

const apps = [
  { name: "HR Portal", type: "Next.js", status: "Running", domain: "hr.premiercentre.com", cpu: 34, ram: 46, color: "#7c5cff" },
  { name: "Retail POS", type: "Node.js", status: "Running", domain: "pos.premiercentre.com", cpu: 21, ram: 58, color: "#35c993" },
  { name: "Finance API", type: "Python", status: "Running", domain: "api.premiercentre.com", cpu: 43, ram: 69, color: "#3b8cf7" },
  { name: "Legacy CRM", type: "Docker", status: "Offline", domain: "crm.premiercentre.com", cpu: 0, ram: 0, color: "#f76565" },
];

const activity = [
  { title: "HR Portal deployed", meta: "main · a83f21d", time: "4 min ago", state: "success" },
  { title: "Database backup completed", meta: "premier-production · 2.4 GB", time: "19 min ago", state: "success" },
  { title: "Legacy CRM stopped", meta: "Stopped by Amir Rahman", time: "1 hr ago", state: "error" },
  { title: "Finance API deployed", meta: "release/v2.4 · f672cb1", time: "3 hrs ago", state: "success" },
];

function Icon({ name }: { name: string }) {
  const chars: Record<string, string> = { grid: "⊞", apps: "◈", plus: "+", server: "▤", database: "◉", backup: "↻", pulse: "⌁", logs: "≡", users: "♙", billing: "▣", settings: "⚙", check: "✓", warning: "!", bell: "♢" };
  return <span className="icon" aria-hidden="true">{chars[name] || "•"}</span>;
}

export default function Home() {
  const [active, setActive] = useState("Dashboard");
  const [toast, setToast] = useState("");

  function act(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2400);
  }

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><div className="brandmark"><span>◆</span></div><div><b>Premier</b><strong>Cloud</strong></div></div>
        <nav aria-label="Primary navigation">
          <p className="nav-label">WORKSPACE</p>
          {nav.slice(0, 8).map(([label, icon]) => (
            <button key={label} className={active === label ? "nav-item active" : "nav-item"} onClick={() => { setActive(label); act(`${label} selected — prototype view`); }}>
              <Icon name={icon} /><span>{label}</span>{label === "Logs" && <small>8</small>}
            </button>
          ))}
          <p className="nav-label manage">MANAGEMENT</p>
          {nav.slice(8).map(([label, icon]) => (
            <button key={label} className={active === label ? "nav-item active" : "nav-item"} onClick={() => { setActive(label); act(`${label} selected — prototype view`); }}><Icon name={icon} /><span>{label}</span></button>
          ))}
        </nav>
        <div className="sidebar-foot">
          <div className="system"><span className="live-dot"/><div><b>All systems operational</b><small>Last checked 30 sec ago</small></div></div>
          <div className="profile"><div className="avatar">AR</div><div><b>Amir Rahman</b><small>Administrator</small></div><button aria-label="Profile menu">•••</button></div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div><h1>{active}</h1><p>Friday, 7 August 2026 <span>•</span> Kuala Lumpur</p></div>
          <div className="top-actions"><button className="icon-button" aria-label="Notifications"><Icon name="bell"/><i/></button><button className="deploy" onClick={() => act("Deployment flow opened")}>＋ <span>Deploy application</span></button></div>
        </header>

        <div className="content">
          <section className="hero-row">
            <div className="welcome"><p className="eyebrow"><span/> PREMIER CLOUD · CONTROL CENTRE</p><h2>Good morning, Amir.</h2><p>Your infrastructure is healthy. <b>10 of 12</b> applications are running normally.</p></div>
            <div className="uptime"><div className="uptime-label"><span>Platform uptime</span><b>99.98%</b></div><div className="uptime-bars">{Array.from({length: 40}, (_,i) => <i key={i} className={i === 27 ? "warn" : ""}/>)}</div><div className="uptime-foot"><span>30 days ago</span><span>Today</span></div></div>
          </section>

          <section className="metric-grid">
            {metrics.map(m => <article className="metric-card" key={m.label}><div className={`metric-icon ${m.tone}`}><Icon name={m.icon}/></div><div><p>{m.label}</p><strong>{m.value}</strong><small className={m.tone}>{m.note}</small></div></article>)}
            <article className="metric-card resources"><div className="resource-head"><p>Resource usage</p><span>LIVE</span></div><div className="resource-row"><b>CPU</b><div><i style={{width:"42%"}}/></div><strong>42%</strong></div><div className="resource-row"><b>Memory</b><div><i style={{width:"68%"}}/></div><strong>68%</strong></div><div className="resource-row"><b>Storage</b><div><i className="gold" style={{width:"74%"}}/></div><strong>74%</strong></div></article>
          </section>

          <section className="panel applications">
            <div className="panel-head"><div><h3>Applications</h3><p>Live overview across your infrastructure</p></div><button onClick={() => act("Applications view opened")}>View all <span>→</span></button></div>
            <div className="table-wrap"><table><thead><tr><th>APPLICATION</th><th>STATUS</th><th>CPU</th><th>MEMORY</th><th>DOMAIN</th><th>QUICK ACTIONS</th></tr></thead><tbody>
              {apps.map(app => <tr key={app.name}><td><div className="app-name"><i style={{background:app.color}}>{app.name.slice(0,2).toUpperCase()}</i><div><b>{app.name}</b><small>{app.type}</small></div></div></td><td><span className={`status ${app.status.toLowerCase()}`}><i/>{app.status}</span></td><td><div className="usage"><span><i style={{width:`${app.cpu}%`}}/></span><b>{app.cpu}%</b></div></td><td><div className="usage"><span><i style={{width:`${app.ram}%`}}/></span><b>{app.ram}%</b></div></td><td><a href={`https://${app.domain}`} target="_blank" rel="noreferrer">{app.domain} ↗</a></td><td><div className="quick"><button onClick={() => act(`${app.name} restart requested`)} title="Restart">↻</button><button onClick={() => act(`${app.name} logs opened`)} title="Logs">≡</button><button onClick={() => act(`${app.name} menu opened`)} title="More">•••</button></div></td></tr>)}
            </tbody></table></div>
          </section>

          <section className="bottom-grid">
            <article className="panel activity"><div className="panel-head"><div><h3>Recent activity</h3><p>Deployments, backups and system events</p></div><button onClick={() => act("Activity log opened")}>View all <span>→</span></button></div><div className="activity-list">{activity.map((item,i) => <div className="activity-row" key={item.title}><div className={`activity-icon ${item.state}`}>{item.state === "success" ? "✓" : "!"}</div><div><b>{item.title}</b><small>{item.meta}</small></div><time>{item.time}</time>{i < activity.length-1 && <span className="connector"/>}</div>)}</div></article>
            <article className="panel alerts"><div className="panel-head"><div><h3>Security alerts</h3><p>Items that need your attention</p></div><span className="count">3 OPEN</span></div><div className="alert high"><i>!</i><div><b>Multiple failed login attempts</b><small>18 attempts from 103.14.22.91</small><span>2 min ago</span></div><button onClick={() => act("Alert marked reviewed")}>Review</button></div><div className="alert medium"><i>!</i><div><b>SSL certificate expiring soon</b><small>crm.premiercentre.com · 8 days</small><span>4 hrs ago</span></div><button onClick={() => act("Certificate details opened")}>Review</button></div><button className="all-alerts" onClick={() => act("Security centre opened")}>View security centre <span>→</span></button></article>
          </section>
        </div>
      </section>
      {toast && <div className="toast"><span>✓</span>{toast}</div>}
    </main>
  );
}
