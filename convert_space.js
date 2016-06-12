const fs = require('fs')

const re = / {4}/g

/**
 * 把文件夹中所有的文件，改为两个空格的缩进
 * @param  {String} dirName 要改的文件夹名字
 * @return {}         什么也不返回
 */
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

console.log('modified this files for use this function.')

// twoSpace('./_includes/')


