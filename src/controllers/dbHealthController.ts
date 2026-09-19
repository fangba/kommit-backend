import type { Request, Response } from 'express'
import { getDbHealth } from '@/services/dbHealthService.js'

export async function getDbHealthStatus(req: Request, res: Response) {
  try {
    const health = await getDbHealth()
    res.json(health)
  } catch {
    res.status(503).json({ status: 'error' })
  }
}
