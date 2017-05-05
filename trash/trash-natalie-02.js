//Eksempel fra: https://jsfiddle.net/contentful/kefaj4s8/
//NB: Klasser er foreløpig ikke i bruk!
//js-className

/*-------------- CLIENT --------------*/
var client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: '59mi8sr8zemv',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: '3f3d80d1c57594b635592e67231ad92c8bdebffca1a647ae5bca719251fbf059'
})
/*-------------- END CLIENT --------------*/

var EVENT_CONTENT_TYPE_ID = 'datesForShowDo';

var row1 = document.getElementById('row1');

/*-------------- GET ENTRIES --------------*/
client.getEntries({
    content_type: EVENT_CONTENT_TYPE_ID,
    order: 'fields.date' //Sort by date in datesForShowDo
})
    .then(function (entries) {

    var allDates = entries.items;
    console.log('Entry Client: All dates (sorted):', allDates); //all dates


    /*-------------- TODAYS DATE --------------*/
    var today = new Date();
    //ISO8601 formatted YYYY-MM-DD (to match Contentful):
    var todayFormatted = today.getFullYear() + '-' + ('0' + (today.getMonth() +1)).slice(-2) + '-' + ('0' + today.getDay()).slice(-2);
    //console.log('TODAY:', todayFormatted);
    /*-------------- END TODAYS DATE --------------*/

    /*-------------- GET DATES --------------*/
    //loop through dates in datesForShowDo
    for(var i = 0; i < allDates.length; i++){
        var dates = allDates[i];
        var oneDate = dates.fields.date;

        if(todayFormatted == oneDate){
            var thisWeeksShowDo = oneDate;
            console.log('Mach todays date! ', thisWeeksShowDo);

            //EVENTS TO DISPLAY:
            var thisWeeksEvents = dates.fields.link;

            //console.log('liiiiink', thisWeeksEvents);
        }/*else if(todayFormatted != oneDate){
            console.log('No mach');
        }*/
    }
    /*-------------- END GET DATES --------------*/




    /*-------------- GET EVENTS IN ONE DATE --------------*/
    //if event exists in date
    //var firstDate = allDates[1];
    //console.log('The first dateeeeee!! ', firstDate.fields.date);

    //var eventsInDate = firstDate.fields.link; //events i one date
    //if(eventsInDate != null || eventsInDate == true){

    if(thisWeeksEvents != null || thisWeeksEvents == true){
        console.log('All events in this date', thisWeeksEvents);//[0]);

        //loop through events in one date
        for(var i = 0; i < thisWeeksEvents.length; i++){
            var oneEvent = thisWeeksEvents[i];
        }
    }
    /*-------------- END EVENTS IN ONE DATE --------------*/

    /*-------------- SORTING EVENTS BY SIZE --------------*/
    //if event exists in date
    if(thisWeeksEvents != null || thisWeeksEvents == true){
        var eventArray = [];
        for(var i = 0; i < thisWeeksEvents.length; i++){
            var oneEvent = thisWeeksEvents[i].fields;
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
    }
    /*-------------- END SORTING EVENTS BY SIZE --------------*/

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
    //if event exists in date
    if(event != null || event == true){
        //console.log(':::::::::', event); //one date

        //if time exists in time
        if(event.time != null || event.time == true){
            var time = event.time;
            var startTime = time.substring(time.length - 5);

            //console.log('StartTime:', startTime);
            //console.log(event.time);
        }
    }

    if(startTime == "13:00" && event.size == "Large"){
        return '<div class="cal largeTrack" style="grid-row: 1/4;">' +

            '<div class="eventInfo">' +
            renderEventInfo(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "13:00" && event.size == "Medium"){
        return '<div class="cal mediumTrack" style="grid-row: 1/3;">' +

            '<div class="eventInfo">' +
            renderEventInfo(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "13:00" && event.size == "Small"){
        return '<div class="cal smallTrack" style="grid-row: 1/2;">' +

            '<div class="eventInfo">' +
            renderEventInfo(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "14:00" && event.size == "Medium"){
        return '<div class="cal mediumTrack" style="grid-row: 2/4;">' +

            '<div class="eventInfo">' +
            renderEventInfo(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "14:00" && event.size == "Small"){
        return '<div class="cal smallTrack" style="grid-row: 2/3;">' +

            '<div class="eventInfo">' +
            renderEventInfo(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "15:00" && event.size == "Small"){
        return '<div class="cal smallTrack" style="grid-row: 3/4;">' +

            '<div class="eventInfo">' +
            renderEventInfo(event) +
            '</div>' +
            '</div>';
    }
}
/*-------------- END PUT ELEMENTS TOGETHER --------------*/

/*-------------- GET DATA FROM ONE EVENT --------------*/
function renderEventInfo(event){
    var date = event.time;
    var startTime = date.substring(date.length - 5);

    if(event.location == null){
        return  '<h4>' + event.title + '</h4>' +
                '<p>' + startTime + '</p>' +
                '<div id="locationWrapper"><i class="icon-room-filled"></i>' +
                '<p id="location">TBA</p></div>';
    }else{
        return  '<h4>' + event.title + '</h4>' +
                '<p>' + startTime + '</p>' +
                '<div id="locationWrapper"><i class="icon-room-filled"></i>' +
                '<p id="location">' + event.location + '</p></div>';
    }
}
/*-------------- END GET DATA FROM ONE EVENT --------------*/
