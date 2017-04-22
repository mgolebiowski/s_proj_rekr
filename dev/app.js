var Timeline = require("./timeline");
var TimelineHTML = require('./timelineHTML');
import $ from 'jquery';

var dTab = [["02.06.2015","lorem ipsum dolor sit amet","fa-heart"],
            ["11.06.2015","lorem ipsum dolor sit amet","fa-flask"],
            ["15.06.2015","lorem ipsum dolor sit amet","fa-gavel"],
            ["22.06.2015","lorem ipsum dolor sit amet","fa-graduation-cap"],
            ["30.06.2015","lorem ipsum dolor sit amet","fa-trophy"]];
var sDate = new Date("6-01-2015");
var eDate = new Date("6-30-2015");
var cDate = new Date("6-28-2015");

var t = new Timeline(dTab, sDate, eDate, cDate);
var rootEl = $("#app");
var tHTML = new TimelineHTML(t.calendar, rootEl);
tHTML.init();

const onWidthChange = function(){
  let newWidth = $( window ).width();
  if(newWidth >= 700){
    let childNum = rootEl.find($(".timeline")).children().length;
    let ulWidth = rootEl.find($(".timeline")).width();
    let eventsNum = rootEl.find($(".timeline")).find(".event").length + rootEl.find($(".timeline")).find(".pevent").length;
    let eventWidth = 36;
    let liWidth = Math.floor((ulWidth-eventsNum*eventWidth)/childNum);
    rootEl.find($(".noevent")).width(liWidth);

  }
}
module.exports=onWidthChange;
