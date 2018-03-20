var weerTypes = [
    'Clear Sky',
    'Clear',
    'Clouds',
    'Few Clouds',
    'Scattered Clouds',
    'Broken Clouds',
    'Shower Rain',
    'Rain',
    'Thunderstorm',
    'Snow',
    'Mist'
];

var weerSymbolen = ['https://image.flaticon.com/icons/svg/136/136832.svg',
    'https://image.flaticon.com/icons/svg/136/136832.svg', 'https://image.flaticon.com/icons/svg/131/131043.svg',
    'https://image.flaticon.com/icons/svg/131/131043.svg', 'https://image.flaticon.com/icons/svg/131/131077.svg', 'https://image.flaticon.com/icons/svg/131/131043.svg', 'https://image.flaticon.com/icons/svg/414/414923.svg', 'https://image.flaticon.com/icons/svg/69/69404.svg', 'https://image.flaticon.com/icons/svg/178/178374.svg', 'https://image.flaticon.com/icons/svg/653/653600.svg', 'https://image.flaticon.com/icons/svg/134/134120.svg'
];





var x = document.getElementById("naamStad");
var y = document.getElementById("temperatuur");
var z = document.getElementById("weer");
var a = document.getElementById("toestemming-tekst");
var b = document.getElementById("weerSymbool");

var celcius = document.querySelector("#celcius");
var fahrenheit = document.querySelector("#fahrenheit");




var currentPosition = (function() {

    if (document.readyState === "interactive" || "complete") {

        navigator.geolocation.getCurrentPosition(function(position) {

            var lon = position.coords.longitude;
            var lat = position.coords.latitude;



            var apiRequest = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=8d8ae780c690c3afc002ee7aef0ffece';




            //// haal info binnen van API
            fetch(apiRequest).then(function(res) {
                return res.json();
            }).then(function(json) {
                x.innerHTML = json.name;
                y.innerHTML = Math.round(json.main.temp - 273.15) + "°";
                z.innerHTML = json.weather[0].main;
               
                fahrenheit.addEventListener('click', function(){
                    y.innerHTML = Math.round(json.main.temp * (9/5) - 459.67) + "°";
                })
                
                celcius.addEventListener('click', function(){
                    y.innerHTML = Math.round(json.main.temp - 273.15) + "°";
                })


               

                //weersymbolen
                for (var i = 0; i < weerTypes.length; i++) {

                    weerTypes[i] == json.weather[0].main ? b.src = weerSymbolen[i] : b.innerHTML = "Sorry, het weerbericht van jouw locatie is nu even niet beschikbaar";

                }
            });


        })
    } 

})();

