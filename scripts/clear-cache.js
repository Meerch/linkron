const { join: joinPath } = require('path')
const fs = require('fs')

const cacheDir = joinPath(__dirname, '..', 'node_modules/.cache')
fs.rmSync(cacheDir, { recursive: true, force: true })