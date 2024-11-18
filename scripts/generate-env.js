const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const envFilePath = path.resolve(__dirname, '../packages/kit/src/env.ts')
const envFileContent = `export const DEVMODE = ${process.env.DEVMODE}`

fs.writeFileSync(envFilePath, envFileContent.trim(), 'utf8')

console.log('env.ts file generated successfully')
