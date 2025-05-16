export default [
  // ...
  stylistic.configs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  // prettier,
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'arrow-parens': ['error', 'as-needed'],
      'no-extra-parens': 'off',
      '@typescript-eslint/no-extra-parens': 'off',
      'brace-style': ['error', 'stroustrup'],
    },
  },
]
