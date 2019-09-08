$( document ).ready(function () {
    console.log( "yooooo" );


    var settings = {
        async: true,
        crossDomain: true,
        // url: "https://audd.p.rapidapi.com/?return=timecode%2Capple_music%2Cspotify%2Cdeezer%2Clyrics&itunes_country=us&url=https%3A%2F%2Faudd.tech%2Fexample1.mp3",
        method: "GET",
        headers: {
            "x-rapidapi-host": "audd.p.rapidapi.com",
            "x-rapidapi-key": "af514938d5msha11b1d9e2c8a7fcp14c174jsn02b30455c6eb",
        }
    }

    $.ajax(settings).done(function (response) {
    console.log(response);//
});

function searchBands(artist) {
    var queryURL = "https://audd.p.rapidapi.com/?return=timecode%2Capple_music%2Cspotify%2Cdeezer%2Clyrics&itunes_country=us&url=https%3A%2F%2Faudd.tech%2Fexample1.mp3" + artist + "af514938d5msha11b1d9e2c8a7fcp14c174jsn02b30455c6eb";

    $.ajax({
    url: queryURL,//
    method: "GET"
    }).then(function(response) {

    Printing the entire object to console
    console.log(response);

    // Constructing HTML containing the artist information
    var artistName = $("#artist").text(response.name);
    var artistLyrics = $("#lyrics").text(response.lyrics);
    var artistTitle = $("#song").attr("src", response.title);
    var artistAlbum = $("#album").attr("src", response.album);
    var artistArtwork = $("#albumArt").attr("src", response.artwork);


    // Empty the contents of the artist-div, append the new artist content
    $("#searchResultsDiv").empty();
    $("#searchResultsDiv").append(artistLyrics, artistTitle, artistName, artistAlbum, artistArtwork);
});

};
$("#submit").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    console.log(event)
    // Storing the artist name
    var inputArtist = $("#musicResults").val().trim();
    console.log(event)

    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchBands(inputArtist);


})
})
var x = document.getElementById("myFile");
var txt = "";
if ('files' in x) {
  if (x.files.length == 0) {
    txt = "Select one or more files.";
  } else {
    for (var i = 0; i < x.files.length; i++) {
      txt += "<br><strong>" + (i+1) + ". file</strong><br>";
      var file = x.files[i];
      if ('name' in file) {
        txt += "name: " + file.name + "<br>";
      }
      if ('size' in file) {
        txt += "size: " + file.size + " bytes <br>";
      }
    }
  }
}
document.getElementById ("demo").innerHTML = txt;
