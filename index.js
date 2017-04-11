const contentTypes = require('./content-types.json')

const names = contentTypes.items.map(contentType => contentType.name)
const components = names.filter(name => name.indexOf('Component') >= 0)
const pages = names.filter(name => !components.includes(name)).filter(name => name.indexOf('Page') >= 0)
const other =  names.filter(name => !pages.includes(name)).filter(name => !components.includes(name))

console.log('Pages:')
console.log(pages)

console.log('Components:')
console.log(components)

console.log('Other:')
console.log(other)
