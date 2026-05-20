import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:6006',
  },
  webServer: {
    command: 'pnpm storybook',
    port: 6006,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
