//Module Pattern
var CONTENTFULMODUL = (function(){

    var contentfulConnection = function(){
        var contentful = require('contentful-management')
        var client = contentful.createClient({
            // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
            accessToken: '3f3d80d1c57594b635592e67231ad92c8bdebffca1a647ae5bca719251fbf059'
        })

        // This API call will request a space with the specified ID
        client.getSpace('59mi8sr8zemv')
            .then((space) => {
            // Now that we have a space, we can get entries from that space
            space.getEntries()
                .then((entries) => {
                //console.log(entries.items)
            })

            debugger;

            // let's get a content type
            space.getContentType('test')
                .then((contentType) => {
                // and now let's update its name
                contentType.name = 'oppdate test'
                contentType.update()
                    .then((updatedContentType) => {
                    console.log('Update was successful')
                })
            })
        })
        console.log('inside');
    };

    return{
        contentfulConnection: contentfulConnection
    };
}());/*-------------- END CONTENTFULMODUL -------------*/
