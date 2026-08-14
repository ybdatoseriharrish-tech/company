export const hrMetrics = [
  { label: "Total employees", value: "128", note: "+4 this quarter", tone: "blue" },
  { label: "Present today", value: "113", note: "88.3% attendance", tone: "green" },
  { label: "On leave", value: "9", note: "3 returning tomorrow", tone: "violet" },
  { label: "Late arrivals", value: "6", note: "Needs review", tone: "amber" },
];
export const financeMetrics = [
  { label: "Cash position", value: "RM482,300", note: "+8.4% vs July", tone: "green" },
  { label: "Income", value: "RM168,400", note: "August 2026", tone: "blue" },
  { label: "Expenses", value: "RM94,200", note: "56% of income", tone: "amber" },
  { label: "Receivable", value: "RM76,300", note: "7 invoices due", tone: "violet" },
  { label: "Payable", value: "RM48,500", note: "5 bills pending", tone: "red" },
  { label: "Payroll", value: "RM63,400", note: "Awaiting finance", tone: "blue" },
];
export const approvalQueue = [
  { id:"PAY-0826", type:"Payroll", title:"August 2026 payroll", owner:"Nadia · HR", amount:"RM63,400", numericAmount:63400, status:"Awaiting Finance", risk:"Separation check passed", step:2, total:3 },
  { id:"PR-2026-0042", type:"Purchase", title:"14 laptops for Operations", owner:"Farid · Operations", amount:"RM14,500", numericAmount:14500, status:"CFO Approval", risk:"Within Q3 equipment budget", step:3, total:4 },
  { id:"EXP-2026-188", type:"Expense", title:"Client site travel", owner:"Aina · Sales", amount:"RM1,240", numericAmount:1240, status:"Accounts Manager", risk:"Receipts verified", step:2, total:2 },
  { id:"OT-2026-081", type:"Overtime", title:"August OT batch · IT", owner:"Daniel · IT Manager", amount:"RM3,860", numericAmount:3860, status:"HR Verification", risk:"6 timesheets attached", step:2, total:3 },
  { id:"LV-2026-442", type:"Leave", title:"Annual leave · Siti Aisyah", owner:"Siti · Finance", amount:"4 days", numericAmount:0, status:"Manager Approval", risk:"12 days remaining", step:1, total:2 },
];
export const policies = [
  { range:"Below RM500", path:["Manager","Accounts"] },
  { range:"RM500 – RM5,000", path:["Manager","Accounts Manager"] },
  { range:"RM5,000 – RM20,000", path:["Manager","Finance Manager","CFO"] },
  { range:"Above RM20,000", path:["Manager","CFO","CEO"] },
];
