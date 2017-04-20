var React = require('react');
var TilesBox = require('./TilesBox.jsx');
var tiles = require('../sample_data.js');
var gameBoard = require('../game_board.js');




var GameBox = React.createClass({
  getInitialState: function() {
    return { gamesBoard: tiles, Player1: "", Player2: "", inPlay: "Player2"  }
  },
  



    changeImage: function(e){

      var board = this.state.gamesBoard;
      var target = e.target;
      var player = this.state.inPlay;
      console.log(board);
      console.log(target);

      if(player === "Player1"){

      var tiles = board.map(function(tile){
        console.log(tile[Number]);
        console.log(e.target.id);
        if(tile.Number === e.target.id){
          console.log("is equal");
          tile.src ="./images/crosses.png";
        }
      })
      this.setState( { gameboard: tiles } );
    }

      if(player === "Player2"){

      var tiles = board.map(function(tile){
        console.log(tile[Number]);
        console.log(e.target.id);
        if(tile.Number === e.target.id){
          console.log("is equal");
          tile.src ="./images/naughts.png";
        }
      })
      this.setState( { gameboard: tiles } );
    }
    },

    setPlayer1Turn(){
      this.setState( {inPlay: "Player1"})
    },

    setPlayer2Turn(){
      this.setState( {inPlay: "Player2"})
    },

    gameLoop: function(){
      setPlayer1Turn();
      promptPlayer(1);
      setPlayer2Turn();
      promptPlayer(2);
      checkWin();
    }


      






  render: function() {
    return (
      <div className="GameBox">
        <h1 id="title">Tic-Tac-Toe</h1>

        <div className="TilesBox">
        <TilesBox 
        board={this.state.gamesBoard}
        changeImage={this.changeImage}
        />
        </div>


      </div>
    );
  }
});

  module.exports = GameBox;

  

