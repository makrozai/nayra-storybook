import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'
import { resolve, relative, dirname } from 'path'

/**
 * Plugin de Vite para inyectar automáticamente la referencia global a main.css
 * en todos los archivos CSS de los componentes, evitando repetir @reference en cada archivo.
 */
function injectTailwindReference() {
  return {
    name: 'inject-tailwind-reference',
    enforce: 'pre' as const,
    transform(code: string, id: string) {
      if (id.endsWith('.css') && id.includes('/src/components/')) {
        const mainCssPath = resolve(__dirname, 'src/assets/css/main.css')
        let relativePath = relative(dirname(id), mainCssPath)
        if (!relativePath.startsWith('.')) {
          relativePath = './' + relativePath
        }
        if (!code.includes('@reference')) {
          return `@reference "${relativePath}";\n${code}`
        }
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    injectTailwindReference(),
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
