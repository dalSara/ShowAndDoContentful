function addTrack (){

    //contentful management id the module that have contact with contentful.
    //this is the conection to the module
    var contentful = require('contentful-management')
    var client = contentful.createClient({
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: 'b60f393ec836a43747cb5a238cdc49e379361c7d7a0a96012191fb3745e2532b'
    });


    //HTML-objeckter (test)

    var testTestText;
    var pandaText;
    var addTrackBtn;

    //Html-objekter (riktiga)
    /*
    var JSaddTitle;
    var JSaddPrereq;
    var JSaddStartOne;
    var JSaddStartTwo;
    var JSaddStartthree;
    var JSaddHourOne;
    var JSaddHourTwo:
    var JSaddHourthree;
    var JSaddExpect;
    var JSaddJoin;
    var JSaddImage;
    var JSaddStockOne;
    var JSaddStockTwo;
    var JSaddStockThree;
    var JSaddSelse;

    */

    var init = function (){

        testTestText = document.getElementById("testTestText");
        pandaText = document.getElementById("pandaText");
        addTrackBtn = document.getElementById("addTrackBtn");
        /*
        JSaddTitle = document.getElementById("JSaddTitle");
        JSaddPrereq = document.getElementById ("JSaddPrereq");
        JSaddStartOne = document.getElementById("JSaddStartOne");
        JSaddStartTwo = document.getElementById("JSaddStartTwo");
        JSaddStartthree = document.getElementById("JSaddStartthree");
        JSaddHourOne = document.getElementById("JSaddHourOne");
        JSaddHourTwo= document.getElementById("JSaddHourTwo");
        JSaddHourthree = document.getElementById("JSaddHourthree");
        JSaddExpect = document.getElementById("JSaddExpect");
        JSaddJoin = document.getElementById("JSaddJoin");
        JSaddImage = document.getElementById("JSaddImage");
        JSaddStockOne = document.getElementById("JSaddStockOne");
        JSaddStockTwo = document.getElementById("JSaddStockTwo");
        JSaddStockThree = document.getElementById("JSaddStockThree");
        JSaddElse = document.getElementById("JSaddElse");
        */

        addTrackBtn.onclick = createNewEvent;


    }(); /*--end init--*/


    //the function that creates a new event, and post it to contentful
    function createNewEvent (){

        var pandaNewText = pandaText.value;
        var testTestNewText = testTestText.value;
        /*
        var JSaddNewTitle = JSaddTitle.value;
        var JSaddNewPrereq = JSaddPrereq.value;
        var JSaddNewStartOne = JSaddStartOne.value;
        var JSaddNewStartTwo = JSaddStartTwo.value;
        var JSaddNewStartthree = JSaddStartthree.value;
        var JSaddNewHourOne = JSaddHourOne.value;
        var JSaddNewHourTwo = JSaddHourTwo.value;
        var JSaddNewHourthree = JSaddHourthree.value;
        var JSaddNewExpect = JSaddExpect.value;
        var JSaddNewJoin = JSaddJoin.value;
        var JSaddNewImage = JSaddImage.value;
        var JSaddNewStockOne = JSaddStockOne.value;
        var JSaddNewStockTwo = JSaddStockTwo.value;
        var JSaddNewStockThree = JSaddStockThree.value;
        var JSaddNewElse = JSaddElse.value;
        */

        // This API call will request a space with the specified ID
        client.getSpace('59mi8sr8zemv')
            .then((space) => {
            // Now that we have a space, we can get entries from that space
            space.getEntries()
                .then((entries) => {
                //  console.log(entries.items)
            })

            //This function is finding the correct contenttype in contentful and add new data to that space

            space.createEntry('test', {
                fields: {
                    testTest: {
                        'en-US': testTestNewText
                    },
                    panda: {
                        'en-US': pandaNewText

                    }
                }
            })
            //.then(e => console.log(e))

        })

    }

}

exports.addTrack = addTrack