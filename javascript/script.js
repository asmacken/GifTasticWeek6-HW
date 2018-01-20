$("button").on("click", function() {

  var musician = $(this).attr("musical-artist");

  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + musician + "&api_key=kCQw8A9BkNUr5cVqfyYkiSaTMT2CtPIF&limit=5";

  $.ajax({
      url: queryURL,
      method: "GET"
    })

    .then(function(response) {
      // Storing an array of results in the results variable
      var results = response.data;

      // Looping over every result item
      for (var i = 0; i < results.length; i++) {


      var musicianDiv = $("<div>");

      var p = $("<p>").text("Rating: " + results[i].rating);

      var musicianImage = $("<img>");

      musicianImage.attr("src", results[i].images.fixed_height.url);

      musicianDiv.append(p);
      musicianDiv.append(musicianImage);

      $("#gifs-appear-here").prepend(musicianDiv);
    }
  });
});
