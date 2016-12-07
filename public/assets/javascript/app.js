$(document).ready(function(){
  // function colorCodeGreaterThan (nthchild, string,color, colorValue, colorValue2) {
  //   $("td").css("background-color", "white");
  //   $(nthchild).each (function () {
  //      var $cCell = $(this);
  //      if ($cCell.text()  >= string) {
  //         $cCell.css(color, colorValue);
  //      } else {
  //        $cCell.css(color, colorValue2)
  //      }
  //   });
  // }

  function colorCodeString () {
    $("td").css("background-color", "white");
    $("td:nth-child(3)").each (function () {
       var $cCell = $(this);
       if ( $cCell.text() === 'H') {
          $cCell.css('background-color', '#9bdaf2');
       } else {
         $cCell.css('background-color', '#115f7e')
       }
    });
    $("td:nth-child(9)").each (function () {
       var $cCell = $(this);
       if ( $cCell.text() >= 33) {
          $cCell.css('background-color', '#9bdaf2');
       } else if (($cCell.text() >= 29) && ($cCell.text() <= 32.999)){
         $cCell.css('background-color', '#45b9e7');
       } else if (($cCell.text() >= 25) && ($cCell.text() <= 28.999)){
         $cCell.css('background-color', '#1a93c3');
       } else if (($cCell.text() >= 20) && ($cCell.text() <= 24.999)){
         $cCell.css('background-color', '#115f7e');
         $cCell.css('color', 'white');
       } else {
         $cCell.css('background-color', '#0a384a');
         $cCell.css('color', 'white');
       }
    });
    // $("td:nth-child(11)").each (function () {
    //    var $cCell = $(this);
    //    console.log($cCell);
    //    var parsing = parseInt($cCell);
    //    console.log(parsing);
    //    if ( $cCell.text() >= "33.00%") {

    //    } else if (($cCell.text() >= "29.00%") && ($cCell.text() <= "32.999%")){

    //    } else if (($cCell.text() >= "25.00%") && ($cCell.text() <= "28.999%")){

    //    } else if (($cCell.text() >= "20.00%") && ($cCell.text() <= "24.999%")){

    //    } else if (($cCell.text() >= "0%") && ($cCell.text() <= "19.999%")){

    //    }
    // });
    $("td:nth-child(13)").each (function () {
       var $cCell = $(this);
       var cCellParse = parseFloat($cCell.text())
       if ( $cCell.text() >= 1.3 ) {
          $cCell.css('background-color', '#9bdaf2');
       } else if (($cCell.text() >= 1.00) && ($cCell.text() <= 1.29)) {
          $cCell.css('background-color', '#45b9e7');
       } else if (($cCell.text() >= .85) && ($cCell.text() <= .9999)) {
          $cCell.css('background-color', '#1a93c3');
       } else if (($cCell.text() >= .80) && ($cCell.text() <= .8499)) {
          $cCell.css('background-color', '#115f7e');
          $cCell.css('color', 'white');
       } else if (($cCell.text() >= 0) && ($cCell.text() <= .7999)) {
          $cCell.css('background-color', '#0a384a');
          $cCell.css('color', 'white');
       } else {
          $cCell.css('background-color', '#0a384a');
          $cCell.css('color', 'white');
       }
    });
    $("td:nth-child(14)").each (function () {
       var $cCell = $(this);
       var cCellParse = parseFloat($cCell.text())
       if ( $cCell.text() >= 1.1 ) {
         $cCell.css('background-color', '#9bdaf2');
       } else if (($cCell.text() >= .97) && ($cCell.text() <= 1.099)) {
         $cCell.css('background-color', '#45b9e7');
       } else if (($cCell.text() >= .89) && ($cCell.text() <= .9699)) {
         $cCell.css('background-color', '#1a93c3');
       } else if (($cCell.text() >= .85) && ($cCell.text() <= .8899)) {
         $cCell.css('background-color', '#0a384a');
         $cCell.css('color', 'white');
       } else if (($cCell.text() >= 0) && ($cCell.text() <= .8499) || ($cCell.text() = '-')) {
         $cCell.css('background-color', '#0a384a');
         $cCell.css('color', 'white');
       } else {
         $cCell.css('background-color', '#0a384a');
         $cCell.css('color', 'white');
       }
    });

    $("td:nth-child(15)").each (function () {
       var $cCell = $(this);
       var cCellParse = parseFloat($cCell.text())
       if ( $cCell.text() >= 105 ) {
         $cCell.css('background-color', '#9bdaf2');
       } else if (($cCell.text() >= 100) && ($cCell.text() <= 104.99)) {
         $cCell.css('background-color', '#45b9e7');
       } else if (($cCell.text() >= 94) && ($cCell.text() <= 99.99)) {
         $cCell.css('background-color', '#1a93c3');
       } else if (($cCell.text() >= 90) && ($cCell.text() <= 93.99)) {
         $cCell.css('background-color', '#0a384a');
         $cCell.css('color', 'white');
       } else if (($cCell.text() >= 0) && ($cCell.text() <= 89.99) || (varDataCell = '-')) {
         $cCell.css('background-color', '#0a384a');
         $cCell.css('color', 'white');
       } else {
         $cCell.css('background-color', '#0a384a');
         $cCell.css('color', 'white');
       }
    });
    $("td:nth-child(16)").each (function () {
       var $cCell = $(this);
       var cCellParse = parseFloat($cCell.text())
       if ( $cCell.text() >= 210 ) {
          $cCell.css('background-color', '#9bdaf2');
        } else if (($cCell.text() >= 200) && ($cCell.text() <= 209.99)) {
          $cCell.css('background-color', '#45b9e7');
        } else if (($cCell.text() >= 195) && ($cCell.text() <= 199.99)) {
          $cCell.css('background-color', '#1a93c3');
        } else if (($cCell.text() >= 190) && ($cCell.text() <= 194.99)) {
          $cCell.css('background-color', '#0a384a');
          $cCell.css('color', 'white');
        } else if (($cCell.text() >= 0) && ($cCell.text() <= 194.99) || ($cCell.text() = '-')) {
          $cCell.css('background-color', '#0a384a');
          $cCell.css('color', 'white');
        } else {
          $cCell.css('background-color', '#0a384a');
          $cCell.css('color', 'white');
       }
     });

    $("td:nth-child(22)").each (function () {
       var $cCell = $(this);
       if ( $cCell.text() >= 5) {
          $cCell.css('background-color', '#9bdaf2');
       } else {
         $cCell.css('background-color', '#115f7e')
       }
    });
  }
colorCodeString();
// $cCell.css('background-color', '#9bdaf2');
// $cCell.css('color', 'white');
// $cCell.css('background-color', '#45b9e7');
// $cCell.css('color', 'white');
// $cCell.css('background-color', '#1a93c3');
// $cCell.css('color', 'white');
// $cCell.css('background-color', '#115f7e');
// $cCell.css('color', 'white');
// $cCell.css('background-color', '#0a384a');
// $cCell.css('color', 'white');

  // var allCells = document.querySelectorAll("td");
  // for (var i = 0; i < allCells.length; ++i) {
  //     allCells[i].addEventListener("DOMCharacterDataModified", function () {
  //         updateColors();
  //     });
  // }


});


  $('.suggesteddivshow').hide();
  $('.suggestedbutton').on('click', function() {
      $('.suggesteddiv').hide();
      $('.suggesteddivshow').show();
  });
  $('.closesuggested').on('click', function() {
      $(".suggesteddivshow").hide();
      $('.suggesteddiv').show();
      return false;
  });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip({
        'selector': '',
        'placement': 'top',
        'container':'body'
      })
    });

