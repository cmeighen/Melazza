const React = require('react');
const Nav = require('./nav');
const PostIndex = require('./posts/postIndex');

var ClassRoom = React.createClass({


  render: function() {

    return (
      <div>
        <Nav />
        <PostIndex />
        {this.props.children}
      </div>
    );
  }
});

module.exports = ClassRoom;
