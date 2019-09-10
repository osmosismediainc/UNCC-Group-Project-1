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

      var tBody = $("tbody");
      var tRow = $("<tr>");
      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      var titleTd = $("<td>").text(response.Title);
      var artistTd = $("<td>").text(response.Artist);
      var lyricsTd = $("<td>").text(response.Lyrics);
      // Append the newly created table data to the table row
      tRow.append(titleTd, artistTd, lyricsTd);
      // Append the table row to the table body
      tBody.append(tRow);

      // var results = response.data;

      // Empty the contents of the artist-div, append the new artist content
      $("#musicInfoHolder").empty();
      $("#musicInfoHolder").append(artistLyrics, artistTitle, artistName);

      // Constructing HTML containing the artist information
      var artistName = $("#artist").text(response.artist);
      var artistLyrics = $("#lyrics").text(response.lyrics);
      var artistTitle = $("#song").text(response.title);


      
    });















  });
});
