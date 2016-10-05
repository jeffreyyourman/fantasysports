$(document).ready(function(){
  $('.fantasynewsNBA').hide();
  // $('.twitterNBA').hide();
  $('#FPNewsNBAButton').on('click', function(){
    $('.fantasynewsNFL').hide();
    $('.fantasynewsNBA').show();
  });
  $('#FPNewsNFLButton').on('click', function(){
    $('.fantasynewsNBA').hide();
    $('.fantasynewsNFL').show();
  });
  $('#FTwitterNBABUTTON').on('click', function(){
    $('.twitterNFL').hide();
    $('.twitterNBA').show();
  });
  $('#FTwitterNFLBUTTON').on('click', function(){
    $('.twitterNBA').hide();
    $('.twitterNFL').show();
  });
  // var queryURL = "";
  //
  // $.ajax({url: queryURL, method: 'GET'})
  //  .done(function(response){
  //    console.log(response);
  //  });
});
