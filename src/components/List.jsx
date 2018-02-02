var React = require('react');
// after version 15.5
var createReactClass = require('create-react-class');

var ListItem = require('./ListItem.jsx'); // ./ is for importing non-npm modules

var ingredients = [{"id":1,"text":"ham"}, {"id":"2","text":"cheese"}, {"id":"3","text":"bread"}];

// var List = React.createClass({
var List = createReactClass({
  render: function() {
    var listItems = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />
    });

    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
