export const PORT = Number(process.env.PORT) || 3000

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL manquante dans les variables d\'environnement')
}

export const DATABASE_URL = process.env.DATABASE_URL
