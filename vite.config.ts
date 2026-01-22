/// <reference types="vitest/config" />

import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    environment: 'node',

    // ✅ только unit тесты
    include: ['src/**/*.{test,spec}.{ts,tsx}'],

    // исключаем storybook и node_modules
    exclude: [
      '**/*.stories.{ts,tsx}',
      '**/*.browser.test.{ts,tsx}',
      'node_modules',
    ],
  },
})
