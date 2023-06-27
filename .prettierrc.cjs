module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  overrides: [
    { files: ['*.js', '*.cjs', '*.mjs'], options: { parser: 'babel' } },
    { files: '*.ts', options: { parser: 'typescript' } },
    { files: '*.json', options: { parser: 'json' } },
    { files: '*.md', options: { parser: 'markdown' } },
    { files: ['*.yaml', '*.yml'], options: { parser: 'yaml' } },
  ],
};
