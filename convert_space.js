const fs = require('fs')

const re = / {4}/g

const twoSpace = dirName => {
  let dir = fs.readdirSync(dirName)
  dir.forEach(file => {
    let stat = fs.statSync(`${dirName}${file}`)
    if (stat.isDirectory()) {
      twoSpace(`${dirName}${file}/`)
      return true
    }
    let data = fs.readFileSync(`${dirName}${file}`, 'utf-8')
    data = data.replace(re, `  `)
    fs.writeFileSync(`${dirName}${file}`, data)
  })
  console.log(`${dirName} done!`)
}

twoSpace('./_includes/')


