import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://back-estate.netlify.app/',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
