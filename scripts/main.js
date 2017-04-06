//contentful management id the module that have contact with contentful.
//this is the conection to the module
var contentful = require('contentful-management')
var client = contentful.createClient({
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'b60f393ec836a43747cb5a238cdc49e379361c7d7a0a96012191fb3745e2532b'
})

//HTML-objeckter
var testTestText;
var pandaText;
var addTrackBtn;

var init = function (){

    var setHTMLObjects = function(){
        testTestText = document.getElementById("testTestText");
        pandaText = document.getElementById("pandaText");
        addTrackBtn = document.getElementById("addTrackBtn");
    }();



    var setEvents = function (){
        addTrackBtn.onclick = createNewEvent();

    }()
    }(); /*--end init--*/

function createNewEvent (){

    var pandaNewText = pandaText.value;
    var testTestNewText = testTestText.value;

    // This API call will request a space with the specified ID
    client.getSpace('59mi8sr8zemv')
        .then((space) => {
        // Now that we have a space, we can get entries from that space
        space.getEntries()
            .then((entries) => {
            console.log(entries.items)
        })

        //This function is finding the correct space in contentful and add new data to that space

        space.createEntry('test', {
            fields: {
                testTest: {
                    'en-US': testTestText.value,
                },
                panda: {
                    'en-US': pandaNewText
                }
            }
        })
            .then(e => console.log(e))

    })
    console.log("funkar")
};

