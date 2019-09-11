// Yoda Translator AJAX Call

$('#yodaBtn').on('click', function (event) { 

    console.log('translator call fired.');

    var songLyrics = $('#lyrics').text();
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://yodish.p.rapidapi.com/yoda.json?text=" + songLyrics,
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "yodish.p.rapidapi.com",
            "x-rapidapi-key": "5da9678411msh0bf02b451454513p111fc5jsn1344d0dc18f3",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {}
    }
    
    $.ajax(settings).done(function (response) {
        console.log('translation response',response.contents.translated);
        $("#lyrics").text(response.contents.translated);
    });
});



// languages below are opions to be ued if anything happens to yoda

// //Dothraki Translator AJAX call
// var dothraki = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://dothraki.p.rapidapi.com/dothraki.json?",
// 	"method": "POST",
// 	"headers": {
// 		"x-rapidapi-host": "dothraki.p.rapidapi.com",
// 		"x-rapidapi-key": "5da9678411msh0bf02b451454513p111fc5jsn1344d0dc18f3",
// 		"content-type": "application/x-www-form-urlencoded"
// 	},
// 	"data": {}
// }

// $.ajax(dothraki).done(function (response) {
// 	console.log(response);
// });

// console.log(dothraki);


// $.ajax(yoda).done(function (response) {
// 	console.log(response);
// });

// console.log(yoda);

// // Sindarin Translator AJAX call
// var sElvish = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://elvish.p.rapidapi.com/sindarin.json?",
// 	"method": "POST",
// 	"headers": {
// 		"x-rapidapi-host": "elvish.p.rapidapi.com",
// 		"x-rapidapi-key": "18cca24e93msh09585cce8c4621fp1fe3ddjsn689522057af1",
// 		"content-type": "application/x-www-form-urlencoded"
// 	},
// 	"data": {}
// }

// $.ajax(sElvish).done(function (response) {
// 	console.log(response);
// });

// console.log(sElvish);


// Quenya Translator AJAX call
//var qElvish = {
   // "async": true,
    //"crossDomain": true,
    //"url": "https://elvish.p.rapidapi.com/quenya.json?text=I%20am%20Arwen%20-%20I've%20come%20to%20help%20you.%20Hear%20my%20voice...%20Come%20back%20to%20the%20light.",
    //"method": "POST",
    //"headers": {
   //     "x-rapidapi-host": "elvish.p.rapidapi.com",
   //     "x-rapidapi-key": "18cca24e93msh09585cce8c4621fp1fe3ddjsn689522057af1",
   //     "content-type": "application/x-www-form-urlencoded"
   // },
   // "data": {}
//}

//$.ajax(qElvish).done(function (response) {
    //console.log(response);
//});

//console.log(qElvish);

// Valley Girl Translator AJAX call
// var valleyGirl = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://valspeak.p.rapidapi.com/valspeak.json?text=Good%20Morning.%20Come%20on%20man%2C%20just%20saying!",
//     "method": "POST",
//     "headers": {
//         "x-rapidapi-host": "valspeak.p.rapidapi.com",
//         "x-rapidapi-key": "18cca24e93msh09585cce8c4621fp1fe3ddjsn689522057af1",
//         "content-type": "application/x-www-form-urlencoded"
//     },
//     "data": {}
// }

// $.ajax(valleyGirl).done(function (response) {
//     console.log(response);
// });

// console.log(valleyGirl);