import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // allows access from network devices
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // helps when files aren't detected (OneDrive issue)
    },
  },
});
