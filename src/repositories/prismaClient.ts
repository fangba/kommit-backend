import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { DATABASE_URL } from '@/config/env.js'

const adapter = new PrismaNeon({ connectionString: DATABASE_URL })

export const prisma = new PrismaClient({ adapter })
