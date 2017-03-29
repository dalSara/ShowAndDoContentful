

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
