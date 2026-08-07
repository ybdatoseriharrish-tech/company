import type { Role } from "./types";
export type AuthUser={id:string;email:string;role:Role};
export function roleFromClaims(claims:Record<string,unknown>):Role{const meta=(claims.app_metadata||{}) as Record<string,unknown>;const role=meta.role;return role==="IT_SUPPORT"||role==="STAFF_USER"?role:"ADMINISTRATOR"}
export function requireRole(user:AuthUser|null, allowed:Role[]){if(!user) return {ok:false as const,status:401,error:"Authentication required"};if(!allowed.includes(user.role)) return {ok:false as const,status:403,error:"Insufficient permissions"};return {ok:true as const,user}}
