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
  // function colorCodeString () {
  //   $("td").css("background-color", "white");
  //   $("td:nth-child(8)").each (function () {
  //      var $cCell = $(this);
  //         if ( $cCell.text() >= 21) {
  //            $cCell.css('background-color', '#9bdaf2');
  //         } else if (($cCell.text() >= 15) && ($cCell.text() <= 20.99)){
  //           $cCell.css('background-color', '#45b9e7');
  //         } else if (($cCell.text() >= 9) && ($cCell.text() <= 14.99)){
  //           $cCell.css('background-color', '#1a93c3');
  //         } else if (($cCell.text() >= 5) && ($cCell.text() <= 8.99)){
  //           $cCell.css('background-color', '#115f7e');
  //           $cCell.css('color', 'white');
  //         } else {
  //           $cCell.css('background-color', '#0a384a');
  //           $cCell.css('color', 'white');
  //         }
  //   });
  //   $("td:nth-child(10)").each (function () {
  //      var $cCell = $(this);
  //         if ( $cCell.text() >= .60) {
  //            $cCell.css('background-color', '#9bdaf2');
  //         } else if (($cCell.text() >= .40) && ($cCell.text() <= .599)){
  //           $cCell.css('background-color', '#45b9e7');
  //         } else if (($cCell.text() >= .20) && ($cCell.text() <= .399)){
  //           $cCell.css('background-color', '#1a93c3');
  //         } else if (($cCell.text() >= 0) && ($cCell.text() <= .199)){
  //           $cCell.css('background-color', '#115f7e');
  //           $cCell.css('color', 'white');
  //         } else {
  //           $cCell.css('background-color', '#0a384a');
  //           $cCell.css('color', 'white');
  //         }
  //   });
  //   $("td:nth-child(11)").each (function () {
  //      var $cCell = $(this);
  //         if ( $cCell.text() >= .60) {
  //            $cCell.css('background-color', '#9bdaf2');
  //         } else if (($cCell.text() >= .55) && ($cCell.text() <= .599)){
  //           $cCell.css('background-color', '#45b9e7');
  //         } else if (($cCell.text() >= .50) && ($cCell.text() <= .549)){
  //           $cCell.css('background-color', '#1a93c3');
  //         } else if (($cCell.text() >= .45) && ($cCell.text() <= .499)){
  //           $cCell.css('background-color', '#115f7e');
  //           $cCell.css('color', 'white');
  //         } else {
  //           $cCell.css('background-color', '#0a384a');
  //           $cCell.css('color', 'white');
  //         }
  //   });
  //   $("td:nth-child(12)").each (function () {
  //      var $cCell = $(this);
  //      if ( $cCell.text() >= 49) {
  //         $cCell.css('background-color', '#9bdaf2');
  //      } else if (($cCell.text() >= 43) && ($cCell.text() <= 48.999)){
  //        $cCell.css('background-color', '#45b9e7');
  //      } else if (($cCell.text() >= 38) && ($cCell.text() <= 42.999)){
  //        $cCell.css('background-color', '#1a93c3');
  //      } else if (($cCell.text() >= 33) && ($cCell.text() <= 37.999)){
  //        $cCell.css('background-color', '#115f7e');
  //        $cCell.css('color', 'white');
  //      } else {
  //        $cCell.css('background-color', '#0a384a');
  //        $cCell.css('color', 'white');
  //      }
  //   });
  //   $("td:nth-child(13)").each (function () {
  //      var $cCell = $(this);
  //      if ( $cCell.text() >= 25) {
  //         $cCell.css('background-color', '#9bdaf2');
  //      } else if (($cCell.text() >= 17) && ($cCell.text() <= 24.999)){
  //        $cCell.css('background-color', '#45b9e7');
  //      } else if (($cCell.text() >= 10) && ($cCell.text() <= 16.999)){
  //        $cCell.css('background-color', '#1a93c3');
  //      } else if (($cCell.text() >= 5) && ($cCell.text() <= 9.999)){
  //        $cCell.css('background-color', '#115f7e');
  //        $cCell.css('color', 'white');
  //      } else {
  //        $cCell.css('background-color', '#0a384a');
  //        $cCell.css('color', 'white');
  //      }
  //   });
  //   $("td:nth-child(14)").each (function () {
  //      var $cCell = $(this);
  //      if ( $cCell.text() >= 20) {
  //        $cCell.css('background-color', '#0a384a');
  //        $cCell.css('color', 'white');
  //      } else if (($cCell.text() >= 15) && ($cCell.text() <= 19.999)){
  //        $cCell.css('background-color', '#115f7e');
  //        $cCell.css('color', 'white');
  //      } else if (($cCell.text() >= 11) && ($cCell.text() <= 14.999)){
  //        $cCell.css('background-color', '#1a93c3');
  //      } else if (($cCell.text() >= 5) && ($cCell.text() <= 10.999)){
  //        $cCell.css('background-color', '#45b9e7');
  //      } else {
  //        $cCell.css('background-color', '#9bdaf2');
  //      }
  //   });
  //   $("td:nth-child(15)").each (function () {
  //      var $cCell = $(this);
  //      if ( $cCell.text() >= 1.3) {
  //        $cCell.css('background-color', '#9bdaf2');
  //
  //      } else if (($cCell.text() >= 1.0) && ($cCell.text() <= 1.299)){
  //        $cCell.css('background-color', '#45b9e7');
  //      } else if (($cCell.text() >= .70) && ($cCell.text() <= .999)){
  //        $cCell.css('background-color', '#1a93c3');
  //      } else if (($cCell.text() >= .40) && ($cCell.text() <= 699)){
  //        $cCell.css('background-color', '#115f7e');
  //        $cCell.css('color', 'white');
  //      } else {
  //        $cCell.css('background-color', '#9bdaf2');
  //        $cCell.css('background-color', '#0a384a');
  //        $cCell.css('color', 'white');
  //      }
  //   });
  //     $("td:nth-child(17)").each (function () {
  //        var $cCell = $(this);
  //        var cCellParse = parseFloat($cCell.text())
  //        if ( $cCell.text() <= 400 ) {
  //          $cCell.css('background-color', '#9bdaf2');
  //        } else {
  //          $cCell.css('background-color', '#0a384a');
  //          $cCell.css('color', 'white');
  //        }
  //      });
  //    $("td:nth-child(18)").each (function () {
  //       var $cCell = $(this);
  //       var cCellParse = parseFloat($cCell.text())
  //       if ( $cCell.text() <= 10 ) {
  //         $cCell.css('background-color', '#9bdaf2');
  //       } else {
  //         $cCell.css('background-color', '#0a384a');
  //         $cCell.css('color', 'white');
  //       }
  //     });
  // }
  // colorCodeString();
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
