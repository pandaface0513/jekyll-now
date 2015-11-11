$( document ).ready();

// Allowing the search button to submit search form
$("#search-submit").click( function() {
    $("#search").trigger('submit');
});

// Printing the day
var month_names = ["January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December"];

var day_names = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];

var today = new Date();
var month = today.getMonth();
var day_of_month = today.getDate();
var day_of_week = today.getDay();

var global_hour = today.getHours();

var date_string = day_names[day_of_week] + ", " + month_names[month] + " " + day_of_month;

document.getElementById('date').innerHTML = date_string;

// Time Logic
function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
};
function startClock(){
	// Local date invocation needed for updated time
	var local_today = new Date();
	
    var hours = local_today.getHours();
    var minutes = local_today.getMinutes();
	var seconds = local_today.getSeconds();
    minutes = checkTime(minutes);
	seconds = checkTime(seconds);
    //time_string = hours + ":" + minutes + ":" + seconds;
	time_string = hours + ":" + minutes;
    document.getElementById('time').innerHTML = time_string;
	
	var update = setTimeout(function(){startClock()}, 3000);
};