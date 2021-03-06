var myDataRef = new Firebase('https://worldclassbettinghelp.firebaseio.com/');
var chatData = new Firebase('https://worldclassbettinghelp.firebaseio.com/chat');
var playersRef = new Firebase('https://worldclassbettinghelp.firebaseio.com/players');
var currentTurnRef = new Firebase('https://worldclassbettinghelp.firebaseio.com/turn');

        $.ajax({url: "/willyDJ", method: "GET"})

          .always(function(response) {
            var passportUserName = response.displayName;
            console.log('log for inside', passportUserName);

var username = passportUserName;
var currentPlayers = null;
var currentTurn = null;
var playerNum = false;
var playerOneExists = false;
var playerTwoExists = false;
var playerOneData = null;
var playerTwoData = null;


//USERNAME LISTENERS
//Start button - takes username and tries to get user in game
$('#start').click(function() {
  if ($('#username').val() !== "") {
    username = capitalize($('#username').val());
    getInGame();
  }
});
//listener for 'enter' in username input
$('#username').keypress(function(e) {
  if (e.keyCode == 13 && $('#username').val() !== "") {
    username = capitalize($('#username').val());
    getInGame();
  }
});

//Function to capitalize usernames
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

//CHAT LISTENERS
//Chat send button listener, grabs input and pushes to firebase. (Firebase's push automatically creates a unique key)
$('#chatsend').click(function() {
  if ($('#chatinput').val() !== "") {
    var message = $('#chatinput').val();
    chatData.push({
      name: username,
      message: message,
      time: Firebase.ServerValue.TIMESTAMP,
      idNum: playerNum
    });
    $('#chatinput').val("");
  }
});

//Chatbox input listener
$('#chatinput').keypress(function(e) {
  if (e.keyCode == 13 && $('#chatinput').val() !== "") {
    var message = $('#chatinput').val();
    chatData.push({
      name: username,
      message: message,
      time: Firebase.ServerValue.TIMESTAMP,
      idNum: playerNum
    });
    $('#chatinput').val("");

  }
});

//Update chat on screen when new message detected - ordered by 'time' value
chatData.orderByChild("time").on('child_added', function(snapshot) {

  //if idNum is 0, then its a disconnect message and displays accordingly
  //if not - its a user chat message

  //here is where you would put date
  if (snapshot.val().idNum === 0) {
    $('#chatmessages').append('<p class=player' + snapshot.val().idNum + '><span>' + snapshot.val().name + '</span>' + ' ' + snapshot.val().message + '</p><hr>');
  } else {
    $('#chatmessages').append('<p class=player' + snapshot.val().idNum + '><span>' + snapshot.val().name + '</span>' + ':<br><br>' + snapshot.val().message + '</p><hr>');
  }
  //keeps div scrolled to bottom on each update.
  $('#chatmessages').scrollTop($("#chatmessages")[0].scrollHeight);
});

//tracks changes in key which contains player objects
playersRef.on('value', function(snapshot) {
  //length of the 'players' array
  currentPlayers = snapshot.numChildren();

  //check to see if players exist
  playerOneExists = snapshot.child('1').exists();
  playerTwoExists = snapshot.child('2').exists();

  //player data objects
  playerOneData = snapshot.child('1').val();
  playerTwoData = snapshot.child('2').val();

  //If theres a player 1, fill in name and win loss data
  if (playerOneExists) {
    $('#player1name').text(playerOneData.name);
    $('#player1wins').text("Wins: " + playerOneData.wins);
    $('#player1losses').text("Losses: " + playerOneData.losses);

  } else {
    //if there is no player 1, clear win/loss data and show waiting
    $('#player1name').text("Waiting for Player 1");
    $('#player1wins').empty();
    $('#player1losses').empty();
  }

  //if theres a player 2, fill in name and win/loss data
  if (playerTwoExists) {
    $('#player2name').text(playerTwoData.name);
    $('#player2wins').text("Wins: " + playerTwoData.wins);
    $('#player2losses').text("Losses: " + playerTwoData.losses);
  } else {
    //if no player 2, clear win/loss and show waiting
    $('#player2name').text("Waiting for Player 2");
    $('#player2wins').empty();
    $('#player2losses').empty();
  }
});



//Detects changes in current turn key
currentTurnRef.on('value', function(snapshot) {
  //gets current turn from snapshot
  currentTurn = snapshot.val();

  //dont do the following unless you're logged in
  if (playerNum) {
    //for turn 1
    if (currentTurn == 1) {

      //if its the current player's turn, tell them and show choices
      if (currentTurn == playerNum) {
        $('#currentturn').html('<h2>It\'s Your Turn!</h2>');
        $('#player' + playerNum + ' ul').append('<li>Rock</li><li>Paper</li><li>Scissors</li>');
      } else {

        //if it isnt the current players turn, tells them theyre waiting for player one
        $('#currentturn').html('<h2>Waiting for ' + playerOneData.name + ' to choose.</h2>');
      }

      //shows yellow border around active player
      $('#player1').css('border', '2px solid yellow');
      $('#player2').css('border', '1px solid black');
    } else if (currentTurn == 2) {

      //if its the current player's turn, tell them and show choices
      if (currentTurn == playerNum) {
        $('#currentturn').html('<h2>It\'s Your Turn!</h2>');
        $('#player' + playerNum + ' ul').append('<li>Rock</li><li>Paper</li><li>Scissors</li>');
      } else {
        //if it isnt the current players turn, tells them theyre waiting for player two
        $('#currentturn').html('<h2>Waiting for ' + playerTwoData.name + ' to choose.</h2>');
      }
      //shows yellow border around active player
      $('#player2').css('border', '2px solid yellow');
      $('#player1').css('border', '1px solid black');
    } else if (currentTurn == 3) {
      ///where the game win logic takes place then resets to turn 1
      gameLogic(playerOneData.choice, playerTwoData.choice);

      //reveal both player choices
      $('#player1chosen').html(playerOneData.choice);
      $('#player2chosen').html(playerTwoData.choice);

      // reset after timeout
      var moveOn = function() {
        $('#player1chosen').empty();
        $('#player2chosen').empty();
        $('#result').empty();

        //check to make sure players didnt leave before timeout
        if (playerOneExists && playerTwoExists) {
          currentTurnRef.set(1);
        }
      };

      // show results for 2 seconds, then resets
      setTimeout(moveOn, 2000);

    } else {
      // if (playerNum) {
      //   $('#player' + playerNum + ' ul').empty();
      // }
      $('#player1 ul').empty();
      $('#player2 ul').empty();

      $('#currentturn').html('<h2>Waiting for another player to join.</h2>');
      $('#player2').css('border', '1px solid black');
      $('#player1').css('border', '1px solid black');
    }
  }
});
//When a player joins, checks to see if there are two players now. If yes, then it will start the game.
playersRef.on('child_added', function(snapshot) {
  if (currentPlayers == 1) {

    //set turn to 1, which starts the game
    currentTurnRef.set(1);
  }
});
//Function to get in the game
function getInGame() {
  //For adding disconnects to the chat with a unique id (the date/time the user entered the game)
  //Needed because Firebase's '.push()' creates its unique keys client side, so you cant '.push()' in a '.onDisconnect'
  var chatDataDisc = new Firebase('https://worldclassbettinghelp.firebaseio.com/chat' + Date.now());


  //checks for current players, if theres a player one connected, then the user becomes player 2.
  //if there is no player one, then the user becomes player 1
  if (currentPlayers < 2) {
    if (playerOneExists) {
      playerNum = 2;
    } else {
      playerNum = 1;
    }

    //creates key based on assigned player number
    playerRef = new Firebase('https://worldclassbettinghelp.firebaseio.com/players' + playerNum);



    //creates player object. 'choice' is unnecessary here, but I left it in to be as complete as possible
    playerRef.set({
      name: username,
      wins: 0,
      losses: 0,
      choice: null
    });

    //on disconnect remove this user's player object
    playerRef.onDisconnect().remove();

    //if a user disconnects, set the current turn to 'null' so the game does not continue
    currentTurnRef.onDisconnect().remove();

    //send disconnect message to chat with Firebase server generated timestamp and id of '0' to denote system message
    chatDataDisc.onDisconnect().set({
      name: username,
      time: Firebase.ServerValue.TIMESTAMP,
      message: 'has disconnected.',
      idNum: 0
    });

    //Remove name input box and show current player number.
    $('#swapzone').html('<h2 style="color:#edb82a; font-size:15px;">Welcome ' + username + ' to DFS-PlayOffs!');

  } else {
    //if current players is '2', will not allow the player to join
    alert('Sorry, Game Full! Try Again Later!');
  }
}
})
