export const applications = [
  { id:"hr-portal", name:"HR Portal", initials:"HR", domain:"hr.premiercentre.com", repo:"premier/hr-portal", branch:"main", environment:"Production", server:"KUL-PROD-01", deployment:"Deployed", health:"Healthy", cpu:34, memory:46, deployed:"7 Aug 2026, 09:42", uptime:"99.99%", framework:"Next.js", color:"#8b5cf6" },
  { id:"retail-pos", name:"Retail POS", initials:"RP", domain:"pos.premiercentre.com", repo:"premier/retail-pos", branch:"release", environment:"Production", server:"KUL-PROD-02", deployment:"Deployed", health:"Healthy", cpu:21, memory:58, deployed:"6 Aug 2026, 18:11", uptime:"99.96%", framework:"Node.js", color:"#10b981" },
  { id:"finance-api", name:"Finance API", initials:"FA", domain:"api.premiercentre.com", repo:"premier/finance-api", branch:"release/v2.4", environment:"Production", server:"KUL-PROD-01", deployment:"Deployed", health:"Degraded", cpu:43, memory:69, deployed:"6 Aug 2026, 14:08", uptime:"99.82%", framework:"Python", color:"#3b82f6" },
  { id:"legacy-crm", name:"Legacy CRM", initials:"LC", domain:"crm.premiercentre.com", repo:"premier/legacy-crm", branch:"main", environment:"Production", server:"KUL-LEGACY-01", deployment:"Stopped", health:"Offline", cpu:0, memory:0, deployed:"1 Aug 2026, 11:25", uptime:"97.41%", framework:"Docker", color:"#ef4444" },
];

export const servers = [
  { name:"KUL-PROD-01", provider:"DigitalOcean", region:"Singapore · SGP1", ip:"10.24.1.10", os:"Ubuntu 24.04 LTS", cpu:"8 vCPU", ram:"16 GB", storage:"320 GB", uptime:"142 days", health:"Healthy", apps:5, cost:"RM 528" },
  { name:"KUL-PROD-02", provider:"AWS", region:"Singapore · ap-southeast-1", ip:"10.24.1.11", os:"Ubuntu 24.04 LTS", cpu:"4 vCPU", ram:"16 GB", storage:"240 GB", uptime:"89 days", health:"Healthy", apps:4, cost:"RM 612" },
  { name:"KUL-LEGACY-01", provider:"Hetzner", region:"Helsinki · HEL1", ip:"10.24.2.15", os:"Ubuntu 22.04 LTS", cpu:"4 vCPU", ram:"8 GB", storage:"160 GB", uptime:"311 days", health:"Warning", apps:3, cost:"RM 184" },
];
