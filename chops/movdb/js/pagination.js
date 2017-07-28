

function Paginate(results, isSearch, searchstr) {
  $('.pagination').twbsPagination({
    totalPages: results.total_pages,
    visiblePages: 6,
    next: "Next",
    prev: "Prev",
    onPageClick: function (event, page) {
        //fetch content and render here
        if(!isSearch) {
          GetMovieList(page);
        } else {
          GetSearchResults(page, searchstr);
          $('#counter').show();
        }
    }
  });

  PageCounter(results);
}

function PageCounter(results) {
  $("#count-from").text((results.page * 20) - 19);
  $("#count-to").text(Math.min((results.page * 20),results.total_results));
  $("#count-total").text(results.total_results);
}

function ClearPagination () {
  $('.pagination').twbsPagination('destroy');
}
