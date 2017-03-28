//Eksempel fra: https://jsfiddle.net/contentful/kefaj4s8/
//NB: Klasser er foreløpig ikke i bruk!


/*-------------- CLIENT --------------*/
var client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: '59mi8sr8zemv',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: '3f3d80d1c57594b635592e67231ad92c8bdebffca1a647ae5bca719251fbf059'
})
/*-------------- END CLIENT --------------*/
//Set a id to our list and tells where we want to display it

var EVENT_CONTENT_TYPE_ID = 'events';

var container = document.getElementById('changecontent');

/*-------------- GET ENTRIES --------------*/
//Get us all the enteries from the list with our id
client.getEntries({
    content_type: EVENT_CONTENT_TYPE_ID
})
    .then(function (entries) {
    console.log('Entry Client:', entries.items);
    container.innerHTML = renderEvents(entries.items);
})
/*-------------- END GET ENTRIES --------------*/

/*-------------- GET ALL EVENTS --------------*/
function renderEvents(events){
    return '<div class="events">' +
        events.map(renderSingleEvent).join('\n') +
        '</div>';
}
/*-------------- END GET ALL EVENTS --------------*/

/*-------------- PUT ELEMENTS TOGETHER --------------*/
function renderSingleEvent(event){
    var fields = event.fields;
    return '<div class="eventInList">' +
                '<div class="eventImage">' +
                    renderImage(fields.image) +
                '</div>' +

                '<div class="eventInfo">' +
                    renderEventInfo(fields) +
                '</div>' +
            '</div>';
}
/*-------------- PUT ELEMENTS TOGETHER --------------*/

/*-------------- GET DATA FROM ONE EVENT --------------*/
//This function takes the existing info and put it in to inputfields that kan be edited.
function renderEventInfo(fields){
    return '<input type="text" name="title" value="' + fields.title + '">' + '</br>' +
            '<input type="text" name="whatToExpect size="150" value="' + fields.whatToExpect + '">'

}
/*-------------- END GET DATA FROM ONE EVENT --------------*/

/*-------------- GET IMAGE --------------*/
//Gets the url from the choosen list and display the iamge in size
function renderImage(image){
    if(image && image.fields.file){
        return '<img src="https://' + image.fields.file.url + '" width="150" height="150"/>';
    } else {
    return '';
    }
}
/*-------------- END GET IMAGE --------------*/
