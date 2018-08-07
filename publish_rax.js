// @flow
const fs = require('fs')
const path = require('path')

const pkgPath = path.resolve(__dirname, 'package.json')
const pkg = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf-8' }))

const importStatement = `var React = require('react');`
const rax = `var React = require('rax');`

const mainScript = path.resolve(
  __dirname,
  pkg.browser['./dist/styled-components.cjs.js']
)
let mainContent = fs.readFileSync(mainScript, { encoding: 'utf-8' })

mainContent = mainContent.replace(importStatement, rax)

fs.writeFileSync(mainScript, mainContent, { encoding: 'utf-8' })

if (fs.readFileSync(mainScript, { encoding: 'utf-8' }).includes(rax)) {
  console.log(`生成Rax版本成功`)
} else {
  throw new Error('错误')
}
