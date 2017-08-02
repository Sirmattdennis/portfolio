#### movdb
---
A mini web app with two pages, each performing a task involving making API calls to themoviedb.com,
and utilizing the JSON response. The app uses JQuery, Bootstrap 3, and TWBS-Pagination.

"Now Playing" makes a request to fetch a complete list of every movie that is currently playing
in theaters. The result is organized and presented in pages of 20 movies, showing the user the
title, poster image, release date, synopsis, and average viewer rating.

"Search" gives the user a text field into which they may enter something to look for. All results
which match the search are returned and displayed in the same layout as the "Now Playing" page.
Additionally, the user is notified if their search is either invalid due to being null/empty, or if
their search has returned no results.
