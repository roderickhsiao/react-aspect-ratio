module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    project: './tsconfig.json',
  },
  rules: {
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'react/require-extension': 0,
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
    'react/default-props-match-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'func-names': 0,
    'react/forbid-prop-types': 0,
    'comma-dangle': 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'arrow-parens': 0,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  env: {
    jest: true,
  },
};
