$(document).ready(function () {
    console.log("yooooo");


    function searchMusic(artist) {
        var queryURL = "https://api.audd.io/findLyrics/?q=" + "&apikey=af514938d5msha11b1d9e2c8a7fcp14c174jsn02b30455c6eb";

        $.ajax({
            url: queryURL,
            method: "POST"
        }).then(function (response) {

            // Printing the entire object to console
            console.log(response);

            // Constructing HTML containing the artist information
            var artistName = $("<h1>").text(response.name);
            var artistLyrics = $("<p>").text(response.lyrics);
            var artistTitle = $("<p>").attr("src", response.title);
            var artistAlbum = $("<h1>").attr("src", response.album);
            var artistArtwork = $("<img>").attr("src", response.artwork);


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
        var inputArtist = $("#musicInfoHolder").val().trim();
        console.log(event)

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
})
