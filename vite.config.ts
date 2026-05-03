import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

function informativosPlugin() {
  const virtualId = 'virtual:informativos'
  const resolvedId = '\0' + virtualId
  return {
    name: 'vite-plugin-informativos',
    resolveId(id: string) {
      if (id === virtualId) return resolvedId
    },
    load(id: string) {
      if (id !== resolvedId) return
      const dir = resolve(__dirname, 'public/informativos')
      const files = fs.existsSync(dir) ? fs.readdirSync(dir) : []
      const newsletters = files
        .filter((f: string) => /^informativo-\d{2}-\d{4}\.pdf$/.test(f))
        .map((f: string) => {
          const [, mm, yyyy] = f.match(/^informativo-(\d{2})-(\d{4})\.pdf$/)!
          return {
            title: `Informativo Paroquial — Edição ${mm}/${yyyy}`,
            date: `${yyyy}-${mm}`,
            url: `/informativos/${f}`,
          }
        })
        .sort((a: { date: string }, b: { date: string }) => a.date.localeCompare(b.date))
      return `export const newsletters = ${JSON.stringify(newsletters)}`
    },
  }
}

export default defineConfig({
  plugins: [react(), informativosPlugin()],
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
