var Timeline = require("./app");

var dTab = [["01.06.2015","lorem ipsum","a"],
            ["05.06.2015","lorem ipsum","a"],
            ["11.06.2015","lorem ipsum","a"],
            ["15.06.2015","lorem ipsum","a"],
            ["18.06.2015","lorem ipsum","a"],
            ["25.06.2015","lorem ipsum","a"]];
var sDate = new Date("6-01-2015");
var eDate = new Date("6-30-2015");
var cDate = new Date("6-10-2015");

var t = new Timeline(dTab, sDate, eDate, cDate);
console.log(t.calendar);
