import path from 'path'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        entry: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: ''
    }

    const rules = config.module!.rules as RuleSetRule[]
    config.module!.rules = rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg/i
            }
        }
        return rule
    })
    config.module!.rules.push(buildCssLoader(true))
    config.module!.rules.push(buildSvgLoader())

    config.resolve!.modules = [
        path.resolve(__dirname, '../../src'),
        'node_modules'
    ]
    config.resolve!.extensions!.push('.ts', '.tsx')
    config.resolve!.alias = {
        ...config.resolve!.alias,
        '@': paths.src
    }

    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.ru/'),
        __PROJECT__: JSON.stringify('storybook')
    }))

    return config
}