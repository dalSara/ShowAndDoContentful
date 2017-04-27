function editTrack (){

    //contentful management id the module that have contact with contentful.
    //this is the conection to the module
    var contentful = require('contentful-management')
    var client = contentful.createClient({
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: ''
    });


    //HTML-objeckter

    var testTestEdit;
    var pandaEdit;
    var editTrackBtn;

    var init = function (){

        testTestEdit = document.getElementById("testTestEdit");
        pandaEdit = document.getElementById("pandaEdit");
        editTrackBtn = document.getElementById("editTrackBtn");


       editEvent();


    }(); /*--end init--*/


    //the function that creates a new event, and post it to contentful
    function editEvent (){

   //     var pandaNewEdit = pandaEdit.value;
     //   var testTestNewEdit = testTestEdit.value;

        // This API call will request a space with the specified ID
        client.getSpace('59mi8sr8zemv')
            .then((space) => {
            // Now that we have a space, we can get entries from that space
            //    space.getEntries()
            //      .then((entries) => {
            //     console.log(entries.items)
            //    })

            //This function is finding the correct contenttype in contentful and add new data to that space



            //            function setText(){
            space.getEntry('3eDQQRsiK4YoqEqagMsiU')
                .then((entry) => { console.log(entry.fields.testTest)
                                  // (testTestNewText).appendTo.testTestText
                                   var test = "testTestText".innerHTML = (entry.fields.testTest.value)
                                   console.log(test)
                                  //return ("testTestText".value).innerHTML = (entry.fields.testTest.value);
                                //return document.getElementById('testTestEdit').value = entry.fields.testTest.;
                                 })



            /*
                   // .then((entry) => {
                       // entry.getFields(panda)
               // (pandaText).innerHTML = (entry.fields.panda)
          //  }

          document.getElementById("demo").innerHTML = "Paragraph changed!";



            /*
            space.createEntry('test', {
                fields: {
                    testTest: {
                        'en-US': testTestNewText
                    },
                    panda: {
                        'en-US': pandaNewText

                    }
                }
            })//end createEntry
            //.then(e => console.log(e))
            */
        })//end getSpace

    }//end createNewEvent



}//end EditTrack

exports.editTrack = editTrack
