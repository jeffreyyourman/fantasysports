
var queryURL = "https://api.twitter.com/1.1/search/tweets.json?q=%23haiku+%23poetry";

$.ajax({url: queryURL, method: 'GET'})
 .done(function(response) {
     console.log(response);
});
