import path from 'path'
import { BuildEnv, BuildPaths } from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'App.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales')
    }

    const mode = env.mode || 'development'
    const PORT = env.port || 3000
    const isDev = mode === 'development'
    const apiUrl = env.apiUrl || 'http://localhost:8000'

    return buildWebpackConfig({
        mode,
        isDev,
        project: 'frontend',
        apiUrl,
        paths,
        port: PORT
    })
}