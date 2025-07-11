import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    allowedHosts: [
      "8lianm-ip-157-100-138-201.tunnelmole.net",
      "r3cvdd-ip-157-100-138-201.tunnelmole.net",
      "zoo6xs-ip-181-199-59-89.tunnelmole.net"
    ]
  }
})
