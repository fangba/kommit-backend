import { app } from '@/app.js'
import { PORT } from '@/config/env.js'

app.listen(PORT, () => {
  console.log(`kommit-backend listening on port ${PORT}`)
})
