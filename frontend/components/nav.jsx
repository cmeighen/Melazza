const React = require('react');

const Navbar = require('react-bootstrap').Navbar;
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;
const Modal = require('react-bootstrap').Modal;



const hashHistory = require('react-router').hashHistory;

const UserActions = require('../actions/userActions');


const Navigation = React.createClass({

  getInitialState() {
    return {

    };
  },



  logoutUser(e) {
    e.preventDefault();
    UserActions.logoutUser();
    hashHistory.push('/');
  },

  render: function() {
    return (
      <Navbar id="nav-classroom" fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#/class" id="navbar-brand">collabright</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem onClick={this.logoutUser}>Log Out</NavItem>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = Navigation;
