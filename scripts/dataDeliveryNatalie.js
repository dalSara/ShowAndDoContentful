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

var EVENT_CONTENT_TYPE_ID = 'events';

var row1 = document.getElementById('row1');

/*-------------- GET ENTRIES --------------*/
client.getEntries({
    content_type: EVENT_CONTENT_TYPE_ID
})
    .then(function (entries) {
    console.log('Entry Client:', entries.items);



    /*-------------- SORTING JSON AFTER SIZE --------------*/
    var eventArray = [];
    for(var i = 0; i < entries.items.length; i++){
        var oneEvent = entries.items[i].fields;
        eventArray.push(oneEvent);
    }

    eventArray.sort(function (a, b){
        var sizeA = a.size;
        var sizeB = b.size;

        if(sizeA < sizeB){
            return -1;
        }
        if(sizeA > sizeB){
            return 1;
        }
        return 0;
    });

    console.log('Sortert LARGE -> SMALL ', eventArray);
    /*-------------- END SORTING JSON AFTER SIZE --------------*/



    /*eventArray.sort(function (a, b){
        return a.numberOfParticipants - b.numberOfParticipants;
    });
    console.log('Sortert numberOfParticipants ', eventArray);*/

    //console.log('Entry Client 2:', entries.items[0].fields);
    //row1.innerHTML = renderEvents(entries.items);
    row1.innerHTML = renderEvents(eventArray);
})



/*-------------- END GET ENTRIES --------------*/


/*-------------- GET ALL EVENTS --------------*/
function renderEvents(events){
    return events.map(renderSingleEvent).join('\n');
}
/*-------------- END GET ALL EVENTS --------------*/


/*-------------- PUT ELEMENTS TOGETHER --------------*/
function renderSingleEvent(event){
    var fields = event;
    //console.log('Test nr. 2:', fields);

    var dateTime = fields.date;
    var startTime = dateTime.substring(dateTime.length - 5);

    if(startTime == "13:00" && fields.size == "Large"){
        return '<div class="cal largeTrack" style="grid-row: 1/4;">' +

            '<div class="eventInfo">' +
            renderEventInfo(fields) +
            '</div>' +
            '</div>';
    }else if(startTime == "13:00" && fields.size == "Medium"){
        return '<div class="cal mediumTrack" style="grid-row: 1/3;">' +

            '<div class="eventInfo">' +
            renderEventInfo(fields) +
            '</div>' +
            '</div>';
    }else if(startTime == "13:00" && fields.size == "Small"){
        return '<div class="cal smallTrack" style="grid-row: 1/2;">' +

            '<div class="eventInfo">' +
            renderEventInfo(fields) +
            '</div>' +
            '</div>';
    }else if(startTime == "14:00" && fields.size == "Medium"){
        return '<div class="cal mediumTrack" style="grid-row: 2/4;">' +

            '<div class="eventInfo">' +
            renderEventInfo(fields) +
            '</div>' +
            '</div>';
    }else if(startTime == "14:00" && fields.size == "Small"){
        return '<div class="cal smallTrack" style="grid-row: 2/3;">' +

            '<div class="eventInfo">' +
            renderEventInfo(fields) +
            '</div>' +
            '</div>';
    }else if(startTime == "15:00" && fields.size == "Small"){
        return '<div class="cal smallTrack" style="grid-row: 3/4;">' +

            '<div class="eventInfo">' +
            renderEventInfo(fields) +
            '</div>' +
            '</div>';
    }
}
/*-------------- END PUT ELEMENTS TOGETHER --------------*/

/*-------------- GET DATA FROM ONE EVENT --------------*/
function renderEventInfo(fields){
    var dateTime = fields.date;
    var startTime = dateTime.substring(dateTime.length - 5);

    if(fields.location == null){
        return  '<h4>' + fields.title + '</h4>' +
                '<p>' + startTime + '</p>' +
                '<div id="locationWrapper"><i class="icon-room-filled"></i>' +
                '<p id="location">TBA</p></div>';
    }else{
        return  '<h4>' + fields.title + '</h4>' +
                '<p>' + startTime + '</p>' +
                '<div id="locationWrapper"><i class="icon-room-filled"></i>' +
                '<p id="location">' + fields.location + '</p></div>';
    }
}
/*-------------- END GET DATA FROM ONE EVENT --------------*/