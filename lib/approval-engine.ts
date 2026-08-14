export type ApprovalAction = "APPROVE" | "REJECT" | "NEEDS_INFORMATION";
export function resolveApprovalPath(amount: number) {
  if (amount < 500) return ["Manager", "Accounts"];
  if (amount <= 5000) return ["Manager", "Accounts Manager"];
  if (amount <= 20000) return ["Manager", "Finance Manager", "CFO"];
  return ["Manager", "CFO", "CEO"];
}
export function canAct(role: string, requestType: string, action: ApprovalAction) {
  if (role === "System Admin" || role === "IT Support") return false;
  if (requestType === "Payroll" && role === "HR" && action === "APPROVE") return false;
  return true;
}
