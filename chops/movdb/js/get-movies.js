function GetMovieList (listpage) {
  var nowPlaying = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/movie/now_playing?page=" + listpage + "&language=en-US&api_key=9084eae9f770e006ebcba95dbd474e28",
    "method": "GET"
  }

  $.ajax(nowPlaying).done(function (response) {
    console.log(response);
    Paginate(response, false, null);
    ClearList();
    $.each(response.results, function(i, item){
      $("#movie-list").append(
        "<div class='movlist-item col-sm-12 col-lg-4'>" +
        "<h4>" + item.title + "</h4>" +
        "<img class='posterimg img-fluid' src='https://image.tmdb.org/t/p/w300" + item.poster_path + "' alt='" + item.title + "'>" +
        "<p>" + item.overview + "</p>" +
        "<p><strong>Release Date: </strong>" + item.release_date + "</p>" +
        "<p class='voteavg'><strong>Vote Average: </strong>" + item.vote_average + "</p>" +
        "</div>"
      );
    });
  });
}

function GetSearchResults (listpage, searchstr) {

    var isValid = ValidateSearch(searchstr);

    ClearList();

    if (!isValid) {
      $('.invalid').show();
      $('#counter').hide();
      return;
    }

    $('.invalid').hide();

    var searchResults = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.themoviedb.org/3/search/movie?include_adult=false&page=" + listpage + "&query=" + searchstr + "&language=en-US&api_key=9084eae9f770e006ebcba95dbd474e28",
      "method": "GET"
    }

    $.ajax(searchResults).done(function(response) {
      console.log(response);
      if (response.total_results >= 1) {
        Paginate(response, true, searchstr);
        $.each(response.results, function(i, item){
          $("#movie-list").append(
            "<div class='movlist-item col-sm-12 col-lg-4'>" +
            "<h4>" + item.title + "</h4>" +
            "<img class='posterimg img-fluid' src='https://image.tmdb.org/t/p/w300" + item.poster_path + "' alt='" + item.title + "'>" +
            "<p>" + item.overview + "</p>" +
            "<p><strong>Release Date: </strong>" + item.release_date + "</p>" +
            "<p class='voteavg'><strong>Vote Average: </strong>" + item.vote_average + "</p>" +
            "</div>"
          );
        });
      } else {
        $("#movie-list").html("<h3>Your search returned no results</h3>");
      }
    });
}

function ValidateSearch (searchstr) {
  if (searchstr === null || searchstr === "") {
    return false;
  }
  return true;
}

function ClearList() {
  $("#movie-list").empty();
}
