import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssnano from 'cssnano'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        cssnano
      ]
    },
    preprocessorOptions: {
			scss: {
				prependData: `
					@import "~@/styles/variables.scss";
					@import "~@/styles/mixin.scss";
				`
			}
    }
  }
})
