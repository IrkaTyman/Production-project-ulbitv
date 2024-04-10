module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next",
        "react-hooks"
    ],
    "rules": {
        'react/jsx-indent': [2, 4],
        "indent": "off",
        'react/button-has-type': 'error',
        "max-len": ['error', {ignoreComments: true, code: 100}],
        "@typescript-eslint/indent": [2, 4],
        "@typescript-eslint/consistent-type-definitions":"off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-misused-promises": "off",
        '@typescript-eslint/naming-convention': 'off',
        "@typescript-eslint/strict-boolean-expressions": "off",
        '@typescript-eslint/no-floating-promises': 'off',
        "@typescript-eslint/unbound-method":"off",
        "@typescript-eslint/no-invalid-void-type":"off",
        "n/handle-callback-err": "off",
        "react/display-name": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        'react/react-in-jsx-scope': 'off',
        "i18next/no-literal-string": [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid'],
            }
    ],
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.ts', '.tsx']}]
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    },
    overrides: [
        {
            files: ['**/**/*.{test, stories}.{ts, tsx}'],
            rules: {
                "i18next/no-literal-string": "off",
            }
        },
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ]
}
