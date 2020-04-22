module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  coverageDirectory: 'output/coverage/jest',
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  reporters: [
    'default',
    ['jest-junit', { suiteName: 'jest tests', outputDirectory: 'output/coverage/junit', outputName: 'junit.xml' }],
  ],
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  testEnvironment: 'jsdom', // Default : jsdom
  testURL: 'http://localhost',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
