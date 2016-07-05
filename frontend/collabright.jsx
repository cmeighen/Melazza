//System Setup
const React = require("react");
const ReactDOM = require("react-dom");
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
//Components
const UserStore = require('./stores/userStore');
const UserActions = require('./actions/userActions');
const PostStore = require('./stores/postStore');
const PostIndex = require('./components/posts/postIndex');
const PostDetail = require('./components/posts/postDetail');
const Modal = require('react-modal');
const Nav = require('./components/nav');
const ClassRoom = require('./components/classRoom');

const WelcomePage = require('./components/welcome');

window.hh = hashHistory;
window.ps = PostStore;


const App = React.createClass({
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

function _existingSession() {
  if (UserStore.loggedIn()) {
    hashHistory.push('class');
  }
}

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ WelcomePage } onEnter={ _existingSession }/>
      <Route path="class" component={ ClassRoom }>
          <Route path="posts/:postId" component={ PostDetail } />
      </Route>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  if (window.currentUser) {
  UserActions.receiveCurrentUser(window.currentUser);
}

  ReactDOM.render(
    appRouter,
    document.getElementById('root')
  );
});
