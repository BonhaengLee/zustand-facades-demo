const path = require('path');

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = {
  jestPathAlias: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^@apis/(.*)$': '<rootDir>/src/apis/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
  },
};