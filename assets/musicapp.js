<<<<<<< HEAD
$( document ).ready(function () {
    console.log( "yooooo" );

    

//     var settings = {
//         async: true,
//         crossDomain: true,
//         // url: "https://audd.p.rapidapi.com/?return=timecode%2Capple_music%2Cspotify%2Cdeezer%2Clyrics&itunes_country=us&url=https%3A%2F%2Faudd.tech%2Fexample1.mp3",
//         method: "GET",
//         headers: {
//             "x-rapidapi-host": "audd.p.rapidapi.com",
//             "x-rapidapi-key": "af514938d5msha11b1d9e2c8a7fcp14c174jsn02b30455c6eb",
//         }
//     }

//     $.ajax(settings).done(function (response) {
//     console.log(response);//
// });

function searchBands(artist) {
    var queryURL = "https://cors-anywhere.herokuapp.com/https://audd.p.rapidapi.com/?return=timecode%2Capple_music%2Cspotify%2Cdeezer%2Clyrics&itunes_country=us&url=https%3A%2F%2Faudd.tech%2Fexample1.mp3" + artist + "&apikey=af514938d5msha11b1d9e2c8a7fcp14c174jsn02b30455c6eb";

    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {

    //Printing the entire object to console
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
$("#musicFileSubmit").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var inputArtist = $("#musicResults").val().trim();

    
  
      };
        
        searchMusic(inputLyrics);

          
        
})

=======
$(document).ready(function () {
  console.log("yooooo");
  // Define some variables
  var lyrics = "";
  var apiKey = "af514938d5msha11b1d9e2c8a7fcp14c174jsn02b30455c6eb"

  // function to add the user's lyric input to the lyrics variable
  $("#lyricSearchSubmit").on("click", function (event) {
    event.preventDefault();
    var lyricsInput = $("#lyricSearch").val().trim();
    if (!lyricsInput == " ") {
      lyrics = lyricsInput;
      console.log(lyrics);
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
      console.log(response);

      var results = response.data;

      // Empty the contents of the artist-div, append the new artist content
      $("#musicInfoHolder").empty();
      $("#musicInfoHolder").append(artistLyrics, artistTitle, artistName, artistAlbum, artistArtwork);

      // Constructing HTML containing the artist information
      var artistName = $("#artist").text(response.name);
      var artistLyrics = $("#lyrics").text(response.lyrics);
      var artistTitle = $("#song").text(response.title);
      var artistAlbum = $("#album").text(response.album);
      var artistArtwork = $("#albumArt").text(response.artwork);


      
    });















  });
});
>>>>>>> 303d79fb73db4ef88aa195b87b10810e69374853
