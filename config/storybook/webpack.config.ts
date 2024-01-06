import { type RuleSetRule } from 'webpack'
import { buildCssLoader } from './../build/loaders/buildCssLoaders'
import { type BuildPaths } from './../build/types/config'
import path from 'path'
import type webpack from 'webpack'

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
        config.module.rules = config.module.rules?.map((rule: RuleSetRule) => {
            // eslint-disable-next-line @typescript-eslint/prefer-includes
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i }
            }

            return rule
        })
    }

    config.module?.rules?.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack']
    })
    config.module?.rules?.push(buildCssLoader(true))

    return config
}
