import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(readFileSync(path.join(__dirname, '../../package.json'), 'utf-8')) as {
  name: string
  version: string
}

const endpoints = ['GET /']

export function getServiceInfo() {
  return {
    name: pkg.name,
    version: pkg.version,
    endpoints,
  }
}
