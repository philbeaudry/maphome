var lat = 0;
var lng = 0;

function showInput() {
    var sum = 0;
    lat = document.forms["myForm"]["lat"].value;
    lng = document.forms["myForm"]["lng"].value;
    var school = document.forms["myForm"]["school"].value;
    var pollution = document.forms["myForm"]["school"].value;
    var transit = document.forms["myForm"]["transit"].value;
    var parc = document.forms["myForm"]["parc"].value;
    
    if(school === "Yes"){
       sum += 8; 
    }
    if(pollution === "No"){
        sum -= 2;
    }
    if(transit === "Yes"){
        sum += 1;
    }
    if(parc == "Yes"){
        sum +=5;
    }
    document.getElementById("latlng").innerHTML = "Latitude: " + lat + " Longitude: " + lng + " Sum: " + sum;
}