//         "columnDefs": [
//           { className: "playername", "targets": [ 0 ] },
//
//           { // targets suggestedplayers algorithm
//             "targets": 0,
//             "createdCell": function (td, cellData, rowData, row, col) {
//
//               var $cCell = $(td);
//               var varRowData = rowData;
//               var recentPerformance = rowData.gsx$recpr.$t;
//
//               if (((rowData.gsx$recpr.$t <= 10) || (rowData.gsx$recpr.$t == '-')) && (rowData.gsx$projmins.$t >= 27) && (rowData.gsx$useage.$t > "15.00%") && (rowData.gsx$criteriaranking.$t >= 5) && (rowData.gsx$delete.$t == 'Suggested') && (rowData.gsx$salaryadjust.$t <= 400)) {
//
//                 var playernames = rowData.gsx$player.$t;
//                 var playerposition = rowData.gsx$position.$t;
//                 var playercondition = rowData.gsx$condition.$t;
//                 var playerdetails = rowData.gsx$details.$t;
//                 var suggestedPlayersNBA = $('.suggestedPlayersNBA');
//                 if (playercondition == 'GTD') {
//                   suggestedPlayersNBA.append('<li>' + '(' + playerposition + ') ' + playernames + ' ' + '(GTD ' + playerdetails + ')' + '</li>');
//                 }
//                 if (playercondition == '-') {
//                   suggestedPlayersNBA.append('<li>' + '(' + playerposition + ') ' + playernames + ' ' + '(Playing)' + '</li>');
//                 }
//                 if (playercondition == 'O') {
//                   suggestedPlayersNBA.append('<li>' + '(' + playerposition + ') ' + playernames + ' ' + '(OUT ' + playerdetails + ')' + '</li>');
//                 }
//               }
//             }
//           },

