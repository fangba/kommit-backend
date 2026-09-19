import { prisma } from '@/repositories/prismaClient.js'

export async function getDbHealth() {
  const start = Date.now()
  await prisma.$queryRaw`SELECT 1`
  const latency = Date.now() - start

  return { status: 'ok', latency }
}
