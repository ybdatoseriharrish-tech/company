import { PrismaClient, RoleName, HealthStatus } from "@prisma/client";
const prisma = new PrismaClient();
async function main(){
  const adminRole=await prisma.role.upsert({where:{name:RoleName.ADMINISTRATOR},update:{},create:{name:RoleName.ADMINISTRATOR}});
  await prisma.role.upsert({where:{name:RoleName.IT_SUPPORT},update:{},create:{name:RoleName.IT_SUPPORT}});
  await prisma.role.upsert({where:{name:RoleName.STAFF_USER},update:{},create:{name:RoleName.STAFF_USER}});
  await prisma.user.upsert({where:{email:"amir.rahman@premiercentre.com"},update:{},create:{supabaseId:"seed-admin",email:"amir.rahman@premiercentre.com",name:"Amir Rahman",roleId:adminRole.id}});
  const server=await prisma.server.upsert({where:{name:"KUL-PROD-01"},update:{},create:{name:"KUL-PROD-01",provider:"DigitalOcean",region:"Singapore · SGP1",ipAddress:"10.24.1.10",operatingSystem:"Ubuntu 24.04 LTS",cpuCores:8,ramMb:16384,storageMb:327680,health:HealthStatus.HEALTHY,monthlyCost:528}});
  await prisma.application.upsert({where:{slug:"hr-portal"},update:{},create:{name:"HR Portal",slug:"hr-portal",domain:"hr.premiercentre.com",repository:"premier/hr-portal",branch:"main",framework:"Next.js",port:3000,serverId:server.id,health:HealthStatus.HEALTHY}});
}
main().finally(()=>prisma.$disconnect());
