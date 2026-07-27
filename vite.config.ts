import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// OCF currently serves this site from a home-directory subpath
// (https://www.ocf.berkeley.edu/~coreconsultinggr/), not the domain root, so
// built asset URLs need that prefix. Once the studentorg.berkeley.edu vhost
// request is approved, drop VITE_BASE_PATH (or set it to '/') and redeploy —
// no other code changes needed, since main.tsx reads the same value via
// import.meta.env.BASE_URL for the router's basename.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})
