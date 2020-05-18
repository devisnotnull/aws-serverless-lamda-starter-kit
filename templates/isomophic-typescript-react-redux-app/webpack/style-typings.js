const glob = require('glob')
const DtsCreator = require('typed-css-modules').default

let creator = new DtsCreator()

glob('src/**/*.css', {}, (error, filePaths) => {
    for (const filePath of filePaths) {
        creator.create(filePath).then(content => {
            content.writeFile()
        })
    }
})
