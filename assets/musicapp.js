$( document ).ready(function () {
  console.log( "yooooo" );



function searchBands(artist) {
  var queryURL = "https://cors-anywhere.herokuapp.com/https://audd.p.rapidapi.com/?return=timecode%2Capple_music%2Cspotify%2Cdeezer%2Clyrics&itunes_country=us&url=https%3A%2F%2Faudd.tech%2Fexample1.mp3" + artist + "&apikey=eb0db3e732msh30354716e533ef7p18e1a7jsnfa3cae64ef01";

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

  // Running the searchBandsInTown function(passing in the artist as an argument)
  searchBands(inputArtist);

      // Preventing the button from trying to submit the form
      // Storing the artist name
      var inputArtist = $("#musicInfoHolder").val().trim();
      function searchMusic(artist) {
        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.audd.io/findLyrics/?q=say my name" + "&apikey=eb0db3e732msh30354716e533ef7p18e1a7jsnfa3cae64ef01";

        $.ajax({
            url: queryURL,
            method: "POST"
        }).then(function (response) {

            // Printing the entire object to console
            console.log(response);

            // Constructing HTML containing the artist information
            var artistName = $("<h1>").text(response.name);
            artistLyrics = $("<p>").text(response.lyrics);
            var artistTitle = $("<p>").attr("src", response.title);
            var artistAlbum = $("<h1>").attr("src", response.album);
            var artistArtwork = $("<img>").attr("src", response.artwork);


            // Empty the contents of the artist-div, append the new artist content
            $("#musicInfoHolder").empty();
            $("#musicInfoHolder").append(artistLyrics, artistTitle, artistName, artistAlbum, artistArtwork);
        });

    };
      // Running the searchBandsInTown function(passing in the artist as an argument)
      searchMusic(inputArtist);

      var form = document.getElementById('musicFileInput');
      form.onsubmit = function () {
          var formData = new FormData(form);

          formData.append('file', file);

          var xhr = new XMLHttpRequest();
          // Add any event handlers here...
          xhr.open('POST', form.getAttribute('action'), true);
          xhr.send(formData);

          return false; // To avoid actual submission of the form
      }
})
// var x = document.getElementById("myFile");
// var txt = "";
// if ('files' in x) {
//   if (x.files.length == 0) {
//     txt = "Select one or more files.";
//   } else {
//     for (var i = 0; i < x.files.length; i++) {
//       txt += "<br><strong>" + (i+1) + ". file</strong><br>";
//       var file = x.files[i];
//       if ('name' in file) {
//         txt += "name: " + file.name + "<br>";
//       }
//       if ('size' in file) {
//         txt += "size: " + file.size + " bytes <br>";
//       }
//     }
//   }
// }
// document.getElementById ("demo").innerHTML = txt;
})