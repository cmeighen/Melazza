//System Setup
const React = require("react");
const ReactDOM = require("react-dom");
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const Link = require('react-router').Link;
const HashHistory = require('react-router').hashHistory;
//Components
const Nav = require('./components/nav');
const Modal = require('react-modal');

const appRouter = (
    <Router history={ HashHistory }>
      <Route path="/" component={ Nav }>
        
      </Route>
    </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(appRouter, document.getElementById('root')
  );
});
