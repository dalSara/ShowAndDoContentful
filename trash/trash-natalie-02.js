//var moment = require('moment'); treng ikkje??

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
var list = document.getElementById('list');

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
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() +1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var todaysDate = year + '-' + month + '-' + day;
    //console.log('TODAY:', todaysDate);
    /*-------------- END TODAYS DATE --------------*/

    //console.log(allDates);

    /*-------------- GET NEXT DATE --------------*/
    //loop through dates in datesForShowDo
    for(var i = 0; i < allDates.length; i++){
        var dates = allDates[i];
        var oneDate = dates.fields.date;

        if(oneDate >= todaysDate){
            var nextShowDo = oneDate;

            console.log('Later than todaysDate', nextShowDo);
            var thisWeeksEvents = dates.fields.link; //EVENTS TO DISPLAY
            break;
            //if date is earlier then today
        }
    }
    /*-------------- END GET NEXT DATE --------------*/

    /*-------------- GET PREV DATE --------------*/
    /*for(var i = 0; i < allDates.length; i++){
        var dates = allDates[i];
        var oneDate = dates.fields.date;

        if(oneDate <= todaysDate){
            var previousShowDo = oneDate;
            console.log('Earlier than todaysDate', previousShowDo);

            var thisWeeksEvents = dates.fields.link;
            break;
        }
    }*/
    /*-------------- GET PREV DATE --------------*/



    /*-------------- GET EVENTS IN ONE DATE --------------*/
    //if event exists in date
    //var firstDate = allDates[1];
    //console.log('The first dateeeeee!! ', firstDate.fields.date);

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

    row1.innerHTML = renderEventsCal(eventArray);
    list.innerHTML = renderEventsList(eventArray);
})
/*-------------- END GET ENTRIES --------------*/

function getTodaysDate(){

}
/*-------------- GET ALL EVENTS TO CALENDAR --------------*/
function renderEventsCal(events){
    return events.map(renderSingleEventCal).join('\n');
}
/*-------------- END GET ALL EVENTS CALENDAR --------------*/

