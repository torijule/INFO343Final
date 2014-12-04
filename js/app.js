"use strict";

var name;
var latitude;
var longitude;
var address;
var i;
var coordinates;
var marker;
var content;
var number;
var scale = $('#map');

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

var mapOptions = {
    center: {lat: 41.374457, lng:  -83.6316 },
    zoom: 9
};


var mapElem = document.getElementById('map');

var map = new google.maps.Map(mapElem, mapOptions);
setMarkers(map, locations);

function setMarkers(map, locations) {
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

        content = "Name: " + name + '</br>' + "Address: " + address + '</br>' + "Phone Number: " + number

        var infowindow = new google.maps.InfoWindow()

        google.maps.event.addListener(marker, 'click', (function(marker, content, infoWin) {
            	return function() {
                infoWin.setContent(content);
                map.panTo(this.getPosition());
                infoWin.open(map, marker);
            };
        })(marker, content, infowindow));
    }
}

//scale map to window size
$(window).resize(scaleMap);

function scaleMap() {
    scale.css({
        'height': window.innerHeight - map.position().top - 20 + 'px'
    });
}

//initialize the scaleMap
scaleMap();