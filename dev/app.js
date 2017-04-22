var Timeline = require("./timeline");
var TimelineHTML = require('./timelineHTML');
import $ from 'jquery';

var dTab = [["02.06.2015","lorem ipsum","a"],
            ["11.06.2015","lorem ipsum","a"],
            ["15.06.2015","lorem ipsum","a"],
            ["22.06.2015","lorem ipsum","a"],
            ["30.06.2015","lorem ipsum","a"]];
var sDate = new Date("6-01-2015");
var eDate = new Date("6-30-2015");
var cDate = new Date("6-10-2015");

var t = new Timeline(dTab, sDate, eDate, cDate);
console.log(t.calendar);
var rootEl = $("#app");
var tHTML = new TimelineHTML(t.calendar, rootEl);
tHTML.init();
