var Timeline = require("./timeline");
var TimelineHTML = require('./timelineHTML');
import $ from 'jquery';

var dTab = [["02.06.2015","lorem ipsum dolor sit amet","fa-heart"],
            ["11.06.2015","lorem ipsum dolor sit amet","fa-flask"],
            ["15.06.2015","lorem ipsum dolor sit amet","fa-gavel"],
            ["22.06.2015","lorem ipsum dolor sit amet","fa-graduation-cap"],
            ["30.06.2015","lorem ipsum dolor sit amet","fa-trophy"]];
var sDate = new Date(2015,5,1);
var eDate = new Date(2015,5,30);
var cDate = new Date(2015,5,10);

var t = new Timeline(dTab, sDate, eDate, cDate);
var rootEl = $("#app");
var tHTML = new TimelineHTML(t.calendar, rootEl);
tHTML.init();
var events = {
  onWidthChange : function(){
    let newWidth = $( window ).width();
    if(newWidth >= 700){
      let childNum = rootEl.find($(".timeline")).children().length;
      let ulWidth = rootEl.find($(".timeline")).width();
      let eventsNum = rootEl.find($(".timeline")).find(".event").length + rootEl.find($(".timeline")).find(".pevent").length;
      let eventWidth = 36;  //hardcoded becouse of delay coused by font-awsome
      let liWidth = Math.floor((ulWidth-eventsNum*eventWidth)/childNum);
      rootEl.find($(".noevent")).width(liWidth);

    }
  },

  onEventHoverOn : function(){
    let date = $(this).attr("data-date");
    let name = $(this).attr("data-name");

    let div = $("<div></div>");
    div.addClass("tooltip");
    div.css("display","none");
    let p = $("<p>"+date+"</p>");
    div.append(p);
    name = name.slice(0,21);
    p = $("<p>"+name+"</p>");
    div.append(p);
    $(this).find("div").append(div);
    $(this).find(".tooltip").fadeIn(300);
  },

  onEventHoverOut : function(){
    $(this).find(".tooltip").fadeOut(400);
    setTimeout(()=>{
      $(this).find(".tooltip").remove();
    },400);
  }
}
module.exports=events;
