import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

export default {
  base: '/my_blog/',
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
}
// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
