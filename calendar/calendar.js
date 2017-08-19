var monthNames = ["January","February","March","April","May", "June", "July",
     "August", "September", "October","November","December"];
var weekDays = ["Mo","Tu","We","Th","Fr","Sa", "Su"]; 
var d = new Date();
var year = d.getFullYear();
var colNum = 2;
var rowNum = monthNames.length/colNum;
var intersectColor = "#F08080";
var emps = [
	{
		name:'Employee 1',shift:'28',color:'#1ABC9C', selected:'true', startId:'0'
	},
	{
		name:'Employee 2',shift:'28',color:'#87CEFA', selected:'false', startId:'0'
	}
];


function addDay(date){
	var result = new Date(date);
	result.setDate(date.getDate()+1);
	return result;
}

function getDay(date){
	if(date.getDay() == 0) return 6;
	return date.getDay()-1;
}

function drawCalendar(){
	var id = 1;
	var wrapper  = $('<div></div>');
	var yearList = $('<ul></ul>').addClass('year');
	
	for (yr = year; yr<year+2; yr++){
		var div = $('<li></li>');
		div.attr('id','left');
		if(yr!==year)
			div.attr('id','right');
		var caption = $('<div></div>').addClass('title').text(yr);
		var date = new Date("01/01/"+yr);
		var mainTable = $('<div></div>').addClass("mainTable");
		mainTable.append(caption);
	
		for(i=0; i<rowNum; i++){
			var row = $('<ul></ul');
			for(j=0; j<colNum;j++){
				var td = $('<li></li>');
				var monthTable = $('<div></div').addClass("monthTable");
				var rowMonth = $('<div></div>').addClass('title').text(monthNames[i*colNum + j]);
				var rowWeekDays = $('<ul></ul>').addClass("weekdays");
				
				for(k=0; k<weekDays.length;k++){
					var colWeekDay = $('<li></li>').text(weekDays[k]);
					rowWeekDays.append(colWeekDay);
				}
			    
				monthTable.append(rowMonth).append(rowWeekDays);
			    
				for(l=0; l<6;l++){
					var rowWeek = $('<ul></ul>').addClass('days');
					for(m=0; m<7; m++){
						var day = $('<li></li>').text('\xa0');
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
		yearList.append(div);
	}
	wrapper.append(yearList);
	$( "body" ).append(wrapper);
}