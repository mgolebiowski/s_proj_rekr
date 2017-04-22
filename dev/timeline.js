// adding method do Date object to simpify date comparing
Date.prototype.toDotDate =function(){
  let day = (this.getDate() > 9)?this.getDate():"0"+this.getDate();
  let month = (this.getMonth() > 9)?this.getMonth()+1:"0"+(this.getMonth()+1);

  return day+"."+month+"."+this.getFullYear();
}

// startDate and endDate should be proper date js objects.
// datesTable = [[""data","nazwa","ikona"],["data","nazwa","ikona"],["data","nazwa","ikona"],["data","nazwa","ikona"],...]
// data:string = e.g. "30.6.2015" => should be proper date local string
// "nazwa":string
// "ikona":string => css class
function Timeline(datesTable, startDate, endDate, currDate){
  this.datesTable = datesTable;
  this.startDate = startDate;
  this.endDate = endDate;
  this.currDate = currDate;
  this.calendar = new Array();

  //constructor:
  const timeLength = ((this.endDate-this.startDate)/1000/86400)+1;
  let current = new Date(this.startDate.toString());
  for(var i=0; i<timeLength; i++){
    let currString = current.toDotDate();
    let temp;
    var event = this.datesTable.some((item)=>{
      if(item[0] == currString){
        let status = (current <= this.currDate) ? "pevent" : "event";
        temp = {
          "status":status,
          "date":item[0],
          "name":item[1],
          "icon":item[2]
        };
        return 1;
      }
    });
    if(!event){
      if(current < currDate){
        temp = {"status":"past"};
      }
      else if(currString == this.currDate.toDotDate()){
        temp = {"status":"current"};
      }
      else {
        temp = {"status":"future"};
      }
    }
    this.calendar.push(temp);
    current.setDate(current.getDate()+1);
  }
}
module.exports = Timeline;
