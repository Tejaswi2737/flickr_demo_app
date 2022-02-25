module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    globals: {
        test: true,
        expect: true,
    },
    rules: {
        indent: ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
};
