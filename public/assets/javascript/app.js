$(document).ready(function(){
    var spreadsheetIDQB = "1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw";
    // Make sure it is public or set to Anyone with link can view
    var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDQB + "/od6/public/values?alt=json";

      // if empty show all the appointments
      $.get( url, function( data ) {
        //display all appointments with DATA
        $('.fantasyQB').DataTable( {

          data: data.feed.entry,

        "ordering": true,
        "info":     false,
          columns: [
        { data: 'gsx$week.$t' },
        { data: 'gsx$player.$t' },
        { data: 'gsx$sal.$t' },
        { data: 'gsx$pos.$t' },
        { data: 'gsx$teamname.$t' },
        { data: 'gsx$injurystatus.$t' },
        { data: 'gsx$typeinjury.$t' },
        { data: 'gsx$rvp.$t' },
        { data: 'gsx$pr.$t' },
        { data: 'gsx$fppg.$t' },
        { data: 'gsx$oppdefrank.$t' },
        { data: 'gsx$passattemptgame.$t' },
        { data: 'gsx$rushattgame.$t' },
        { data: 'gsx$totalopp.$t' },
        { data: 'gsx$ppa.$t' },
        { data: 'gsx$expectedwins.$t' },
        { data: 'gsx$ou.$t' },
        { data: 'gsx$salchange.$t' },
        { data: 'gsx$olrank.$t' },
        { data: 'gsx$fps.$t' }
            ]
          });
        });




  //above is for qb
  // ==========
  // below is for rb



    var spreadsheetIDrb = "15mSJN1WKrxFVJtIYT20sJS9mGr7f65Ow1XGLhHVuzDo";
    // Make sure it is public or set to Anyone with link can view
    var urlrb = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDrb + "/od6/public/values?alt=json";

      // if empty show all the appointments
      $.get(urlrb , function( data ) {
        console.log(data.feed.entry);

        //display all appointments with DATA
        $('.fantasyRB').DataTable( {

          data: data.feed.entry,

        "ordering": true,
        "info":     false,
          columns: [
            {data: "gsx$week.$t"},
            {data: "gsx$player.$t"},
            {data: "gsx$sal.$t"},
            {data: "gsx$pos.$t"},
            {data: "gsx$teamname.$t"},
            {data: "gsx$injurystatus.$t"},
            {data: "gsx$typeinjury.$t"},
            {data: "gsx$spread.$t"},
            {data: "gsx$rvp.$t"},
            {data: "gsx$prating.$t"},
            {data: "gsx$ppg.$t"},
            {data: "gsx$rushattgame.$t"},
            {data: "gsx$rectarg.$t"},
            {data: "gsx$totalopp.$t"},
            {data: "gsx$ppa.$t"},
            {data: "gsx$expectedwins.$t"},
            {data: "gsx$pathexpectation.$t"},
            {data: "gsx$ou.$t"},
            {data: "gsx$salchange.$t"},
            {data: "gsx$snapcount.$t"},
            {data: "gsx$oflrating.$t"},
            {data: "gsx$fps.$t"}
            ]
          });
        });



  // RUNNING BACK = https://docs.google.com/spreadsheets/d/15mSJN1WKrxFVJtIYT20sJS9mGr7f65Ow1XGLhHVuzDo/pubhtml



  // ID of the Google Spreadsheet
  //below is for quarterbacks
  // var spreadsheetIDrb = "15mSJN1WKrxFVJtIYT20sJS9mGr7f65Ow1XGLhHVuzDo";
  //
  // // Make sure it is public or set to Anyone with link can view
  // var urlrb = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDrb + "/od6/public/values?alt=json";
  //
  //   $.getJSON(urlrb, function(datarb) {
  //
  //   var entryrb = data.feed.entry;
  //
  //   $(entryrb).each(function(){
  //
  //     $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
  //   });
  // });
  //
  //
  //
  //
  // // above is for rb
  // // ==========
  // // below is for wr
  //
  // // WR = https://docs.google.com/spreadsheets/d/1gNVt-L_tVtvNSvoZpmocD91q7JShDjC370JqXo4E6Ko/pubhtml
  //
  // // ID of the Google Spreadsheet
  // var spreadsheetIDwr = "1gNVt-L_tVtvNSvoZpmocD91q7JShDjC370JqXo4E6Ko";
  //
  // // Make sure it is public or set to Anyone with link can view
  // var urlwr = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDwr + "/od6/public/values?alt=json";
  //
  //   $.getJSON(urlwr, function(data) {
  //
  //   var entrywr = data.feed.entry;
  //
  //   $(entrywr).each(function(){
  //
  //     // Column names are name, age, etc.
  //     $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
  //   });
  // });
  //
  //
  //
  //
  //
  // // above is for wr
  // //============
  // // below is for te
  // // TE = https://docs.google.com/spreadsheets/d/1UjVGzANuKJ-_ERg8f4ixjPW6AVL9bjCcIhyq4YK-Z0k/pubhtml
  //
  // // ID of the Google Spreadsheet
  // var spreadsheetIDte = "1UjVGzANuKJ-_ERg8f4ixjPW6AVL9bjCcIhyq4YK-Z0k";
  //
  // // Make sure it is public or set to Anyone with link can view
  // var urlte = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDte + "/od6/public/values?alt=json";
  //
  //   $.getJSON(urlte, function(data) {
  //
  //   var entryte = data.feed.entry;
  //
  //   $(entryte).each(function(){
  //
  //     $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
  //   });
  // });
  //
  //
  //
  //
  //
  // // above is for te
  // // ===========
  // // below is for k
  // // K = https://docs.google.com/spreadsheets/d/1RWrzWmrAZqyLlmpqNnA8kKRk9fjFN3japYiAtztRWKs/pubhtml
  //
  // // ID of the Google Spreadsheet
  // var spreadsheetIDk = "1RWrzWmrAZqyLlmpqNnA8kKRk9fjFN3japYiAtztRWKs";
  //
  // // Make sure it is public or set to Anyone with link can view
  // var urlk = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDk + "/od6/public/values?alt=json";
  //
  //   $.getJSON(urlk, function(data) {
  //
  //   var entryk = data.feed.entry;
  //
  //   $(entryk).each(function(){
  //
  //     $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
  //   });
  // });
  //
  
  //
  //
  // // above is for k
  // // ===========
  // // below is for def
  // // Def = https://docs.google.com/spreadsheets/d/1B63c8kUsBMC3nHhIq2vErR-55b-SgiTlhGSYIA-G2X4/pubhtml
  //
  // // ID of the Google Spreadsheet
  // var spreadsheetIDdef = "1B63c8kUsBMC3nHhIq2vErR-55b-SgiTlhGSYIA-G2X4";
  //
  // // Make sure it is public or set to Anyone with link can view
  // var urldef = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDdef + "/od6/public/values?alt=json";
  //
  //   $.getJSON(urldef, function(data) {
  //
  //   var entrydef = data.feed.entry;
  //
  //   $(entrydef).each(function(){
  //
  //     $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
  //   });
  // });
  // above is for def
  // =========
  // below is for teams
  $('.fantasynewsNBA').hide();
  $('#runningback').hide();

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





  $("#qbLink").on('click', function(){
    $('#quarterback').show();
    $('#runningback').hide();
  });

  $("#rbLink").on('click', function(){
    $('#quarterback').hide();
    $('#runningback').show();

  });

  $("#wrLink").on('click', function(){
    $('#quarterback').show();
  });

  $("#teLink").on('click', function(){
    $('#quarterback').show();
  });

  $("#kLink").on('click', function(){
    $('#quarterback').show();
  });

  $("#defLink").on('click', function(){
    $('#quarterback').show();
  });

});
