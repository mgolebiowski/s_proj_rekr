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
  /*
  * data structure = [ {}, {}, {}, {}... for every day ]
  * for past day {"status":"past"}
  * for current day {"status":"current"}
  * for event day (==el from datesTable) {"status":"(p)event", "date":"xx.xx.xxxx", "name":"name", "icon":"class-name"} p-past
  * for future {"status":"future"}
  */
  const timeLength = ((this.endDate-this.startDate)/1000/86400)+1;
  let current = new Date(this.startDate.toString());
  for(var i=0; i<timeLength; i++){
    let currString = (current.getDate() > 9) ? current.toLocaleDateString() : "0"+current.toLocaleDateString();
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
        console.log(temp);
        return 1;
      }
    });
    if(!event){
      if(current < currDate){
        temp = {
          "status":"past"
        };
      }
      else if(current.setHours(0,0,0,0) == this.currDate.setHours(0,0,0,0)){
        temp = {
          "status":"current"
        };
      }
      else {
        temp = {
          "status":"future"
        };
      }
    }
    this.calendar.push(temp);
    current.setDate(current.getDate()+1);
  }
}
module.exports = Timeline;
