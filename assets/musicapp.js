$(document).ready(function () {
    console.log("yooooo");

    

    function searchMusic(lyrics) {
        var queryURL = "https://api.audd.io/findLyrics/?q=" + lyrics + "&apikey=657b96c98dmshf4175a8669455e1p1adb3ejsn2f2bdc5d5eed&limit=10";

        var lyrics = ""

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            // Printing the entire object to console
            console.log(response);

            // Constructing HTML containing the artist information
            var artistName = $("#artist").text(response.name);
            var artistLyrics = $("#lyrics").text(response.lyrics);
            var artistAlbum = $("#album").attr(response.album);
            var artistArtwork = $("#albumArt").attr("src", response.artwork);


            // Empty the contents of the artist-div, append the new artist content
            $("#musicInfoHolder").empty();
            $("#musicInfoHolder").append(artistLyrics, artistTitle, artistName, artistAlbum, artistArtwork);
        });

    };
    $("#musicFileSubmit").on("click", function (event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        console.log(event)
        // Storing the artist name
        var inputLyrics = $("#musicInfoHolder").val().trim();
        console.log(event)

        // Running the searchBandsInTown function(passing in the artist as an argument)
        searchMusic(inputLyrics);


    })
})
