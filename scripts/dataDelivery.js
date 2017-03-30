//Module Pattern
var DATADELIVERYMODUL = (function(){

    var eventJSON = function(){
        //Eksempel fra: https://jsfiddle.net/contentful/kefaj4s8/
        /*-------------- CLIENT --------------*/
        var client = contentful.createClient({
            // This is the space ID. A space is like a project folder in Contentful terms
            space: '59mi8sr8zemv',
            // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
            accessToken: '3f3d80d1c57594b635592e67231ad92c8bdebffca1a647ae5bca719251fbf059'
        })/*-------------- END CLIENT --------------*/

        var EVENT_CONTENT_TYPE_ID = 'events';
        //var fields = event.fields;

        /*-------------- GET ENTRIES --------------*/
        client.getEntries({
            content_type: EVENT_CONTENT_TYPE_ID
        })
            .then(function (entries) {
            console.log('Entry Client:', entries.items);
            container.innerHTML = renderEvents(entries.items);
        })/*-------------- END GET ENTRIES --------------*/
    };/*-------------- END EVENTJSON --------------*/

    var getOneEvent = function(oneEventIndex){
        return eventJSON.event.fields[oneEventIndex];
    };

    var getTitle = function(titleIndex){
        return eventJSON.event.fields[titleIndex].title;
    };

    var getLocation = function(locationIndex){
        return eventJSON.event.fields[locationIndex].location;
    };

    var getNumberOfParticipants = function(locationIndex){
        return eventJSON.event.fields[numberOfParticipantsIndex].numberOfParticipants;
    };

    var getPrerequisites = function(prerequisitesIndex){
        return eventJSON.event.fields[prerequisitesIndex].prerequisites;
    };

    var getWhatToExpect = function(whatToExpectIndex){
        return eventJSON.event.fields[whatToExpectIndex].whatToExpect;
    };

    var getWhoShouldJoin = function(whoShouldJoinIndex){
        return eventJSON.event.fields[whoShouldJoinIndex].whoShouldJoin;
    };

    var getImage = function(imageIndex){
        return eventJSON.event.fields[imageIndex].image;
    };

    var getAnythingElse = function(anythingElseIndex){
        return eventJSON.event.fields[anythingElseIndex].anythingElse;
    };

    var getDate = function(dateIndex){
        return eventJSON.event.fields[dateIndex].date;
    };

    return{
        getOneEvent: getOneEvent,
        getTitle: getTitle,
        getLocation: getLocation,
        getNumberOfParticipants: getNumberOfParticipants,
        getPrerequisites: getPrerequisites,
        getWhatToExpect: getWhatToExpect,
        getWhoShouldJoin: getWhoShouldJoin,
        getImage: getImage,
        getAnythingElse: getAnythingElse,
        getDate: getDate
    };
}());/*-------------- END DATADELIVERYMODUL -------------*/
