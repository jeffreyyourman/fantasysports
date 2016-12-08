$(document).ready(function(){
  $('.suggesteddivshow').hide();
  $('.suggestedbutton').click(function() {
      $('.suggesteddiv').hide();
      $('.suggesteddivshow').show();
  });
  $('.closesuggested').click(function() {
      $(".suggesteddivshow").hide();
      $('.suggesteddiv').show();
      return false;
  });
  function colorCodeString () {
    // $("td").css("background-color", "white");
    // $("td:nth-child(3)").each (function () {
    //    var $cCell = $(this);
    //    if ( $cCell.text() === 6000) {
    //       $cCell.css('background-color', '#9bdaf2');
    //    } else {
    //      $cCell.css('background-color', '#0a384a');
    //      $cCell.css('color', 'white');
    //    }
    // });
    // $("td:nth-child(9)").each (function () {
    //    var $cCell = $(this);
    //    if ( $cCell.text() >= 33) {
    //       $cCell.css('background-color', '#9bdaf2');
    //    } else if (($cCell.text() >= 29) && ($cCell.text() <= 32.999)){
    //      $cCell.css('background-color', '#45b9e7');
    //    } else if (($cCell.text() >= 25) && ($cCell.text() <= 28.999)){
    //      $cCell.css('background-color', '#1a93c3');
    //    } else if (($cCell.text() >= 20) && ($cCell.text() <= 24.999)){
    //      $cCell.css('background-color', '#115f7e');
    //      $cCell.css('color', 'white');
    //    } else {
    //      $cCell.css('background-color', '#0a384a');
    //      $cCell.css('color', 'white');
    //    }
    // });
    // // $("td:nth-child(11)").each (function () {
    // //    var $cCell = $(this);
    // //    console.log($cCell);
    // //    var parsing = parseInt($cCell);
    // //    console.log(parsing);
    // //    if ( $cCell.text() >= "33.00%") {
    //
    // //    } else if (($cCell.text() >= "29.00%") && ($cCell.text() <= "32.999%")){
    //
    // //    } else if (($cCell.text() >= "25.00%") && ($cCell.text() <= "28.999%")){
    //
    // //    } else if (($cCell.text() >= "20.00%") && ($cCell.text() <= "24.999%")){
    //
    // //    } else if (($cCell.text() >= "0%") && ($cCell.text() <= "19.999%")){
    //
    // //    }
    // // });
    // $("td:nth-child(13)").each (function () {
    //    var $cCell = $(this);
    //    var cCellParse = parseFloat($cCell.text())
    //    if ( $cCell.text() >= 1.3 ) {
    //       $cCell.css('background-color', '#9bdaf2');
    //    } else if (($cCell.text() >= 1.00) && ($cCell.text() <= 1.29)) {
    //       $cCell.css('background-color', '#45b9e7');
    //    } else if (($cCell.text() >= .85) && ($cCell.text() <= .9999)) {
    //       $cCell.css('background-color', '#1a93c3');
    //    } else if (($cCell.text() >= .80) && ($cCell.text() <= .8499)) {
    //       $cCell.css('background-color', '#115f7e');
    //       $cCell.css('color', 'white');
    //    } else if (($cCell.text() >= 0) && ($cCell.text() <= .7999)) {
    //       $cCell.css('background-color', '#0a384a');
    //       $cCell.css('color', 'white');
    //    } else {
    //       $cCell.css('background-color', '#0a384a');
    //       $cCell.css('color', 'white');
    //    }
    // });
    // $("td:nth-child(14)").each (function () {
    //    var $cCell = $(this);
    //    var cCellParse = parseFloat($cCell.text())
    //    if ( $cCell.text() >= 1.1 ) {
    //      $cCell.css('background-color', '#9bdaf2');
    //    } else if (($cCell.text() >= .97) && ($cCell.text() <= 1.099)) {
    //      $cCell.css('background-color', '#45b9e7');
    //    } else if (($cCell.text() >= .89) && ($cCell.text() <= .9699)) {
    //      $cCell.css('background-color', '#1a93c3');
    //    } else if (($cCell.text() >= .85) && ($cCell.text() <= .8899)) {
    //      $cCell.css('background-color', '#0a384a');
    //      $cCell.css('color', 'white');
    //    } else if (($cCell.text() >= 0) && ($cCell.text() <= .8499) || ($cCell.text() = '-')) {
    //      $cCell.css('background-color', '#0a384a');
    //      $cCell.css('color', 'white');
    //    } else {
    //      $cCell.css('background-color', '#0a384a');
    //      $cCell.css('color', 'white');
    //    }
    // });
    //
    // $("td:nth-child(15)").each (function () {
    //    var $cCell = $(this);
    //    var cCellParse = parseFloat($cCell.text())
    //    if ( $cCell.text() >= 105 ) {
    //      $cCell.css('background-color', '#9bdaf2');
    //    } else if (($cCell.text() >= 100) && ($cCell.text() <= 104.99)) {
    //      $cCell.css('background-color', '#45b9e7');
    //    } else if (($cCell.text() >= 94) && ($cCell.text() <= 99.99)) {
    //      $cCell.css('background-color', '#1a93c3');
    //    } else if (($cCell.text() >= 90) && ($cCell.text() <= 93.99)) {
    //      $cCell.css('background-color', '#0a384a');
    //      $cCell.css('color', 'white');
    //    } else if (($cCell.text() >= 0) && ($cCell.text() <= 89.99) || (varDataCell = '-')) {
    //      $cCell.css('background-color', '#0a384a');
    //      $cCell.css('color', 'white');
    //    } else {
    //      $cCell.css('background-color', '#0a384a');
    //      $cCell.css('color', 'white');
    //    }
    // });
    // $("td:nth-child(16)").each (function () {
    //    var $cCell = $(this);
    //    var cCellParse = parseFloat($cCell.text())
    //    if ( $cCell.text() >= 210 ) {
    //       $cCell.css('background-color', '#9bdaf2');
    //     } else if (($cCell.text() >= 200) && ($cCell.text() <= 209.99)) {
    //       $cCell.css('background-color', '#45b9e7');
    //     } else if (($cCell.text() >= 195) && ($cCell.text() <= 199.99)) {
    //       $cCell.css('background-color', '#1a93c3');
    //     } else if (($cCell.text() >= 190) && ($cCell.text() <= 194.99)) {
    //       $cCell.css('background-color', '#0a384a');
    //       $cCell.css('color', 'white');
    //     } else if (($cCell.text() >= 0) && ($cCell.text() <= 194.99) || ($cCell.text() = '-')) {
    //       $cCell.css('background-color', '#0a384a');
    //       $cCell.css('color', 'white');
    //     } else {
    //       $cCell.css('background-color', '#0a384a');
    //       $cCell.css('color', 'white');
    //    }
    //  });
    //  $("td:nth-child(19)").each (function () {
    //     var $cCell = $(this);
    //     var cCellParse = parseFloat($cCell.text())
    //     if ( $cCell.text() <= 400 ) {
    //        $cCell.css('background-color', '#9bdaf2');
    //      } else {
    //        $cCell.css('background-color', '#0a384a');
    //        $cCell.css('color', 'white');
    //      }
    //   });
      $("td:nth-child(15)").each (function () {
         var $cCell = $(this);
         var cCellParse = parseFloat($cCell.text())
         if ( $cCell.text() <= 400 ) {
           $cCell.css('background-color', '#9bdaf2');
         } else {
           $cCell.css('background-color', '#0a384a');
           $cCell.css('color', 'white');
         }
       });
     $("td:nth-child(16)").each (function () {
        var $cCell = $(this);
        var cCellParse = parseFloat($cCell.text())
        if ( $cCell.text() <= 10 ) {
          $cCell.css('background-color', '#9bdaf2');
        } else {
          $cCell.css('background-color', '#0a384a');
          $cCell.css('color', 'white');
        }
      });
    // $("td:nth-child(22)").each (function () {
    //    var $cCell = $(this);
    //    if ( $cCell.text() >= 5) {
    //       $cCell.css('background-color', '#9bdaf2');
    //    } else {
    //      $cCell.css('background-color', '#0a384a');
    //      $cCell.css('color', 'white');
    //    }
    // });
  }
  colorCodeString();
});

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


    // $(function () {
    //   $('[data-toggle="tooltip"]').tooltip({
    //     'selector': '',
    //     'placement': 'top',
    //     'container':'body'
    //   })
    // });
