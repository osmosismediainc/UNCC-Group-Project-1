$( document ).ready(function() {
    console.log( "AYEEEE" );
});

var settings = {
    async: true,
    crossDomain: true,
    url: "https://audd.p.rapidapi.com/?return=timecode%2Capple_music%2Cspotify%2Cdeezer%2Clyrics&itunes_country=us&url=https%3A%2F%2Faudd.tech%2Fexample1.mp3",
    method: "GET",
    headers: {
        "x-rapidapi-host": "audd.p.rapidapi.com",
        "x-rapidapi-key": "af514938d5msha11b1d9e2c8a7fcp14c174jsn02b30455c6eb",
    }
}
$.ajax(settings).done(function (response) {
    console.log(response);
});






