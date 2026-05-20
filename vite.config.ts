import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    svgLoader({
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NayraStorybook',
      fileName: () => 'nayra-storybook.js',
      formats: ['es']
    },
    rollupOptions: {
      // Evitar bundlar Vue en la librería final
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        // Conservar nombres de assets compilados de estilos
        assetFileNames: 'style.[ext]'
      }
    }
  }
})
