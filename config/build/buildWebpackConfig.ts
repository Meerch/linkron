import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildLoaders } from './buildLoaders'
import { buildWebpackPlugins } from './buildWebpackPlugins'
import { buildResolves } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/'
        },
        plugins: buildWebpackPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolves(options),
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}