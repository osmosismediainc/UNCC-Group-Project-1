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

      // Constructing HTML containing the artist information
      var artistName = $("#artist").text(response.name);
      var artistLyrics = $("#lyrics").text(response.lyrics);
      var artistTitle = $("#song").text(response.title);
      var artistAlbum = $("#album").text(response.album);
      var artistArtwork = $("#albumArt").text(response.artwork);


      // Empty the contents of the artist-div, append the new artist content
      $("#searchResultsDiv").empty();
      $("#searchResultsDiv").append(artistLyrics, artistTitle, artistName, artistAlbum, artistArtwork);
    });















    //   // Running the searchBandsInTown function(passing in the artist as an argument)
    //   searchBands(inputArtist);

    //       // Preventing the button from trying to submit the form
    //       // Storing the artist name
    //       var inputArtist = $("#musicInfoHolder").val().trim();
    //       function searchMusic(artist) {
    //         var queryURL = "https://cors-anywhere.herokuapp.com/https://api.audd.io/findLyrics/?q=say my name" + "&apikey=eb0db3e732msh30354716e533ef7p18e1a7jsnfa3cae64ef01";

    //         $.ajax({
    //             url: queryURL,
    //             method: "POST"
    //         }).then(function (response) {

    //             // Printing the entire object to console
    //             console.log(response);

    //             // Constructing HTML containing the artist information
    //             var artistName = $("<h1>").text(response.name);
    //             artistLyrics = $("<p>").text(response.lyrics);
    //             var artistTitle = $("<p>").attr("src", response.title);
    //             var artistAlbum = $("<h1>").attr("src", response.album);
    //             var artistArtwork = $("<img>").attr("src", response.artwork);


    //             // Empty the contents of the artist-div, append the new artist content
    //             $("#musicInfoHolder").empty();
    //             $("#musicInfoHolder").append(artistLyrics, artistTitle, artistName, artistAlbum, artistArtwork);
    //         });

    //     };
    //       // Running the searchBandsInTown function(passing in the artist as an argument)
    //       searchMusic(inputArtist);

    //       var form = document.getElementById('musicFileInput');
    //       form.onsubmit = function () {
    //           var formData = new FormData(form);

    //           formData.append('file', file);

    //           var xhr = new XMLHttpRequest();
    //           // Add any event handlers here...
    //           xhr.open('POST', form.getAttribute('action'), true);
    //           xhr.send(formData);

    //           return false; // To avoid actual submission of the form
    //       }
    // })

  });
});