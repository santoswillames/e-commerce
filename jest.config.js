const nextJest = require('next/jest')

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' })

// Any custom config you want to pass to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)']
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig)

// module.exports = {
//   // Tipo de ambiente que vamos ter pra teste, no caso o brownser
//   testEnvironment: 'jsdom',
//   // Ignorar algumas pastas para não ficar monitorando
//   testPathIgnorePatterns: ['/node_modules/', '/.next/'],
//   // Pegar a cobertura de tudo
//   collectCoverage: true,
//   // Caminho de onde ele deve fazer esse coleta
//   collectCoverageFrom: ['src/**/*.ts(x)'],
//   // Passar algumas conficgurações para serem carregadas antes de todos os testes,
//   // Isso tudo através de um arquivo
//   setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
// }
