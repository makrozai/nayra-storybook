// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import pluginVue from 'eslint-plugin-vue'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'

export default [{
  ignores: [
    'dist/**',
    'node_modules/**',
    '.storybook/**',
    '*.config.*',
    'src/**/__tests__/**',
    'src/**/*.stories.ts',
    'e2e/**',
  ],
}, // Vue files — configuración base flat
...pluginVue.configs['flat/recommended'], // TypeScript puro (.ts)
{
  files: ['**/*.ts'],
  languageOptions: {
    parser: tsParser,
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  },
  plugins: { '@typescript-eslint': tsPlugin },
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
}, // Vue SFCs
{
  files: ['**/*.vue'],
  languageOptions: {
    parserOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      extraFileExtensions: ['.vue'],
    },
  },
  plugins: { '@typescript-eslint': tsPlugin },
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // Desactivar reglas que entran en conflicto con el design system
    // Los componentes se registran con prefijo Na (NaButton, NaHeader…) — no como HTML nativo
    'vue/no-reserved-component-names': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',

    // Estilo — alineado con el código existente
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': ['warn', {
      html: { void: 'never', normal: 'never', component: 'always' },
      svg: 'always',
      math: 'always',
    }],
    'vue/attributes-order': 'warn',
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/no-v-html': 'warn',
  },
}, ...storybook.configs["flat/recommended"]];
