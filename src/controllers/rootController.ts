import type { Request, Response } from 'express'
import { getServiceInfo } from '@/services/rootService.js'

export function getRoot(req: Request, res: Response) {
  res.json(getServiceInfo())
}
