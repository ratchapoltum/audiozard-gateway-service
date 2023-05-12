import { Config } from 'jest';

const config: Config = {
  coverageDirectory: '../.development/tests/coverage-unit',
  rootDir: 'src',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: new Array<string>('**/*.(t|j)s'),
  moduleFileExtensions: new Array<string>('js', 'json', 'ts'),
};

export default config;
