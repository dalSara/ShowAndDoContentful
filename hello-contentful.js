var contentful = require('contentful')
var util = require('util')
var client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: '59mi8sr8zemv',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: '3f3d80d1c57594b635592e67231ad92c8bdebffca1a647ae5bca719251fbf059'
})

client.getContentType('events')
    .then(function (contentType) {
        console.log(util.inspect(contentType, {
            depth: null
        }))
    })