/*-------------- PUT ELEMENTS TOGETHER: CALENDAR --------------*/
function renderSingleEventCal(event){
    //if event exists in date
    if(event != null || event == true){
        //console.log(':::::::::', event); //one date

        //if time exists in time
        if(event.time != null || event.time == true){
            var time = event.time;
            var startTime = time.substring(time.length - 5);
        }
    }

    if(startTime == "13:00" && event.size == "Large"){
        return '<div class="cal largeTrackCal">' +

            '<div class="eventInfoCal">' +
            renderEventInfoCal(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "13:00" && event.size == "Medium"){
        return '<div class="cal mediumTrackCal-13">' +

            '<div class="eventInfoCal">' +
            renderEventInfoCal(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "13:00" && event.size == "Small"){
        return '<div class="cal smallTrackCal-13">' +

            '<div class="eventInfoCal">' +
            renderEventInfoCal(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "14:00" && event.size == "Medium"){
        return '<div class="cal mediumTrackCal-14">' +

            '<div class="eventInfoCal">' +
            renderEventInfoCal(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "14:00" && event.size == "Small"){
        return '<div class="cal smallTrackCal-14">' +

            '<div class="eventInfoCal">' +
            renderEventInfoCal(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "15:00" && event.size == "Small"){
        return '<div class="cal smallTrackCal-15">' +

            '<div class="eventInfoCal">' +
            renderEventInfoCal(event) +
            '</div>' +
            '</div>';
    }
}
/*-------------- END PUT ELEMENTS TOGETHER: CALENDAR --------------*/

/*-------------- GET DATA FROM ONE EVENT: CALENDAR --------------*/
function renderEventInfoCal(event){
    var date = event.time;
    var startTime = date.substring(date.length - 5);

    if(event.location == null){
        return  '<h4 class="eventTitleCal">' + event.title + '</h4>' +
            '<p class="startTimeCal">' + startTime + '</p>' +
            '<div class="locationWrapperCal"><i class="icon-room-filled-cal"></i>' +
            '<p class="locationCal">TBA</p></div>';
    }else{
        return  '<h4 class="eventTitleCal">' + event.title + '</h4>' +
            '<p class="startTimeCal">' + startTime + '</p>' +
            '<div class="locationWrapperCal"><i class="icon-room-filled-cal"></i>' +
            '<p class="locationCal">' + event.location + '</p></div>';
    }
}
/*-------------- END GET DATA FROM ONE EVENT: CALENDAR --------------*/

/*-------------- GET ALL EVENTS TO LIST --------------*/
function renderEventsList(events){
    return events.map(renderSingleEventList).join('\n');
}
/*-------------- END GET ALL EVENTS LIST --------------*/

/*-------------- PUT ELEMENTS TOGETHER: LIST --------------*/
function renderSingleEventList(event){
    //if event exists in date
    if(event != null || event == true){
        //console.log(':::::::::', event); //one date

        //if time exists in time
        if(event.time != null || event.time == true){
            var time = event.time;
            var startTime = time.substring(time.length - 5);
        }
    }

    //if(startTime == "13:00" && event.size == "Large"){
        return '<div class="listEvent">' +
            '<div class="eventImage">' +
            renderImage(event.image) +
            '</div>' +

            '<div class="eventInfoList">' +
            renderEventInfoList(event) +
            '</div>' +
            '</div>';
    /*}else if(startTime == "13:00" && event.size == "Medium"){
        return '<div class="listEvent">' +
            '<div class="eventImage">' +
            renderImage(event.image) +
            '</div>' +

            '<div class="eventInfo">' +
            renderEventInfoList(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "13:00" && event.size == "Small"){
        return '<div class="listEvent">' +
            '<div class="eventImage">' +
            renderImage(event.image) +
            '</div>' +

            '<div class="eventInfo">' +
            renderEventInfoList(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "14:00" && event.size == "Medium"){
        return '<div class="listEvent">' +
            '<div class="eventImage">' +
            renderImage(event.image) +
            '</div>' +

            '<div class="eventInfo">' +
            renderEventInfoList(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "14:00" && event.size == "Small"){
        return '<div class="listEvent">' +
            '<div class="eventImage">' +
            renderImage(event.image) +
            '</div>' +

            '<div class="eventInfo">' +
            renderEventInfoList(event) +
            '</div>' +
            '</div>';
    }else if(startTime == "15:00" && event.size == "Small"){
        return '<div class="listEvent">' +
            '<div class="eventImage">' +
            renderImage(event.image) +
            '</div>' +

            '<div class="eventInfo">' +
            renderEventInfoList(event) +
            '</div>' +
            '</div>';
    }*/
}
/*-------------- END PUT ELEMENTS TOGETHER: LIST --------------*/

/*-------------- GET DATA FROM ONE EVENT: LIST --------------*/
function renderEventInfoList(event){
    var date = event.time;
    var startTime = date.substring(date.length - 5);

    return  '<div class="leftListInfo">' +
        '<h3 class="eventTitleList">' + event.title + '</h3>' +
        '<h4>HOST</h4><p>' + event.host + '</p>' +
        '<h4>WHAT TO EXPECT</h4><p>' + event.whatToExpect + '</p>' +
        '<h4>PREREQUISITES</h4><p>' + event.prerequisites + '</p>' +
        '<h4>BEST SUITED FOR</h4><p>' + event.whoShouldJoin + '</p>' +
        '</div>' +

        '<div class="rightListInfo">' +
        '<div class="timeWrapperList">' +
            '<i class="icon-clock"></i><p class="startTimeList">' + startTime + '</p>' +
        '</div>' +
        '<div class="locationWrapperList">' +
            '<i class="icon-room"></i><p class="locationList">' + event.location + '</p>' +
        '</div>' +
        '<div  class="goingBtnWrapper">' +
        '<button type="button" class="goingBtn" id="going"></button>' +
            '<div class="goingInput hidden" id="goingInput">' +
                '<div class="inputName">' +
                    'Name: <input type="text" value="" id="name" name="name">' +
                    '<div tabindex="0" role="button" id="registerBtn" type="submit">Register</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="goingWrapperList">' +
            '<h4>PEOPLE GOING</h4><p>  ...list of people...    </p>' +
        '</div>' +
        '</div>';

}
/*-------------- END GET DATA FROM ONE EVENT: LIST --------------*/

/*-------------- GET IMAGE --------------*/
function renderImage(image){
    if(image && image.fields.file){
        return '<img src="' + image.fields.file.url + '"/>';
    } else {
        return '';
    }
}
/*-------------- END GET IMAGE --------------*/
