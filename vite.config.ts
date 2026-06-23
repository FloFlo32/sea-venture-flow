import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: 'server' },
    }),
    react(),
    tailwindcss(),
    tsConfigPaths({ projects: ['./tsconfig.json'] }),
  ],
  resolve: {
    alias: { '@': `${process.cwd()}/src` },
    dedupe: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
      '@tanstack/react-query',
      '@tanstack/query-core',
    ],
  },
  // Bundle all node_modules into the SSR output so the Edge Function is self-contained
  environments: {
    ssr: {
      resolve: {
        // In production bundle everything for the Edge Function; in dev let Node resolve CJS natively
        noExternal: process.env.NODE_ENV === 'production' ? true : [],
      },
      build: {
        rollupOptions: {
          output: {
            inlineDynamicImports: true,
          },
        },
      },
    },
  },
  assetsInclude: ["**/*.mov"],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    ignoreOutdatedRequests: true,
  },
  css: { transformer: 'lightningcss' },
  server: { host: '::', port: 8080 },
})
