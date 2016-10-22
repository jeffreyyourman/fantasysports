$(document).ready(function(){

  var spreadsheetIDqb = "1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw";
  var urlqb = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDqb + "/od6/public/values?alt=json";

  // console.log('this is the quarterback ldataog',data);

      // if emptdy show all the appointments
      $.get(urlqb , function( data ) {
      // $.get('/tables' , function( data ) {
        // console.log('this si data', data);
      // $.get('/tables', function( data ) {
        // for (var i = 0; i < data.length; i++) {
        //   console.log(data[i]);
        // } this doesn't work (nothing logs)

        // console.log(data); // this log works but comes up empty
        //display all appointments with DATA
        $('.fantasyQB').DataTable( {
          data: data.feed.entry,

          "dom": '<"top"i>rt<"bottom"flp><"clear">',


          "ordering": true,
          "info":     false,
          "bLengthChange": false,

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


    var spreadsheetIDrb = "15mSJN1WKrxFVJtIYT20sJS9mGr7f65Ow1XGLhHVuzDo";
    // Make sure it is public or set to Anyone with link can view
    var urlrb = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDrb + "/od6/public/values?alt=json";

      // if empty show all the appointments
      $.get(urlrb , function( data ) {

        //display all appointments with DATA
        $('.fantasyRB').DataTable( {

          data: data.feed.entry,

          "dom": '<"top"i>rt<"bottom"flp><"clear">',


          "ordering": true,
          "info":     false,
          "bLengthChange": false,

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

  var spreadsheetIDwr = "1gNVt-L_tVtvNSvoZpmocD91q7JShDjC370JqXo4E6Ko";
  var urlwr = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDwr + "/od6/public/values?alt=json";

    // if empty show all the appointments
    $.get(urlwr , function( data ) {

      $('.fantasyWR').DataTable( {

        data: data.feed.entry,

        "dom": '<"top"i>rt<"bottom"flp><"clear">',


        "ordering": true,
        "info":     false,
        "bLengthChange": false,

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
          {data: "gsx$pr.$t"},
          {data: "gsx$ppg.$t"},
          {data: "gsx$rushattgame.$t"},
          {data: "gsx$rectarg.$t"},
          {data: "gsx$recs.$t"},
          {data: "gsx$totalopp.$t"},
          {data: "gsx$ppa.$t"},
          {data: "gsx$expectedwins.$t"},
          {data: "gsx$ou.$t"},
          {data: "gsx$salchange.$t"},
          {data: "gsx$snapcount.$t"},
          {data: "gsx$fps.$t"}
          ]
        });
      });

  var spreadsheetIDte = "1UjVGzANuKJ-_ERg8f4ixjPW6AVL9bjCcIhyq4YK-Z0k";
  var urlte = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDte + "/od6/public/values?alt=json";

    // if empty show all the appointments
    $.get(urlte , function( data ) {

      //display all appointments with DATA
      $('.fantasyTE').DataTable( {

        data: data.feed.entry,

        "dom": '<"top"i>rt<"bottom"flp><"clear">',


        "ordering": true,
        "info":     false,
        "bLengthChange": false,

        columns: [
          {data: "gsx$week.$t"},
          {data: "gsx$player.$t"},
          {data: "gsx$sal.$t"},
          {data: "gsx$pos.$t"},
          {data: "gsx$teamname.$t"},
          {data: "gsx$injurystatus.$t"},
          {data: "gsx$typeinjury.$t"},
          {data: "gsx$spread.$t"},
          {data: "gsx$qbscore.$t"},
          {data: "gsx$rvp.$t"},
          {data: "gsx$pr.$t"},
          {data: "gsx$ppg.$t"},
          {data: "gsx$rushattgame.$t"},
          {data: "gsx$rectarg.$t"},
          {data: "gsx$recs.$t"},
          {data: "gsx$totalopp.$t"},
          {data: "gsx$ppa.$t"},
          {data: "gsx$expectedwins.$t"},
          {data: "gsx$ou.$t"},
          {data: "gsx$salchange.$t"},
          {data: "gsx$snapcount.$t"},
          {data: "gsx$fps.$t"}
          ]
        });
      });

  var spreadsheetIDk = "1RWrzWmrAZqyLlmpqNnA8kKRk9fjFN3japYiAtztRWKs";
  var urlk = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDk + "/od6/public/values?alt=json";

    $.get(urlk , function( data ) {

      //display all appointments with DATA
      $('.fantasyK').DataTable( {

        data: data.feed.entry,

        "dom": '<"top"i>rt<"bottom"flp><"clear">',


        "ordering": true,
        "info":     false,
        "bLengthChange": false,

        columns: [
          {data: "gsx$week.$t"},
          {data: "gsx$player.$t"},
          {data: "gsx$sal.$t"},
          {data: "gsx$pos.$t"},
          {data: "gsx$teamname.$t"},
          {data: "gsx$injurystatus.$t"},
          {data: "gsx$typeinjury.$t"},
          {data: "gsx$rvp.$t"},
          {data: "gsx$pr.$t"},
          {data: "gsx$ppg.$t"},
          {data: "gsx$totalopp.$t"},
          {data: "gsx$ppk.$t"},
          {data: "gsx$expectedwins.$t"},
          {data: "gsx$pathexpectation.$t"},
          {data: "gsx$ou.$t"},
          {data: "gsx$salchange.$t"},
          {data: "gsx$fps.$t"}
          ]
        });
      });

  var spreadsheetIDdef = "1B63c8kUsBMC3nHhIq2vErR-55b-SgiTlhGSYIA-G2X4";

  var urldef = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDdef + "/od6/public/values?alt=json";
  $.get(urldef , function( data ) {

    //display all appointments with DATA
    $('.fantasyDEF').DataTable( {

      data: data.feed.entry,

      "dom": '<"top"i>rt<"bottom"flp><"clear">',


      "ordering": true,
      "info":     false,
      "bLengthChange": false,

      columns: [
        {data: "gsx$week.$t"},
        {data: "gsx$player.$t"},
        {data: "gsx$sal.$t"},
        {data: "gsx$pos.$t"},
        {data: "gsx$teamname.$t"},
        {data: "gsx$opp.$t"},
        {data: "gsx$oppqbinjurystatus.$t"},
        {data: "gsx$typeinjury.$t"},
        {data: "gsx$opp-qbscore.$t"},
        {data: "gsx$rvp.$t"},
        {data: "gsx$pr.$t"},
        {data: "gsx$yardsallowed.$t"},
        {data: "gsx$expectedwins.$t"},
        {data: "gsx$ou.$t"},
        {data: "gsx$salchange.$t"},
        {data: "gsx$fps.$t"}
        ]
      });
    });


  $('.fantasynewsNBA').hide();
  var qbfantasy = $('.qbfantasy');
  var rbfantasy = $('.rbfantasy');
  var wrfantasy = $('.wrfantasy');
  var tefantasy = $('.tefantasy');
  var kfantasy = $('.kfantasy');
  var deffantasy = $('.deffantasy');

  rbfantasy.hide();
  wrfantasy.hide();
  tefantasy.hide();
  kfantasy.hide();
  deffantasy.hide();

  $('#FPNewsNBAButton').on('click', function(){
    $('.fantasynewsNFL').hide();
    $('.fantasynewsNBA').show();
  });
  $('#FPNewsNFLButton').on('click', function(){
    $('.fantasynewsNBA').hide();
    $('.fantasynewsNFL').show();
  });

  $("#qbLink").on('click', function(e){
    e.preventDefault();
    rbfantasy.hide();
    wrfantasy.hide();
    tefantasy.hide();
    kfantasy.hide();
    deffantasy.hide();
    qbfantasy.show();
  });

  $("#rbLink").on('click', function(e){
    e.preventDefault();
    qbfantasy.hide();
    wrfantasy.hide();
    tefantasy.hide();
    kfantasy.hide();
    deffantasy.hide();
    rbfantasy.show();
  });

  $("#wrLink").on('click', function(e){
    e.preventDefault();
    qbfantasy.hide();
    rbfantasy.hide();
    tefantasy.hide();
    kfantasy.hide();
    deffantasy.hide();
    wrfantasy.show();
  });

  $("#teLink").on('click', function(e){
    e.preventDefault();
    qbfantasy.hide();
    wrfantasy.hide();
    rbfantasy.hide();
    kfantasy.hide();
    deffantasy.hide();
    tefantasy.show();
  });

  $("#kLink").on('click', function(e){
    e.preventDefault();
    qbfantasy.hide();
    wrfantasy.hide();
    tefantasy.hide();
    rbfantasy.hide();
    deffantasy.hide();
    kfantasy.show();
  });

  $("#defLink").on('click', function(e){
    e.preventDefault();
    qbfantasy.hide();
    wrfantasy.hide();
    tefantasy.hide();
    kfantasy.hide();
    rbfantasy.hide();
    deffantasy.show();
  });

});
