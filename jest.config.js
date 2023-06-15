module.exports = {
  // Tipo de ambiente que vamos ter pra teste, no caso o brownser
  testEnvironment: 'jsdom',
  // Ignorar algumas pastas para não ficar monitorando
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  // Pegar a cobertura de tudo
  collectCoverage: true,
  // Caminho de onde ele deve fazer esse coleta
  collectCoverageFrom: ['src/**/*.ts(x)'],
  // Passar algumas conficgurações para serem carregadas antes de todos os testes,
  // Isso tudo através de um arquivo
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
