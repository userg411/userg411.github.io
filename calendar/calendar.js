var monthNames = ["January","February","March","April","May", "June", "July",
     "August", "September", "October","November","December"];
var weekDays = ["Mo","Tu","We","Th","Fr","Sa", "Su"]; 
var d = new Date();
var year = d.getFullYear();
var colNum = 3;
var rowNum = monthNames.length/colNum;

function addDay(date){
	var result = new Date(date);
	result.setDate(date.getDate()+1);
	return result;
}

function getDay(date){
	if(date.getDay() == 0) return 6;
	return date.getDay()-1;
}

function draw(){
	var id = 1;
	var wrapper  = $('<div></div>');
	for (yr = year; yr<year+2; yr++){
		var div = $('<div></div>');
		div.attr('id','left');
		if(yr!==year)
			div.attr('id','right');
		var caption = $('<caption></caption>').text(yr);
		var date = new Date("01/01/"+yr);
		var mainTable = $('<table></table>').addClass("mainTable");
		mainTable.append(caption);
		
		for(i=0; i<rowNum; i++){
			var row = $('<tr></tr');
			for(j=0; j<colNum;j++){
				var td = $('<td></td>');
				var monthTable = $('<table></table').addClass("monthTable");
				
				
				var rowMonth = $('<caption></caption>').text(monthNames[i*colNum + j]);
				
				var rowWeekDays = $('<tr></tr>').addClass("weekdays");
				for(k=0; k<weekDays.length;k++){
					var colWeekDay = $('<td></td>').text(weekDays[k]);
					rowWeekDays.append(colWeekDay);
				}
			    
				monthTable.append(rowMonth).append(rowWeekDays);
			    
				
				for(l=0; l<6;l++){
					var rowWeek = $('<tr></tr>').addClass('days');
					for(m=0; m<7; m++){
						var day = $('<td></td>').text('\xa0');
						if(date.getMonth()==(i*colNum+j) && getDay(date) == m ){
							day.text(date.getDate());
							day.attr('id',  id++);
							date = addDay(date);
					}
					rowWeek.append(day);
				}
				monthTable.append(rowWeek);
			   }
				td.append(monthTable); 
			    row.append(td);
			}
			mainTable.append(row);
		}
		div.append(mainTable);
		wrapper.append(div);
	}
	
	$( "body" ).append(wrapper);
}