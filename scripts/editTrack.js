function editTrack (){

    //contentful management id the module that have contact with contentful.
    //this is the conection to the module
    var contentful = require('contentful-management')
    var client = contentful.createClient({
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: 'b60f393ec836a43747cb5a238cdc49e379361c7d7a0a96012191fb3745e2532b'
    });


    //HTML-objeckter

    var testTestEdit;
    var pandaEdit;
    var editTrackBtn;
    var pandaHej;

    var init = function (){

        testTestEdit = document.getElementById('testTestEdit');
        pandaEdit = document.getElementById("pandaEdit");
        editTrackBtn = document.getElementById("editTrackBtn");

        editEvent();


    }(); /*--end init--*/


    //the function that creates a new event, and post it to contentful
    function editEvent (){

        // This API call will request a space with the specified ID
        client.getSpace('59mi8sr8zemv')
            .then((space) => {
            // Now that we have a space, we can get entries from that space
            space.getEntry('1A8p6eaZhmOAoM6W4oGcaW')
            //      .then((entries) => {
            //     console.log(entries.items)
            //    })




            //This function is finding the correct contenttype in contentful and add new data to that space

                .then((entry) => {

                console.log(entry.fields.title)


                document.getElementById('pandaEdit').setAttribute('value', JSON.stringify(entry.fields.title));

            })



        })//end getSpace

    }//end EditEvent



}//end EditTrack

exports.editTrack = editTrack
