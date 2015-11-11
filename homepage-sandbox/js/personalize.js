// JS for personalized messages, links in the future
$( document ).ready();

// Put your name here!
var user_name = "sir";

// Time sensitive strings

var early_morning = "Up early, " + user_name + "?";
var morning = "Good morning, " + user_name + ".";
var early_afternoon = "Afternoon, " + user_name + ". " + "Had lunch yet?";
var late_afternoon = "Welcome back, " + user_name + ".";
var evening = "Day's winding down, " + user_name + ".";
var late_night = "Shouldn't you be in bed, " + user_name + "?";

// Determine which string is appropriate (24h clock)
var temptime = global_hour;
var greeting_string;

switch(temptime){
    case 5:
    case 6:
    case 7:
    case 8:
        greeting_string = early_morning;
        break;
    case 9:
    case 10:
    case 11:
        greeting_string = morning;
        break;
    case 12:
    case 13:
    case 14:
        greeting_string = early_afternoon;
        break;
    case 15:
    case 16:
    case 17:
    default:
        greeting_string = late_afternoon;
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        greeting_string = evening;
        break;
    case 23:
    case 24:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        greeting_string = late_night;
        break;
}

document.getElementById('welcome_text').innerHTML = greeting_string;