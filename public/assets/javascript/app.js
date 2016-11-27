$(document).ready(function(){


    var spreadsheetIDNBA = "1iC9-Db33FCOaSA8avYkrgf4uMvMiTf1xJw3m5RbyH5A";
    var urlNBA = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDNBA + "/od6/public/values?alt=json";

      var arr = [];

        // if emptdy show all the appointments
        $.get(urlNBA , function( data ) {
          //display all appointments with DATA

        nbatable(data);
        nbaFilterPosition();


  });
    var nbaFilterPosition = function(){
      // $(".tableNbaFantasy").dataTable().fnDestroy();

      var table = $('.tableNbaFantasy').DataTable();
      $(document).on("click",'.nbaposition', function(){
        $('.nbaposition').removeClass('highlight');
        $(this).addClass('highlight');
        var position = $(this).attr('data-position');
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
            "scrollY": "600px",
            "scrollX": true,
            "scrollCollapse": true,
            "pageLength": 50,
            "order": [[ 9, "desc" ]],
            "fixedHeader": true,
            // "fixedColumns": true,
            "paging": false,

            // scrollY:        "700px",
            // scrollX:        true,
            // scrollCollapse: true,
            // paging:         false,
            // fixedColumns:   {
            //     leftColumns: 1,
            //     rightColumns: 1
            // },

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
              { data: 'gsx$player.$t' },
              { data: 'gsx$gameline.$t' },
              { data: 'gsx$projectedpts.$t' },
              { data: 'gsx$value.$t' },
              { data: 'gsx$salaryadjust.$t' },
              { data: 'gsx$recpr.$t' },
              { data: 'gsx$ptsvpos.$t' },
              { data: 'gsx$criteriaranking.$t' },
              { data: 'gsx$delete.$t' },
              { data: 'gsx$gamesplayed.$t' }
        ],
        "columnDefs": [
          { className: "playername", "targets": [ 0 ] },

          { // Date columns
            "targets": 0,
            "createdCell": function (td, cellData, rowData, row, col) {
              var varRowData = rowData;
              var recentPerformance = rowData.gsx$recpr.$t;

              if (((rowData.gsx$recpr.$t <= 10) || (rowData.gsx$recpr.$t == '-')) && (rowData.gsx$projmins.$t >= 27) && (rowData.gsx$useage.$t > "15.00%") && (rowData.gsx$criteriaranking.$t >= 5) && (rowData.gsx$delete.$t == 'KEEP') && (rowData.gsx$salaryadjust.$t <= 400)) {

                var playernames = rowData.gsx$player.$t;
                var playerposition = rowData.gsx$position.$t;
                var playercondition = rowData.gsx$condition.$t
                var playerdetails = rowData.gsx$details.$t
                if (playercondition == 'GTD') {
                  $('.suggestedPlayersNBA').append('<li>' + '(' + playerposition + ') ' + playernames + ' ' + '(GTD ' + playerdetails + ')' + '</li>');
                }
                if (playercondition == '-') {
                  $('.suggestedPlayersNBA').append('<li>' + '(' + playerposition + ') ' + playernames + ' ' + '(Playing)' + '</li>');
                }
                if (playercondition == 'O') {
                  $('.suggestedPlayersNBA').append('<li>' + '(' + playerposition + ') ' + playernames + ' ' + '(OUT ' + playerdetails + ')' + '</li>');
                }
              }
            }
          },
          { // Date columns
            "targets": 7,
            "createdCell": function (td, cellData, rowData, row, col) {
              var varDataCell = cellData;
              var time = varDataCell;
              var minutes = time.split(":");
              var display=minutes[0];
              if ( display >= 31 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((display >= 26) && (display <= 30.999)) {
                $(td).css('background-color', 'yellow')
              } else if ((display >= 23) && (display <= 25.999)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((display >= 19) && (display <= 22.999)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((display >= 0) && (display <= 18.999) || (varDataCell = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          {
            targets: 9,
            "createdCell": function (td, cellData, rowData, row, col) {
              var varDataCell = cellData;
              if ( varDataCell >= "35.00%" ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((varDataCell >= "27.00%") && (varDataCell <= "34.99%")) {
                $(td).css('background-color', 'yellow')
              } else if ((varDataCell >= "20.00%") && (varDataCell <= "26.99%")) {
                $(td).css('background-color', '#FFBD00')
              } else if ((varDataCell >= "16.00%") && (varDataCell <= "19.99%")) {
                $(td).css('background-color', '#FFBD00')
              } else if (varDataCell <= "15.99%") {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns
            "targets": 11,
            "createdCell": function (td, cellData, rowData, row, col) {
              var varDataCell = cellData;
              if ( varDataCell >= 1.3 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((varDataCell >= 1.00) && (varDataCell <= 1.29)) {
                $(td).css('background-color', 'yellow')
              } else if ((varDataCell >= .85) && (varDataCell <= .9999)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((varDataCell >= .80) && (varDataCell <= .8499)) {
                $(td).css('background-color', '#FF8700')
              } else if ((varDataCell >= 0) && (varDataCell <= .7999) || (varDataCell = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns
            "targets": 12,
            "createdCell": function (td, cellData, rowData, row, col) {
              var varDataCell = cellData;
              if ( varDataCell >= 1.1 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((varDataCell >= .97) && (varDataCell <= 1.099)) {
                $(td).css('background-color', 'yellow')
              } else if ((varDataCell >= .89) && (varDataCell <= .9699)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((varDataCell >= .85) && (varDataCell <= .8899)) {
                $(td).css('background-color', '#FF8700')
              } else if ((varDataCell >= 0) && (varDataCell <= .8499) || (varDataCell = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns
            "targets": 13,
            "createdCell": function (td, cellData, rowData, row, col) {
              var varDataCell = cellData;
              if ( varDataCell >= 105 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((varDataCell >= 100) && (varDataCell <= 104.99)) {
                $(td).css('background-color', 'yellow')
              } else if ((varDataCell >= 94) && (varDataCell <= 99.99)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((varDataCell >= 90) && (varDataCell <= 93.99)) {
                $(td).css('background-color', '#FF8700')
              } else if ((varDataCell >= 0) && (varDataCell <= 89.99) || (varDataCell = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns FF8700
            "targets": 15,
            "createdCell": function (td, cellData, rowData, row, col) {
              var varDataCell = cellData;
              if ( varDataCell >= 210 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((varDataCell >= 200) && (varDataCell <= 209.99)) {
                $(td).css('background-color', 'yellow')
              } else if ((varDataCell >= 195) && (varDataCell <= 199.99)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((varDataCell >= 190) && (varDataCell <= 194.99)) {
                $(td).css('background-color', '#FF8700')
              } else if ((varDataCell >= 0) && (varDataCell <= 194.99) || (varDataCell = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns FF8700
            "targets": 17,
            "createdCell": function (td, cellData, rowData, row, col) {
              var varDataCell = cellData;
              if ( varDataCell >= 5.00 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((varDataCell >= 4.5) && (varDataCell <= 4.99)) {
                $(td).css('background-color', 'yellow')
              } else if ((varDataCell >= 4.0) && (varDataCell <= 4.499)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((varDataCell >= 3.5) && (varDataCell <= 3.99)) {
                $(td).css('background-color', '#FF8700')
              } else if ((varDataCell >= 0) && (varDataCell <= 3.499) || (varDataCell = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns FF8700
            "targets": 18,
            "createdCell": function (td, cellData, rowData, row, col) {
              var varDataCell = cellData;
              if (( varDataCell <= 400 )|| (varDataCell == '-')) {
                $(td).css('background-color', 'lightgreen')
              } else {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns FF8700
            "targets": 19,
            "createdCell": function (td, cellData, rowData, row, col) {
              var varDataCell = cellData;
              if (( varDataCell <= 10 ) || (varDataCell == '-')) {
                $(td).css('background-color', 'lightgreen')
              } else {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns FF8700
            "targets": 20,
            "createdCell": function (td, cellData, rowData, row, col) {
              var varDataCell = cellData;
              if ( varDataCell >= 40.00 ) {
                $(td).css('background-color', 'lightgreen')
              } else if ((varDataCell >= 33) && (varDataCell <= 39.99)) {
                $(td).css('background-color', 'yellow')
              } else if ((varDataCell >= 25) && (varDataCell <= 32.99)) {
                $(td).css('background-color', '#FFBD00')
              } else if ((varDataCell >= 20) && (varDataCell <= 24.99)) {
                $(td).css('background-color', '#FF8700')
              } else if ((varDataCell >= 0) && (varDataCell <= 19.99) || (varDataCell = '-')) {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns FF8700
            "targets": 21,
            "createdCell": function (td, cellData, rowData, row, col) {
              var varDataCell = cellData;
              if ( varDataCell >= 5 ) {
                $(td).css('background-color', 'lightgreen')
              } else {
                $(td).css('background-color', 'red')
              }
            }
          },
          { // Date columns FF8700
            "targets": 22,
            "createdCell": function (td, cellData, rowData, row, col) {
              var varDataCell = cellData;
              if ( varDataCell == "KEEP" ) {
                $(td).css('background-color', 'lightgreen')
              } else if (varDataCell == "DELETE") {
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
  //
  //
  // $('.fantasynewsNBA').hide();
  // var qbfantasy = $('.qbfantasy');
  // var rbfantasy = $('.rbfantasy');
  // var wrfantasy = $('.wrfantasy');
  // var tefantasy = $('.tefantasy');
  // var kfantasy = $('.kfantasy');
  // var deffantasy = $('.deffantasy');
  //
  // rbfantasy.hide();
  // wrfantasy.hide();
  // tefantasy.hide();
  // kfantasy.hide();
  // deffantasy.hide();
  //
  // $('#FPNewsNBAButton').on('click', function(){
  //   $('.fantasynewsNFL').hide();
  //   $('.fantasynewsNBA').show();
  // });
  // $('#FPNewsNFLButton').on('click', function(){
  //   $('.fantasynewsNBA').hide();
  //   $('.fantasynewsNFL').show();
  // });
  //
  // $("#qbLink").on('click', function(e){
  //   e.preventDefault();
  //   rbfantasy.hide();
  //   wrfantasy.hide();
  //   tefantasy.hide();
  //   kfantasy.hide();
  //   deffantasy.hide();
  //   qbfantasy.show();
  // });
  //
  // $("#rbLink").on('click', function(e){
  //   e.preventDefault();
  //   qbfantasy.hide();
  //   wrfantasy.hide();
  //   tefantasy.hide();
  //   kfantasy.hide();
  //   deffantasy.hide();
  //   rbfantasy.show();
  // });
  //
  // $("#wrLink").on('click', function(e){
  //   e.preventDefault();
  //   qbfantasy.hide();
  //   rbfantasy.hide();
  //   tefantasy.hide();
  //   kfantasy.hide();
  //   deffantasy.hide();
  //   wrfantasy.show();
  // });
  //
  // $("#teLink").on('click', function(e){
  //   e.preventDefault();
  //   qbfantasy.hide();
  //   wrfantasy.hide();
  //   rbfantasy.hide();
  //   kfantasy.hide();
  //   deffantasy.hide();
  //   tefantasy.show();
  // });
  //
  // $("#kLink").on('click', function(e){
  //   e.preventDefault();
  //   qbfantasy.hide();
  //   wrfantasy.hide();
  //   tefantasy.hide();
  //   rbfantasy.hide();
  //   deffantasy.hide();
  //   kfantasy.show();
  // });
  //
  // $("#defLink").on('click', function(e){
  //   e.preventDefault();
  //   qbfantasy.hide();
  //   wrfantasy.hide();
  //   tefantasy.hide();
  //   kfantasy.hide();
  //   rbfantasy.hide();
  //   deffantasy.show();
  // });
});
