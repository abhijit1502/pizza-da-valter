import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      // Proxy setup
      '/api': {
        target: 'https://currencyexchangesoftware.eu/pilot',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
      // Add more proxy rules if needed
    },
  },
  base: '/',
   // ...other configurations
   assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],

  build: {
    sourcemap: false,
     rollupOptions: {
      // External dependencies that should not be bundled
      external: ['jquery'],

      // Globals for external dependencies (if needed)
      output: {
        globals: {
          jquery: 'jQuery',
        },
      },
    },
  },

  optimizeDeps: {
    exclude: ['jquery'], // Exclude jQuery from optimization
  },
  
  

})
