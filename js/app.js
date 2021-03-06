"use strict";

var name;
var latitude;
var longitude;
var address;
var i;
var coordinates;
var marker;
var content;
var moreContent;
var number;
var scale = $('#map');

//$(window).resize(mapScale);

var locations = [
    ['Tan Pro USA', 41.377849, -83.117113, '2200 Sean St Fremont, OH 43420', '419-355-8950'],
    ['Tan Pro USA', 41.56423, -83.578807, '27151 Crossroads Pkwy Rossford, OH 43460', '419-874-6455'],
    ['Tan Pro USA', 41.374457, -83.6316, '1432 E Wooster St Bowling Green, OH 43402', '419-806-4267'],
    ['Tan Pro USA', 41.396504, -83.650726, '1062 N Main St Bowling Green, OH 43402', '419-352-9055'],
    ['Tan Pro USA', 41.6372, -83.464069, '3555 Navarre Ave Oregon, OH 43616', '419-693-8826'],
    ['Tan Pro USA', 41.706929, -83.594796, '2104 W Laskey Rd, Toledo, OH 43613', '419-473-3333'],
    ['Tan Pro USA', 41.612473, -83.62348, '3400 Glendale Ave, Toledo, OH 43614', '419-382-5055'],
    ['Tan Pro USA', 41.059828, -83.670288, '1040 Interstate Ct, Findlay, OH 45840', '419-425-0555'],
    ['Tan Pro USA', 41.053634, -83.608844, '1949 Tiffin Ave, Findlay, OH 45840', '419-420-0255'],
    ['Tan Pro USA', 41.61215, -83.614343, '3015 Glendale Ave #105, Toledo, OH 43614', '419-382-5055'],
    ['Tan Pro USA', 41.681111, -83.62269, '3324 Secor Rd, Toledo, OH 43606', '419-725-9999'],
    ['Tan Pro USA', 41.698805, -83.644068, '5079 Monroe St, Toledo, OH 43623', '419-843-2055'],
    ['Tan Pro USA', 41.688426, -83.726330, '7615 W Sylvania Ave, Sylvania, OH 43560', '419-841-5055'],
    ['Tan Pro USA', 40.109323,-82.929376, '127 Westerville Plaza, Westerville, OH 43081', '614-797-2055'],
    ['Tan Pro USA', 40.142794,-82.926408, '724 North State St., Westerville, OH 43082', '614-882-8555'],
    ['Tan Pro USA', 39.989852,-83.025753, '1450 Olentangy River Rd., Columbus, OH 43212', '614-299-1055'],
    ['Tan Pro USA', 40.147532, -82.700999, '840 Coshocton Street, Johnstown, OH 43031', '6740-966-5255'],
    ['Tan Pro USA', 41.614760, -83.697333, '1558 Spring Meadows Dr, Holland, OH 43528', '419-866-8655'],
    ['Tan Pro USA', 40.102451, -83.161863, '7020 Hospital Dr, Dublin, OH 43016', '614-799-9995'],
    ['Tan Pro USA', 39.358807, -82.973857, '1075 N Bridge St #146, Chillicothe, OH 45601', '740-851-4729']
];

var position = {
    lat: 40.774457,
    lng: -83.6316
};

var mapOptions = {
    center: position,
    zoom: 8
};

var mapElem = document.getElementById('map');

var map = new google.maps.Map(mapElem, mapOptions);

//This is the blue marker showing the current location of the user.
function onGeoPos(position) {
    var infowindow = new google.maps.InfoWindow();
    console.log("Lat: " + position.coords.latitutde);
    console.log("Lng: " + position.coords.longitude);

    //This is the coordinates you would use to find your location!
    /*var myLocPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };*/

    //I chose this location because we think it's more likely for tanpro users to be in Ohio.
    //This would be a more typical representation of where they would be.
    var myLocPos = {
        lat: 40.774457,
        lng: -83.6316
    }

    var myLocation = new google.maps.Marker({
        position: myLocPos,
        map: map,
        icon: '../img/icon.png'
    });

    //listen for click event on marker
    google.maps.event.addListener(myLocation, 'click', (function(marker, moreContent) {
        return function() {
            map.panTo(this.getPosition());
        };
    })(marker, moreContent));
}

function onGeoErr(error) {
    alert('code: '    + error.code    + '\n' +
             'message: ' + error.message + '\n');
}

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onGeoPos, onGeoErr,
        {enableHighAccuracy: true, maximumAge: 30000}); //the maximumAge makes it so the loading does not eat the battery of device.

} else {
    console.log("geolocation not supported");
}

setMarkers(map, locations);

function setMarkers(map, locations) {
    var infowindow = new google.maps.InfoWindow()

    for (i = 0; i < locations.length; i++) {
        name = locations[i][0]
        latitude = locations[i][1]
        longitude = locations[i][2]
        address = locations[i][3]
        number = locations[i][4]

        coordinates = new google.maps.LatLng(latitude, longitude);

        marker = new google.maps.Marker({
            map: map,
            title: name,
            position: coordinates
        });

        content = '<div id="getLocation">' + "Name: " + name + '</br>' + "Address: " + address + '</br>' + "Phone Number: " + number + '</div>'

        google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow) {
            	return function() {
                infowindow.setContent(content);
                map.panTo(this.getPosition());
                infowindow.open(map, this);
            };
        })(marker, content, infowindow));

        google.maps.event.addListener(map, 'click', function(){
            infowindow.close();
        });
    }
}
//scale map to window size
$(window).resize(scaleMap);

function scaleMap() {
    scale.css({
        'height': window.innerHeight
    });
}

//initialize the scaleMap
scaleMap();