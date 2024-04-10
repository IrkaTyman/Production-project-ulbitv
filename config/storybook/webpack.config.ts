import { type RuleSetRule } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoaders'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import type webpack from 'webpack'
import { DefinePlugin } from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    if (config.module != null) {
        config.module.rules = config.module.rules?.map(rule => {
            // eslint-disable-next-line @typescript-eslint/prefer-includes
            if (/svg/.test((rule as RuleSetRule).test as string)) {
                return { ...(rule as RuleSetRule), exclude: /\.svg$/i }
            }

            return rule
        })
    }

    config.module?.rules?.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack']
    })
    config.module?.rules?.push(buildCssLoader(true))

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: 'storybook'
        })
    )

    return config
}
