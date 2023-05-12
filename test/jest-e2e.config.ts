import { type Config } from 'jest';

const config: Config = {
  coverageDirectory: '../.development/tests/coverage-e2e',
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.e2e-spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: new Array<string>('**/*.(t|j)s'),
  moduleFileExtensions: new Array<string>('js', 'json', 'ts'),
};

export default config;
