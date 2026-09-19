import { Router } from 'express'
import { getHealthStatus } from '@/controllers/healthController.js'

export const healthRoutes = Router()

healthRoutes.get('/', getHealthStatus)
