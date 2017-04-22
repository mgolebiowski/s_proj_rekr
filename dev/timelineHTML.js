import $ from 'jquery';
// calendar should be calendar property of Timelline object
// selEl should be proper jQuery root object of generated timeline
const TimelineHTML = function(calendar, selEl){
  this.calendar = calendar;
  this.selEl = selEl;
}

TimelineHTML.prototype.init = function(){
  let list = $("<ul class=\"timeline\"></ul>");
  this.calendar.map((day)=>{
    let el = $("<li></li>");
    el.addClass(day.status);
    if(day.status == "event" || day.status == "pevent"){
      el.attr("data-date",day.date);
      el.attr("data-name",day.name);
      el.attr("data-img-class",day.icon);

      let desc = $("<div></div>");
      desc.append("<img class=\""+ day.icon +"\">");
      desc.append("<p class=\"data\">"+ day.date +"</p>");
      desc.append("<p class=\"name\">"+ day.name +"</p>");
      el.append(desc);
    }
    list.append(el);
  });
  this.selEl.append(list);
}
module.exports = TimelineHTML;
