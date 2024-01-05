module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
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
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        'react/jsx-indent': [2, 4],
        "indent": "off",
        'react/button-has-type': 'error',
        "max-len": ['error', {ignoreComments: true}],
        "@typescript-eslint/indent": [2, 4],
        "@typescript-eslint/consistent-type-definitions":"off",
        "@typescript-eslint/explicit-function-return-type": ["warn"],
        "@typescript-eslint/no-misused-promises": "off",
        '@typescript-eslint/naming-convention': 'off',
        "n/handle-callback-err": "off",
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
    overrides: [
        {
            files: ['**/**/*.test.{ts, tsx}'],
            rules: {
                "i18next/no-literal-string": "off",
            }
        }
    ]
}
