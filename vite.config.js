import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
//vite
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
