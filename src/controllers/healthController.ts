import type { Request, Response } from 'express'
import { getHealth } from '@/services/healthService.js'

export function getHealthStatus(req: Request, res: Response) {
  res.json(getHealth())
}
