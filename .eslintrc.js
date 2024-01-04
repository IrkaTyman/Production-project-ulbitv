module.exports = {
    "env": {
        "browser": true,
        "es2021": true
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
        "@typescript-eslint/indent": [2, 4],
        "@typescript-eslint/no-misused-promises": "off",
        '@typescript-eslint/naming-convention': 'off',
        'react/react-in-jsx-scope': 'off',
        "i18next/no-literal-string": ['error', {markupOnly: true}],
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.ts', '.tsx']}]
    }
}