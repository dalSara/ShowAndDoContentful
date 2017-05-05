function editTrack (){

    // contentful-management.js v3.x.x
    const contentful = require('contentful-management')

    const client = contentful.createClient({
        accessToken: '',
        //  Space: '59mi8sr8zemv',
        resolveLinks: true
    })



    //  function getLink (client){
    console.log("hej")
    // getting a specific Post
    client.getSpace('59mi8sr8zemv')
        .then((space) => space.getEntries({include: 2,'sys.id': '4MT7iMgIcwOEI2gcsyWmcE'})).then((entries) => {
        // datesSD contenttyp.then((space) => space.getEntries({include: 2,'sys.id': '4ZBsibjyqETi1J2agzRLU2'})).then((entries) => {
        // output the author name
        //  for (var i = 0; i < entries.items.length; i++){
        //    console.log(entries.items[i].fields.title)
        //    }
        //

        //finner ett datum
        var eventsInDate = entries.items[0].fields.date; //events
        if(eventsInDate != null || eventsInDate == true){
            console.log('All events in this date', eventsInDate);//[0]);

            //loop through events in one date
            for(var i = 0; i < eventsInDate.length; i++){
                var oneEvent = eventsInDate[i];
                console.log(oneEvent)
            }
        }
    })

    //response.items[0].fields.author.fields.name
    //};
    /*
    , include: '2'
    client.getSpace('59mi8sr8zemv')
        .then((space) => space.getEntries())
        .then(function (entries) {
        ((entries) => console.log(entries.items.title))
       // console.log(entries.items.title);
    })

    //   var eventArray = [];
    //    for(var i = 0; i < entries.items.length; i++){
    //      var oneEvent = entries.items[i].fields;
    //    eventArray.push(oneEvent);
    //    }

    /*
client.getSpace('<space_id>')
.then((space) => space.getContentType('<content_type_id>'))
.then((contentType) => console.log(contentType))
.catch(console.error)




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

    /*
    //the function that creates a new event, and post it to contentful
    function editEvent (){

        // This API call will request a space with the specified ID
        client.getSpace('59mi8sr8zemv')
            .then((space) => {
            // Now that we have a space, we can get entries from that space
            //space.getEntry('1A8p6eaZhmOAoM6W4oGcaW')
            space.getEntries('datesForShowDo')
                .then((entries) => {
                console.log(entries.items[4])
            })


            /*

            //This function is finding the correct contenttype in contentful and add new data to that space

                .then((entry) => {

                console.log(entry.fields.title)


                document.getElementById('pandaEdit').setAttribute('value', JSON.stringify(entry.fields.title));

            })*/

    /*


        })//end getSpace

    }//end EditEvent

*/
    //getLink();
}//end EditTrack

exports.editTrack = editTrack
