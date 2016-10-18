const React = require('react');

const UserActions = require('../actions/userActions');
const UserStore = require('../stores/userStore');

const Nav = require('./nav');
const PostIndex = require('./posts/postIndex');

var App = React.createClass({
  getInitialState() {
    return {
      currentUser: {}
    };
  },

  componentDidMount() {
    this.listener = UserStore.addListener(this._updateCurrentUser);
    UserActions.fetchCurrentUser();
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _updateCurrentUser() {
    this.setState({currentUser: UserStore.currentUser()});
  },

  render: function() {
    return (
      <div>
        <Nav currentUser={this.state.currentUser}/>
        <div className="classroom">
          <PostIndex />
          <div className="class-child-container">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;


// <PostIndex />
// {this.props.children}
