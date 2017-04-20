var React = require('react');





var TilesBox = React.createClass({

  render: function(){
    var board = this.props.board
    console.log(board);

    var gameBoard = board.map(function(tile, index){
      return(
        <img 
        id={tile.Number} 
        key={tile.Number}  
        index={tile.Number} 
        onClick={this.props.changeImage}
        alt=""
        src={tile.src}
        width="200px"
        length="200px"
        />
        )
    }.bind(this))

    return(
      <div>
      {gameBoard}
      </div>
      )
  }
});


module.exports = TilesBox;


