$(document).ready(function () {
  // Define some variables
  var lyrics = "";
  var apiKey = "af514938d5msha11b1d9e2c8a7fcp14c174jsn02b30455c6eb"

  // function to add the user's lyric input to the lyrics variable
  $("#lyricSearchSubmit").on("click", function (event) {
    event.preventDefault();
    var lyricsInput = $("#lyricSearch").val().trim();
    if (!lyricsInput == " ") {
      lyrics = lyricsInput;
      console.log('submit click lyrics',lyrics);
    }

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://audd.p.rapidapi.com/findLyrics/?q=" + lyrics,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "audd.p.rapidapi.com",
        "x-rapidapi-key": "5da9678411msh0bf02b451454513p111fc5jsn1344d0dc18f3"
      }
    }
    $.ajax(settings).done(function (response) {

        
      // Constructing HTML containing the artist information
      $("#artist").text(response.result[0].artist);
      $("#lyrics").text(response.result[0].lyrics);
      $("#title").text(response.result[0].title);
    });



      console.log(response);

      var results = response.data;



      // Constructing HTML containing the artist information
      var artistName = $("#artist").text(response.name);
      var artistLyrics = $("#lyrics").text(response.lyrics);
      var artistTitle = $("#song").text(response.title);

      // Empty the contents of the artist-div, append the new artist content
      $("#musicInfoHolder").empty();
      $("#musicInfoHolder").append(artistLyrics, artistTitle, artistName);

    });

  });
});