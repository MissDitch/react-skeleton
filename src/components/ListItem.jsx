var React = require('react');  //node syntax to import the react module

//version 15.4 and below
// var ListItem = React.createClass({

// after version 15.5
var createReactClass = require('create-react-class');

var ListItem = createReactClass({
    render: function() {
      return (
        <li>
          <h2>{this.props.ingredient}</h2>
        </li>
      );  //this is the jsx that react provides to us
    }
});

module.exports = ListItem;
