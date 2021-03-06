var musicArray = ["Bruno Mars", "Beyonce", "Justin Timberlake", "Adele", "Tamar Braxton", "Sam Smith", "Toni Braxton", "Whitney Houston", "Ed Sheeran", "J Cole"];

var musicianDiv = $("<div>");

function displayNewMusician() {

  var musician = $(this).attr("data-search");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + musician + "&api_key=kCQw8A9BkNUr5cVqfyYkiSaTMT2CtPIF&limit=3";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    var results = response.data;


    for (var i = 0; i < results.length; i++) {


      var p = $("<p>").text("Rating: " + results[i].rating);

      var musicianImage = $("<img>");

      musicianImage.attr("src", results[i].images.fixed_height.url);

      musicianDiv.append(p);
      musicianDiv.append(musicianImage);

      $("#gifs-appear-here").prepend(musicianDiv);

    }
  });
}


function renderButtons() {
  console.log("renderbuttonfunctionsrunning");
  $("#buttons-go-here").empty();

  for (var i = 0; i < musicArray.length; i++) {

    var a = $("<button>");


    a.addClass("new-artist");
    a.attr("data-search", musicArray[i]);
    a.text(musicArray[i]);
    $("#buttons-go-here").append(a);
  }
}
$("#musician-form").submit(function(event) {
  event.preventDefault();


  var singer = $("#input").val().trim();

  musicArray.push(singer);

  renderButtons();
  console.log(musicianDiv);
});

$(document).on("click", ".new-artist", displayNewMusician);

renderButtons();







// $(".gif").on("click", function() {
//   // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//   var state = $(this).attr("data-state");
//
//   // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//   // Then, set the image's data-state to animate
//   // Else set src to the data-still value
//   if (state === "still") {
//     $(this).attr("#gifs-appear-here", $(this).attr("data-animate"));
//     $(this).attr("data-state", "animate");
//   } else {
//     $(this).attr(".gif", $(this).attr("data-still"));
//     $(this).attr("data-state", "still");
//   }
// });
