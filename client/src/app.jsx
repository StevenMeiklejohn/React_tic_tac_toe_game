var React = require('react');
var ReactDOM = require('react-dom');
var GameBox = require('./components/GameBox.jsx');
var TilesBox = require('./components/TilesBox.jsx')


window.onload = function(){
  ReactDOM.render( 
    <div>
      <GameBox />
    </div>,
    document.getElementById('app') 
  );
}