//           { // targets 11
//             "targets": 11,
//             "createdCell": function (td, cellData, rowData, row, col) {
//               var $cCell = $(td);
//               var varDataCell = cellData;
//               if ( varDataCell >= 1.3 ) {
//                 $cCell.css('background-color', 'lightgreen')
//               } else if ((varDataCell >= 1.00) && (varDataCell <= 1.29)) {
//                 $cCell.css('background-color', 'yellow')
//               } else if ((varDataCell >= .85) && (varDataCell <= .9999)) {
//                 $cCell.css('background-color', '#FFBD00')
//               } else if ((varDataCell >= .80) && (varDataCell <= .8499)) {
//                 $cCell.css('background-color', '#FF8700')
//               } else if ((varDataCell >= 0) && (varDataCell <= .7999) || (varDataCell = '-')) {
//                 $cCell.css('background-color', 'red')
//               }
//             }
//           },
//           { // targets 12
//             "targets": 12,
//             "createdCell": function (td, cellData, rowData, row, col) {
//               var $cCell = $(td);
//               var varDataCell = cellData;
//               if ( varDataCell >= 1.1 ) {
//                 $cCell.css('background-color', 'lightgreen')
//               } else if ((varDataCell >= .97) && (varDataCell <= 1.099)) {
//                 $cCell.css('background-color', 'yellow')
//               } else if ((varDataCell >= .89) && (varDataCell <= .9699)) {
//                 $cCell.css('background-color', '#FFBD00')
//               } else if ((varDataCell >= .85) && (varDataCell <= .8899)) {
//                 $cCell.css('background-color', '#FF8700')
//               } else if ((varDataCell >= 0) && (varDataCell <= .8499) || (varDataCell = '-')) {
//                 $cCell.css('background-color', 'red')
//               }
//             }
//           },
//           { // targets 13
//             "targets": 13,
//             "createdCell": function (td, cellData, rowData, row, col) {
//               var $cCell = $(td);
//               var varDataCell = cellData;
//               if ( varDataCell >= 105 ) {
//                 $cCell.css('background-color', 'lightgreen')
//               } else if ((varDataCell >= 100) && (varDataCell <= 104.99)) {
//                 $cCell.css('background-color', 'yellow')
//               } else if ((varDataCell >= 94) && (varDataCell <= 99.99)) {
//                 $cCell.css('background-color', '#FFBD00')
//               } else if ((varDataCell >= 90) && (varDataCell <= 93.99)) {
//                 $cCell.css('background-color', '#FF8700')
//               } else if ((varDataCell >= 0) && (varDataCell <= 89.99) || (varDataCell = '-')) {
//                 $cCell.css('background-color', 'red')
//               }
//             }
//           },
//           { // targets 14
//             "targets": 14,
//             "createdCell": function (td, cellData, rowData, row, col) {
//               var $cCell = $(td);
//               var varDataCell = cellData;
//               if ( varDataCell >= 210 ) {
//                 $cCell.css('background-color', 'lightgreen')
//               } else if ((varDataCell >= 200) && (varDataCell <= 209.99)) {
//                 $cCell.css('background-color', 'yellow')
//               } else if ((varDataCell >= 195) && (varDataCell <= 199.99)) {
//                 $cCell.css('background-color', '#FFBD00')
//               } else if ((varDataCell >= 190) && (varDataCell <= 194.99)) {
//                 $cCell.css('background-color', '#FF8700')
//               } else if ((varDataCell >= 0) && (varDataCell <= 194.99) || (varDataCell = '-')) {
//                 $cCell.css('background-color', 'red')
//               }
//             }
//           },
//           { // targets 16
//             "targets": 16,
//             "createdCell": function (td, cellData, rowData, row, col) {
//               var $cCell = $(td);
//               var varDataCell = cellData;
//               if ( varDataCell >= 5.00 ) {
//                 $cCell.css('background-color', 'lightgreen')
//               } else if ((varDataCell >= 4.5) && (varDataCell <= 4.99)) {
//                 $cCell.css('background-color', 'yellow')
//               } else if ((varDataCell >= 4.0) && (varDataCell <= 4.499)) {
//                 $cCell.css('background-color', '#FFBD00')
//               } else if ((varDataCell >= 3.5) && (varDataCell <= 3.99)) {
//                 $cCell.css('background-color', '#FF8700')
//               } else if ((varDataCell >= 0) && (varDataCell <= 3.499) || (varDataCell = '-')) {
//                 $cCell.css('background-color', 'red')
//               }
//             }
//           },
//           { // targets 17
//             "targets": 17,
//             "createdCell": function (td, cellData, rowData, row, col) {
//               var $cCell = $(td);
//               var varDataCell = cellData;
//               if (( varDataCell <= 400 )|| (varDataCell == '-')) {
//                 $cCell.css('background-color', 'lightgreen')
//               } else {
//                 $cCell.css('background-color', 'red')
//               }
//             }
//           },
//           { // targets 18
//             "targets": 18,
//             "createdCell": function (td, cellData, rowData, row, col) {
//               var $cCell = $(td);
//               var varDataCell = cellData;
//               if (( varDataCell <= 10 ) || (varDataCell == '-')) {
//                 $cCell.css('background-color', 'lightgreen')
//               } else {
//                 $cCell.css('background-color', 'red')
//               }
//             }
//           },
//           { // targets 19
//             "targets": 19,
//             "createdCell": function (td, cellData, rowData, row, col) {
//               var $cCell = $(td);
//               var varDataCell = cellData;
//               if ( varDataCell >= 40.00 ) {
//                 $cCell.css('background-color', 'lightgreen')
//               } else if ((varDataCell >= 33) && (varDataCell <= 39.99)) {
//                 $cCell.css('background-color', 'yellow')
//               } else if ((varDataCell >= 25) && (varDataCell <= 32.99)) {
//                 $cCell.css('background-color', '#FFBD00')
//               } else if ((varDataCell >= 20) && (varDataCell <= 24.99)) {
//                 $cCell.css('background-color', '#FF8700')
//               } else if ((varDataCell >= 0) && (varDataCell <= 19.99) || (varDataCell = '-')) {
//                 $cCell.css('background-color', 'red')
//               }
//             }
//           },
//           { // targets 20
//             "targets": 20,
//             "createdCell": function (td, cellData, rowData, row, col) {
//               var $cCell = $(td);
//               var varDataCell = cellData;
//               if ( varDataCell >= 5 ) {
//                 $cCell.css('background-color', 'lightgreen')
//               } else {
//                 $cCell.css('background-color', 'red')
//               }
//             }
//           }
//         ]
//
//     });
//   }
//   nbatable();
//   nbaFilterPosition();
