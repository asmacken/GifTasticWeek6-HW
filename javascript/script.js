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

      function renderButtons() {

        $("#musician-view").empty();

        for (var i = 0; i < musicianDiv.length; i++) {


        var a = $("<button>");
        a.addClass("artist");
        a.attr("data-name", artist[i]);
        a.text(artist[i]);
        $("#musician-view").append(a);
        }
      }

      $("#add-musician").on("click", function(event) {
        event.preventDefault();

        var singer = $("#musician-input").val().trim();

        musicianDiv.push(singer);

        renderButtons();
      });

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
      //     $(this).attr("src", $(this).attr("data-still"));
      //     $(this).attr("data-state", "still");
      //   }
      // });


    }
  });
});
