function addTrack (){

    //contentful management id the module that have contact with contentful.
    //this is the conection to the module
    var contentful = require('contentful-management')
    var client = contentful.createClient({
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: 'b60f393ec836a43747cb5a238cdc49e379361c7d7a0a96012191fb3745e2532b'
    });


    //HTML-objeckter (test)
    /*
    var testTestText;
    var pandaText;
      */

    //Html-objekter (riktiga)

    var JSaddTitle;
    var JSaddHosts;
    var JSaddPrereq;
    var JSaddStartOne; //tids formatet 2017-05-05T13:00
    //var JSaddStartTwo;
    //var JSaddStartthree;
    var JSaddHourOne;
    //var JSaddHourTwo:
    //var JSaddHourthree;
    var JSaddNrOfPart;
    var JSaddExpect;
    var JSaddJoin;
    var JSaddImage;
    //var JSaddStockOne;
    //var JSaddStockTwo;
    //var JSaddStockThree;
    var JSaddElse;
    // var JSaddStatus;

    var addTrackBtn;



    var init = function (){

        //testTestText = document.getElementById("testTestText");
        //pandaText = document.getElementById("pandaText");


        JSaddTitle = document.getElementById("JSaddTitle");
        JSaddPrereq = document.getElementById ("JSaddPrereq");
        JSaddStartOne = document.getElementById("JSaddStartOne");
        // JSaddStartTwo = document.getElementById("JSaddStartTwo");
        //JSaddStartthree = document.getElementById("JSaddStartthree");
        JSaddHourOne = document.getElementById("JSaddHourOne");
        //JSaddHourTwo= document.getElementById("JSaddHourTwo");
        //JSaddHourthree = document.getElementById("JSaddHourthree");
        JSaddNrOfPart = document.getElementById("JSaddNrOfPart");
        JSaddExpect = document.getElementById("JSaddExpect");
        JSaddJoin = document.getElementById("JSaddJoin");
        JSaddImage = document.getElementById("JSaddImage");
        //JSaddStockOne = document.getElementById("JSaddStockOne");
        //JSaddStockTwo = document.getElementById("JSaddStockTwo");
        //JSaddStockThree = document.getElementById("JSaddStockThree");
        JSaddElse = document.getElementById("JSaddElse");
        //JSaddStatus = document.getElementById("JSaddStatus");
        addTrackBtn = document.getElementById("addTrackBtn");


        addTrackBtn.onclick = createNewEvent;
        renderImage();

    }(); /*--end init--*/

    client.getSpace('59mi8sr8zemv')
        .then((space) => space.getAsset('254oDdBfDs63PccEG5XRLU'))
        .then((asset) => console.log(asset))
        .catch(console.error)
    
    function renderImage(asset) {
        if (stockPhotos && stockPhotos.fields.file.url) {
            return 
                '<div id="JSaddStockOne"><img src="' + stockPhotos.fields.file.url + '" width="150" height="150" /></div>'
            console.log("if bilde")
        } else {
            
            return console.log("bajs")
        }
    } 


    //the function that creates a new event, and post it to contentful
    function createNewEvent (){
        /*
        var pandaNewText = pandaText.value;
        var testTestNewText = testTestText.value;
            */


        var JSaddNewTitle = JSaddTitle.value;
        var JSaddNewHosts = JSaddHosts;
        var JSaddNewPrereq = JSaddPrereq.value;
        //use switcha
        //var JSaddNewStartOne = JSaddStartOne.value;
        //var JSaddNewStartTwo = JSaddStartTwo.value;
        //var JSaddNewStartthree = JSaddStartthree.value;
        //var JSaddNewHourOne = JSaddHourOne.value;
        //var JSaddNewHourTwo = JSaddHourTwo.value;
        //var JSaddNewHourthree = JSaddHourthree.value;
        var JSaddNewNrOfPart = JSaddNrOfPart.value;
        var JSaddNewExpect = JSaddExpect.value;
        var JSaddNewJoin = JSaddJoin.value;
        var JSaddNewImage = JSaddImage.value;
        //  var JSaddNewStockOne = JSaddStockOne.value;
        //var JSaddNewStockTwo = JSaddStockTwo.value;
        //var JSaddNewStockThree = JSaddStockThree.value;
        var JSaddNewElse = JSaddElse.value;
        var JSaddStatus


        // This API call will request a space with the specified ID
        client.getSpace('59mi8sr8zemv')
            .then((space) => {
            // Now that we have a space, we can get entries from that space
            space.getEntries()
                .then((entries) => {
                console.log(entries.items)
            })



            //This function is finding the correct contenttype in contentful and add new data to that space


            space.createEntry('events', {
                fields: {
                    title: {
                        'en-US': JSaddNewTitle
                    },
                    host: {
                        'en-US': JSaddNewHosts
                    },
                    prerequisites: {
                        'en-US': JSaddNewPrereq

                    },
                    time: {
                        'en-US': "2017-05-05T13:00"
                    },
                    /*  JSaddStartOne: {
                        'en-US': JSaddNewStartOne

                    },
                    JSaddStartTwo: {
                        'en-US': JSaddNewStartTwo

                    },
                    JSaddStartthree: {
                        'en-US': JSaddNewStartthree

                  }, */ 
                    size: {
                        'en-US': "small"
                    },
                    /*JSaddHourOne: {
                        'en-US': JSaddNewHourOne

                    },
                    JSaddHourTwo: {
                        'en-US': JSaddNewHourTwo

                    },
                    JSaddHourthree: {
                        'en-US': JSaddNewHourthree

                 }, */  
                    numberOfParticipants: {
                        'en-US': JSaddNewNrOfPart
                    },
                    whatToExpect: {
                        'en-US': JSaddNewExpect

                    },
                    whoShouldJoin: {
                        'en-US': JSaddNewJoin

                    },
                    image: {
                        'en-US': JSaddNewJoin

                    },/*
                    JSaddStockOne: {
                        'en-US': "5ro2kn2gMwQIu4csowSYKo"

                    },
                    JSaddStockTwo: {
                        'en-US': JSaddNewStockTwo

                    },
                    JSaddStockThree: {
                        'en-US': JSaddNewStockThree

                    }, */
                    anythingElse: {
                        'en-US': JSaddNewElse

                    }
                    //   JSaddStatus: {
                    //     'en-US': "true"

                    //}


                }//end input array
            })//end create entry
            //.then(e => console.log(e))


        })//end getspace 

    }

}

exports.addTrack = addTrack
