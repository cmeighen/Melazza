const React = require('react');
const Nav = require('./nav');
const PostIndex = require('./posts/postIndex');

var ClassRoom = React.createClass({


  render: function() {

    return (
      <div>
        <Nav />
        <div className="classroom">
          <PostIndex />
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = ClassRoom;
