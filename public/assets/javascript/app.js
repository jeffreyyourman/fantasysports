$(document).ready(function(){


    var spreadsheetIDNBA = "1iC9-Db33FCOaSA8avYkrgf4uMvMiTf1xJw3m5RbyH5A";
    var urlNBA = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDNBA + "/od6/public/values?alt=json";

      var arr = [];

        // if emptdy show all the appointments
        $.get(urlNBA , function( data ) {
          //display all appointments with DATA

        nbatable(data);
        nbatablefilter();
  });
    var nbatablefilter = function(){
      // $(".tableNbaFantasy").dataTable().fnDestroy();
      var table = $('.tableNbaFantasy').DataTable();
      $(".nbaposition").on("click", function(){
        var position = $(this).data('button');
        if (position == 'All') {
          //returns all players back
        } else {
          $.fn.dataTable.ext.search.push(
              function( settings, data, dataIndex ) {
                  return  data[2] == position
                      ? true
                      : false
              }
          );
        }
        table.draw();
        $.fn.dataTable.ext.search.pop();
      });
    };
      var nbatable = function(data) {
      $(".tableNbaFantasy").dataTable().fnDestroy();
      var table = $('.tableNbaFantasy').DataTable({

            data: data.feed.entry,
            "dom": '<"NBAimages">frtip',
            "scrollX": true,
            "pageLength": 50,
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
              { data: 'gsx$expectedvalue.$t' },
              { data: 'gsx$gamesplayed.$t' },
              { data: 'gsx$recpr.$t' },
              { data: 'gsx$ptsvpos.$t' },
              { data: 'gsx$criteriaranking.$t' },
              { data: 'gsx$delete.$t' }
        ],

        "columnDefs": [
          { className: "recentPerformance", "targets": [ 19 ] },
          { // Date columns
            "targets": 19,
            "createdCell": function (td, cellData, rowData, row, col) {
              var recentPerformance = rowData.gsx$recpr.$t;

              if (((rowData.gsx$recpr.$t <= 0) || (rowData.gsx$recpr.$t == '-')) && (rowData.gsx$projmins.$t > 27) && (rowData.gsx$useage.$t > "15.00%") && (rowData.gsx$criteriaranking.$t >= 5) && (rowData.gsx$delete.$t == 'KEEP') && (rowData.gsx$salaryadjust.$t <= 0)) {

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
          {
            targets: 9,
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
            "targets": 11,
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
            "targets": 12,
            "createdCell": function (td, cellData, rowData, row, col) {
              if ( cellData >= 1.1 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((cellData >= .97) && (cellData <= 1.099)) {
                $(td).css('background-color', 'yellow')
              } else if ((cellData >= .89) && (cellData <= .969)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((cellData >= 0) && (cellData <= .889) || (cellData = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns
            "targets": 13,
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
            "targets": 14,
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
            "targets": 16,
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
            "targets": 21,
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
  }

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
