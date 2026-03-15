import { defineConfig } from 'tsup'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  banner: {
    js: "'use client';",
  },
  onSuccess: async () => {
    copyFileSync(
      resolve('src/styles/editor.css'),
      resolve('dist/styles.css'),
    )
  },
})
