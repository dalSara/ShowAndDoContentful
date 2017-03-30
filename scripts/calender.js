//var $ = require("jquery");
//APP pattern (Object literal)
var CALENDER = {
    /*-------------- VARIABLES -------------*/
    oneEventIndex: 0,
    eventTitle: 0,
    /*-------------- END VARIABLES -------------*/

    /*-------------- HTML-objects -------------*/
    $MPtest: null,

    $JStrack1: null,
    $JStrack2: null,
    $JStrack3: null,
    $JStrack4: null,
    $JStrack5: null,
    $JStrack6: null,
    $JStrack7: null,
    $JStrack8: null,
    /*-------------- END HTML-objects -------------*/

    /*-------------- INIT -------------*/
    init: function(){

        var CAL = CALENDER;

        var setElements = function(){
            CAL.$MPtest = $("#MPtest");

            CAL.$JStrack1 = $(".JStrack1");
            CAL.$JStrack2 = $(".JStrack2");
            CAL.$JStrack3 = $(".JStrack3");
            CAL.$JStrack4 = $(".JStrack4");
            CAL.$JStrack5 = $(".JStrack5");
            CAL.$JStrack6 = $(".JStrack6");
            CAL.$JStrack7 = $(".JStrack7");
            CAL.$JStrack8 = $(".JStrack8");
        }();

        var setEvents = function(){

        }();

        var setPage = function(){
            CAL.showInfo();
        }();
    },/*-------------- END INIT -------------*/

    //functions:
    showInfo: function(){
        var CAL = CALENDER;

        var oneEventIndex = CAL.oneEventIndex;
        var oneEvent = DATADELIVERYMODUL.getOneEvent(oneEventIndex + 1);

        //var $newTitle = $("<a href='#JsScroll1' class='scrollTo'>" + oneEvent.title + "</a>");
        var $newTitle = $("<p>" + oneEvent.title + "</p>");

        CAL.$MPtest.append($newTitle);
        /*var oneEvent = DATADELIVERYMODUL.getOneEvent(oneEventIndex + 1); //Get all text from JSON, from index 1 and ->

        var $newTitle = $("<a href='#JsScroll1' class='scrollTo'>" + oneEvent.title + "</a>");

        if(oneEvent.hasOwnProperty("title")){
            CAL.$JStrack1.append($newTitle);
        }*/
        //var $newTitle = $("<a href='#JsScroll1' class='scrollTo'>" + oneEvent.title + "</a>");

        /*CAL.$JStrack1
            .append(("<a href='#JsScroll1' class='scrollTo'>") + events[0]
                            .title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[0]
                            .room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[0]
                            .duration + ("</div>") + ("</a>")),*/

        /*CAL.$JStrack1
            .append(("<a href='#JsScroll1' class='scrollTo'>") + events[0]
                            .title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[0]
                            .room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[0]
                            .duration + ("</div>") + ("</a>"));

        CAL.$JStrack2.append(("<a href='#JsScroll2' class='scrollTo'>") + events[1]
                             .title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[1]
                             .room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[1]
                             .duration + ("</div>") + ("</a>"));
        CAL.$JStrack3
            .append(("<a href='#JsScroll3' class='scrollTo'>") + events[2].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[2].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[2].duration + ("</div>") + ("</a>"));
        CAL.$JStrack4
            .append(("<a href='#JsScroll4' class='scrollTo'>") + events[3].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[3].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[3].duration + ("</div>") + ("</a>"));
        CAL.$JStrack5
            .append(("<a href='#JsScroll5' class='scrollTo'>") + events[4].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[4].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[4].duration + ("</div>") + ("</a>"));
        CAL.$JStrack5
            .append(("<a href='#JsScroll6' class='scrollTo'>") + events[5].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[5].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[5].duration + ("</div>") + ("</a>"));
        CAL.$JStrack6
            .append(("<a href='#JsScroll7' class='scrollTo'>") + events[6].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[6].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[6].duration + ("</div>") + ("</a>"));
        CAL.$JStrack8
            .append(("<a href='#JsScroll8' class='scrollTo'>") + events[7].title + ("<br>") + ("<div class='rooms'>") + " Room: " + events[7].room + ("</div>") + ("<div class='duration'>") + "Duration: " + events[7].duration + ("</div>") + ("</a>"));
    },*/
    },
};/*-------------- END CALENDER -------------*/
$(function(){
    CALENDER.init();
});
