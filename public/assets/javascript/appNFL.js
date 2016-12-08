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
    $("td").css("background-color", "white");
    $("td:nth-child(8)").each (function () {
       var $cCell = $(this);
          if ( $cCell.text() >= 21) {
             $cCell.css('background-color', '#9bdaf2');
          } else if (($cCell.text() >= 15) && ($cCell.text() <= 20.99)){
            $cCell.css('background-color', '#45b9e7');
          } else if (($cCell.text() >= 9) && ($cCell.text() <= 14.99)){
            $cCell.css('background-color', '#1a93c3');
          } else if (($cCell.text() >= 5) && ($cCell.text() <= 8.99)){
            $cCell.css('background-color', '#115f7e');
            $cCell.css('color', 'white');
          } else {
            $cCell.css('background-color', '#0a384a');
            $cCell.css('color', 'white');
          }
    });
    $("td:nth-child(10)").each (function () {
       var $cCell = $(this);
       if ( $cCell.text() >= 49) {
          $cCell.css('background-color', '#9bdaf2');
       } else if (($cCell.text() >= 43) && ($cCell.text() <= 48.999)){
         $cCell.css('background-color', '#45b9e7');
       } else if (($cCell.text() >= 38) && ($cCell.text() <= 42.999)){
         $cCell.css('background-color', '#1a93c3');
       } else if (($cCell.text() >= 33) && ($cCell.text() <= 37.999)){
         $cCell.css('background-color', '#115f7e');
         $cCell.css('color', 'white');
       } else {
         $cCell.css('background-color', '#0a384a');
         $cCell.css('color', 'white');
       }
    });
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
