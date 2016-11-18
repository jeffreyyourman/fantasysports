$(document).ready(function(){
  // var table = $('.fantasyQB').DataTable();



  var spreadsheetIDqb = "1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw";
  var urlqb = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDqb + "/od6/public/values?alt=json";

      // if emptdy show all the appointments
      $.get(urlqb , function( data ) {

        //display all appointments with DATA
        $('.fantasyQB').DataTable({

          data: data.feed.entry,

          "dom": '<"pull-left"f><"pull-right"l>tip',

          "ordering": true,
          "info":     false,
          "bLengthChange": true,

          columns: [
            { data : 'gsx$week.$t' },
            { data : 'gsx$player.$t' },
            { data : 'gsx$sal.$t' },
            { data : 'gsx$pos.$t' },
            { data : 'gsx$team.$t' },
            { data : 'gsx$teamname.$t' },
            { data : 'gsx$id.$t' },
            { data : 'gsx$injurystatus.$t' },
            { data : 'gsx$typeinjury.$t' },
            { data : 'gsx$rvp.$t' },
            { data : 'gsx$playerrank.$t' },
            { data : 'gsx$oppdefrank.$t' },
            { data : 'gsx$fppg.$t' },
            { data : 'gsx$passattemptgame.$t' },
            { data : 'gsx$rushattgame.$t' },
            { data : 'gsx$totalopp.$t' },
            { data : 'gsx$ppa.$t' },
            { data : 'gsx$dova.$t' },
            { data : 'gsx$expectedwins.$t' },
            { data : 'gsx$pathexpectation.$t' },
            { data : 'gsx$ou.$t' },
            { data : 'gsx$ml.$t' },
            { data : 'gsx$sl.$t' },
            { data : 'gsx$endingml.$t' },
            { data : 'gsx$linechange.$t' },
            { data : 'gsx$salchange.$t' },
            { data : 'gsx$olscore.$t' },
            { data : 'gsx$playerrating.$t' },
            { data : 'gsx$criteriascore.$t' },
            { data : 'gsx$critrank.$t' },
            { data : 'gsx$recpre.$t' },
            { data : 'gsx$fps.$t' }
      ],
            "columnDefs": [
              { // Date columns
                "targets": 7,
                "createdCell": function (td, cellData, rowData, row, col) {
                  if ( cellData >= 20 ) {
                    $(td).css('background-color', 'lightgreen')
                  } else if ((cellData >= 10) && (cellData <= 19)) {
                    $(td).css('background-color', '#FFBD00')
                  } else if ((cellData) >= 0 && (cellData <= 9)) {
                    $(td).css('background-color', 'red')
                  }
                }
              },
              {
                targets: 11,
                "createdCell": function (td, cellData, rowData, row, col) {
                  // if ( cellData >= "35.00%" ) {
                  //   $(td).css('background-color', 'lightgreen')
                  // } else if ((cellData >= "24.00%") && (cellData <= "34.99%")) {
                  //   $(td).css('background-color', 'yellow')
                  // } else if ((cellData >= "16.00%") && (cellData <= "23.99%")) {
                  //   $(td).css('background-color', '#FFBD00')
                  // } else if (cellData <= "15.99%") {
                  //   $(td).css('background-color', 'red')
                  // }
                }
              }
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

          "dom": '<"pull-left"f><"pull-right"l>tip',

          "ordering": true,
          "info":     false,
          "bLengthChange": true,

          columns: [
            { data : 'gsx$week.$t' },
            { data : 'gsx$player.$t' },
            { data : 'gsx$sal.$t' },
            { data : 'gsx$pos.$t' },
            { data : 'gsx$team.$t' },
            { data : 'gsx$teamname.$t' },
            { data : 'gsx$id.$t' },
            { data : 'gsx$injurystatus.$t' },
            { data : 'gsx$typeinjury.$t' },
            { data : 'gsx$spread.$t' },
            { data : 'gsx$rvp.$t' },
            { data : 'gsx$playerrank.$t' },
            { data : 'gsx$ppg.$t' },
            { data : 'gsx$rushattgame.$t' },
            { data : 'gsx$rectarg.$t' },
            { data : 'gsx$totalopp.$t' },
            { data : 'gsx$ppa.$t' },
            { data : 'gsx$rdova.$t' },
            { data : 'gsx$expectedwins.$t' },
            { data : 'gsx$pathexpectation.$t' },
            { data : 'gsx$ou.$t' },
            { data : 'gsx$ml.$t' },
            { data : 'gsx$sl.$t' },
            { data : 'gsx$endingml.$t' },
            { data : 'gsx$linechange.$t' },
            { data : 'gsx$salchange.$t' },
            { data : 'gsx$snapcount.$t' },
            { data : 'gsx$olrank.$t' },
            { data : 'gsx$recpre.$t' },
            { data : 'gsx$playerrating.$t' },
            { data : 'gsx$criteriascore.$t' },
            { data : 'gsx$critrank.$t' },
            { data : 'gsx$fps.$t' }
            ]
          });
        });

  var spreadsheetIDwr = "1gNVt-L_tVtvNSvoZpmocD91q7JShDjC370JqXo4E6Ko";
  var urlwr = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDwr + "/od6/public/values?alt=json";

    // if empty show all the appointments
    $.get(urlwr , function( data ) {
      $('.fantasyWR').DataTable( {

        data: data.feed.entry,

        "dom": '<"pull-left"f><"pull-right"l>tip',

        "ordering": true,
        "info":     false,
        "bLengthChange": true,

        columns: [
          { data : 'gsx$week.$t' },
          { data : 'gsx$player.$t' },
          { data : 'gsx$sal.$t' },
          { data : 'gsx$pos.$t' },
          { data : 'gsx$team.$t' },
          { data : 'gsx$teamname.$t' },
          { data : 'gsx$id.$t' },
          { data : 'gsx$injurystatus.$t' },
          { data : 'gsx$typeinjury.$t' },
          { data : 'gsx$spread.$t' },
          { data : 'gsx$qbscore.$t' },
          { data : 'gsx$rvp.$t' },
          { data : 'gsx$playerrank.$t' },
          { data : 'gsx$ppg.$t' },
          { data : 'gsx$rushattgame.$t' },
          { data : 'gsx$rectarg.$t' },
          { data : 'gsx$recs.$t' },
          { data : 'gsx$totalopp.$t' },
          { data : 'gsx$ppa.$t' },
          { data : 'gsx$pdova.$t' },
          { data : 'gsx$expectedwins.$t' },
          { data : 'gsx$pathexpectation.$t' },
          { data : 'gsx$ou.$t' },
          { data : 'gsx$ml.$t' },
          { data : 'gsx$sl.$t' },
          { data : 'gsx$endingml.$t' },
          { data : 'gsx$linechange.$t' },
          { data : 'gsx$salchange.$t' },
          { data : 'gsx$snapcount.$t' },
          { data : 'gsx$recpre.$t' },
          { data : 'gsx$playerrating.$t' },
          { data : 'gsx$criteriascore.$t' },
          { data : 'gsx$critrank.$t' },
          { data : 'gsx$fps.$t' }
          ]
        });
      });
//
  var spreadsheetIDte = "1UjVGzANuKJ-_ERg8f4ixjPW6AVL9bjCcIhyq4YK-Z0k";
  var urlte = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDte + "/od6/public/values?alt=json";

    // if empty show all the appointments
    $.get(urlte , function( data ) {
      //display all appointments with DATA
      $('.fantasyTE').DataTable( {

        data: data.feed.entry,

        "dom": '<"pull-left"f><"pull-right"l>tip',

        "ordering": true,
        "info":     false,
        "bLengthChange": true,

        columns: [
          { data : 'gsx$week.$t' },
          { data : 'gsx$player.$t' },
          { data : 'gsx$sal.$t' },
          { data : 'gsx$pos.$t' },
          { data : 'gsx$team.$t' },
          { data : 'gsx$teamname.$t' },
          { data : 'gsx$id.$t' },
          { data : 'gsx$injurystatus.$t' },
          { data : 'gsx$typeinjury.$t' },
          { data : 'gsx$spread.$t' },
          { data : 'gsx$qbscore.$t' },
          { data : 'gsx$rvp.$t' },
          { data : 'gsx$playerrank.$t' },
          { data : 'gsx$ppg.$t' },
          { data : 'gsx$rushattgame.$t' },
          { data : 'gsx$rectarg.$t' },
          { data : 'gsx$recs.$t' },
          { data : 'gsx$totalopp.$t' },
          { data : 'gsx$ppa.$t' },
          { data : 'gsx$pdova.$t' },
          { data : 'gsx$expectedwins.$t' },
          { data : 'gsx$pathexpectation.$t' },
          { data : 'gsx$ou.$t' },
          { data : 'gsx$ml.$t' },
          { data : 'gsx$sl.$t' },
          { data : 'gsx$endingml.$t' },
          { data : 'gsx$linechange.$t' },
          { data : 'gsx$salchange.$t' },
          { data : 'gsx$snapcount.$t' },
          { data : 'gsx$recentpre.$t' },
          { data : 'gsx$playerrating.$t' },
          { data : 'gsx$criteriascore.$t' },
          { data : 'gsx$critrank.$t' },
          { data : 'gsx$fps.$t' }
          ]
        });
      });

  var spreadsheetIDk = "1RWrzWmrAZqyLlmpqNnA8kKRk9fjFN3japYiAtztRWKs";
  var urlk = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDk + "/od6/public/values?alt=json";

    $.get(urlk , function( data ) {
      //display all appointments with DATA
      $('.fantasyK').DataTable( {

        data: data.feed.entry,

        "dom": '<"pull-left"f><"pull-right"l>tip',

        "ordering": true,
        "info":     false,
        "bLengthChange": true,

        columns: [
          { data : 'gsx$week.$t' },
          { data : 'gsx$player.$t' },
          { data : 'gsx$sal.$t' },
          { data : 'gsx$pos.$t' },
          { data : 'gsx$team.$t' },
          { data : 'gsx$teamname.$t' },
          { data : 'gsx$injurystatus.$t' },
          { data : 'gsx$typeinjury.$t' },
          { data : 'gsx$rvp.$t' },
          { data : 'gsx$playerrank.$t' },
          { data : 'gsx$ppg.$t' },
          { data : 'gsx$totalopp.$t' },
          { data : 'gsx$ppk.$t' },
          { data : 'gsx$expectedwins.$t' },
          { data : 'gsx$pathexpectation.$t' },
          { data : 'gsx$ou.$t' },
          { data : 'gsx$ml.$t' },
          { data : 'gsx$sl.$t' },
          { data : 'gsx$endingml.$t' },
          { data : 'gsx$linechange.$t' },
          { data : 'gsx$salchange.$t' },
          { data : 'gsx$recpre.$t' },
          { data : 'gsx$tdcon.$t' },
          { data : 'gsx$playerrating.$t' },
          { data : 'gsx$criteriascore.$t' },
          { data : 'gsx$critrank.$t' },
          { data : 'gsx$fps.$t' }
          ]
        });
      });

  var spreadsheetIDdef = "1B63c8kUsBMC3nHhIq2vErR-55b-SgiTlhGSYIA-G2X4";

  var urldef = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDdef + "/od6/public/values?alt=json";
  $.get(urldef , function( data ) {
    //display all appointments with DATA
    $('.fantasyDEF').DataTable( {

      data: data.feed.entry,

      "dom": '<"pull-left"f><"pull-right"l>tip',

      "ordering": true,
      "info":     false,
      "bLengthChange": true,

      columns: [
        { data : 'gsx$week.$t' },
        { data : 'gsx$player.$t' },
        { data : 'gsx$sal.$t' },
        { data : 'gsx$pos.$t' },
        { data : 'gsx$team.$t' },
        { data : 'gsx$teamname.$t' },
        { data : 'gsx$opp.$t' },
        { data : 'gsx$ppg.$t' },
        { data : 'gsx$oppqbinjurystatus.$t' },
        { data : 'gsx$typeinjury.$t' },
        { data : 'gsx$opp-qb-score.$t' },
        { data : 'gsx$rvp.$t' },
        { data : 'gsx$playerrank.$t' },
        { data : 'gsx$yardsallowed.$t' },
        { data : 'gsx$defdova.$t' },
        { data : 'gsx$oppodova.$t' },
        { data : 'gsx$combineddova.$t' },
        { data : 'gsx$expectedwins.$t' },
        { data : 'gsx$pathexpectation.$t' },
        { data : 'gsx$ou.$t' },
        { data : 'gsx$ml.$t' },
        { data : 'gsx$sl.$t' },
        { data : 'gsx$endingml.$t' },
        { data : 'gsx$linechange.$t' },
        { data : 'gsx$salchange.$t' },
        { data : 'gsx$playerrating.$t' },
        { data : 'gsx$criteriascore.$t' },
        { data : 'gsx$critrank.$t' },
        { data : 'gsx$recp.$t' },
        { data : 'gsx$fps.$t' }
        ]
      });
    });
    var spreadsheetIDNBA = "1iC9-Db33FCOaSA8avYkrgf4uMvMiTf1xJw3m5RbyH5A";
    var urlNBA = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDNBA + "/od6/public/values?alt=json";


        // if emptdy show all the appointments
        $.get(urlNBA , function( data ) {
          //display all appointments with DATA
        $('.tableNbaFantasy').DataTable({

            data: data.feed.entry,
            "dom": '<"pull-left"f><"pull-right"l>tip',
            "order": [[ 9, "desc" ]],

            "ordering": true,
            "info":     false,
            "bLengthChange": true,
            columns: [
              { data: 'gsx$player.$t' },
              { data: 'gsx$ha.$t' },
              { data: 'gsx$position.$t' },
              { data: 'gsx$team.$t' },
              { data: 'gsx$opp.$t' },
              { data: 'gsx$condition.$t' },
              { data: 'gsx$details.$t' },
              { data: 'gsx$avgminsl10.$t' },
              { data: 'gsx$projmins.$t' },
              { data: 'gsx$salary.$t' },
              { data: 'gsx$useage.$t' },
              { data: 'gsx$ppgl10.$t' },
              { data: 'gsx$ppm.$t' },
              { data: 'gsx$ovp.$t' },
              { data: 'gsx$projscore.$t' },
              { data: 'gsx$gameline.$t' },
              { data: 'gsx$projectedpts.$t' },
              { data: 'gsx$value.$t' },
              { data: 'gsx$ownership.$t' },
              { data: 'gsx$expectedvalue.$t' },
              { data: 'gsx$netvalue.$t' },
              { data: 'gsx$gamesplayed.$t' },
              { data: 'gsx$recpr.$t' },
              { data: 'gsx$score.$t' },
              { data: 'gsx$ptsvpos.$t' },
              { data: 'gsx$delete.$t' }
        ],
        "createdRow": function( row, data, dataIndex ) {
          // console.log(data.gsx$salary.$t);
        },
        "columnDefs": [
          { // Date columns
            "targets": 1,
            "createdCell": function (td, cellData, rowData, row, col) {
              if ((rowData.gsx$projmins.$t > 28) && (rowData.gsx$useage.$t > "20.00%") && (rowData.gsx$ppm.$t > 0.8) && (rowData.gsx$ovp.$t > 0.88) && (rowData.gsx$projscore.$t > 100) && (rowData.gsx$gameline.$t > 200) && (rowData.gsx$value.$t > 5.00)) {
                var playernames = rowData.gsx$player.$t;
                var playercondition = rowData.gsx$condition.$t
                var playerdetails = rowData.gsx$details.$t
                if (playercondition == 'GTD') {
                  $('.suggestedPlayersNBA').append('<li>' + playernames + ' ' + '(GTD ' + playerdetails + ')' + '</li>');
                }
                if (playercondition == '-') {
                  $('.suggestedPlayersNBA').append('<li>' + playernames + ' ' + '(Playing)' + '</li>');
                }
                if (playercondition == 'O') {
                  $('.suggestedPlayersNBA').append('<li>' + playernames + ' ' + '(OUT ' + playerdetails + ')' + '</li>');
                }
              }
            }
          },
          { // Date columns
            "targets": 7,
            "createdCell": function (td, cellData, rowData, row, col) {
              var time = cellData;
              var minutes = time.split(":");
              var display=minutes[0];
              if ( display >= 31 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((display >= 24) && (display <= 30.99)) {
                $(td).css('background-color', 'yellow')
              } else if ((display >= 17) && (display <= 23.99)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((display >= 0) && (display <= 16.99) || (cellData = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns
            "targets": 8,
            "createdCell": function (td, cellData, rowData, row, col) {
              if ( cellData >= 31 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((cellData >= 24) && (cellData <= 31.9)) {
                $(td).css('background-color', 'yellow')
              } else if ((cellData >= 17) && (cellData <= 23.9)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((cellData >= 0.1) && (cellData <= 16.9) || (cellData = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          {
            targets: 10,
            "createdCell": function (td, cellData, rowData, row, col) {
              if ( cellData >= "35.00%" ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((cellData >= "24.00%") && (cellData <= "34.99%")) {
                $(td).css('background-color', 'yellow')
              } else if ((cellData >= "16.00%") && (cellData <= "23.99%")) {
                $(td).css('background-color', '#FFBD00')
              } else if (cellData <= "15.99%") {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns
            "targets": 12,
            "createdCell": function (td, cellData, rowData, row, col) {
              if ( cellData >= 1.3 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((cellData >= 1.00) && (cellData <= 1.29)) {
                $(td).css('background-color', 'yellow')
              } else if ((cellData >= .85) && (cellData <= .999)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((cellData >= 0) && (cellData <= .849) || (cellData = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns
            "targets": 13,
            "createdCell": function (td, cellData, rowData, row, col) {
              if ( cellData >= 1.1 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((cellData >= .97) && (cellData <= 1.09)) {
                $(td).css('background-color', 'yellow')
              } else if ((cellData >= .89) && (cellData <= .969)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((cellData >= 0) && (cellData <= .889) || (cellData = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns
            "targets": 14,
            "createdCell": function (td, cellData, rowData, row, col) {
              if ( cellData >= 108 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((cellData >= 100) && (cellData <= 107.9)) {
                $(td).css('background-color', 'yellow')
              } else if ((cellData >= 92) && (cellData <= 99.9)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((cellData >= 0) && (cellData <= 91.9) || (cellData = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns FF8700
            "targets": 15,
            "createdCell": function (td, cellData, rowData, row, col) {
              if ( cellData >= 212 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((cellData >= 206) && (cellData <= 211.99)) {
                $(td).css('background-color', 'yellow')
              } else if ((cellData >= 200) && (cellData <= 205.99)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((cellData >= 195) && (cellData <= 199.99)) {
                $(td).css('background-color', '#FF8700')
              } else if ((cellData >= 0) && (cellData <= 194.99) || (cellData = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns FF8700
            "targets": 17,
            "createdCell": function (td, cellData, rowData, row, col) {
              if ( cellData >= 5.00 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((cellData >= 4.5) && (cellData <= 4.99)) {
                $(td).css('background-color', 'yellow')
              } else if ((cellData >= 4.0) && (cellData <= 4.499)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((cellData >= 3.5) && (cellData <= 3.99)) {
                $(td).css('background-color', '#FF8700')
              } else if ((cellData >= 0) && (cellData <= 3.499) || (cellData = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns FF8700
            "targets": 25,
            "createdCell": function (td, cellData, rowData, row, col) {
              if ( cellData == "KEEP" ) {
                $(td).css('background-color', 'lightgreen')
              } else if (cellData == "DELETE") {
                $(td).css('background-color', 'red')
              }
            }
          }
        ]
    });
  });

// Player rank is a players rank (lower better ) and rvp is the opponents rank at that pos (higher better)

 // what's the diff between value and expected value?

 // Value based in projections and expexted value based on previous games

 // PtsVPos it's better to be high or low? High

 // what's recpre = Recent performance (Their last game compared to their average) = So if Big Ben averages 20 pts but hit 11 he needs like 30 pts to come back to average




 // diff between player rank and rating?
 // Rating is just the number but rank is how they rank against other guys

// For the ranks, lower is better


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
