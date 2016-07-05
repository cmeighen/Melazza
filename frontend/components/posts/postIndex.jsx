const React = require('react');
const hashHistory = require('react-router').hashHistory;
const UserActions = require('../../actions/userActions');
const PostStore = require('../../stores/postStore');
const PostActions = require('../../actions/postActions');


const Button = require('react-bootstrap').Button;
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;

const ListGroup = require('react-bootstrap').ListGroup;
const ListGroupItem = require('react-bootstrap').ListGroupItem;

const PostIndex = React.createClass({
  getInitialState() {
    return {
      posts: [],
    };
  },
  componentDidMount() {
    this.postStoreListener = PostStore.addListener(this._onChange);
    PostActions.fetchPosts();
  },

  componentWillUnmount() {
    this.postStoreListener.remove();
  },

  _onChange() {
    this.setState({ posts: PostStore.all() });
  },

  render() {
    const posts = this.state.posts;
    function handleSelect(postId) {
      hashHistory.push("/class/posts/" + postId);
    }

    return (
      <div className="post-index">
        <Nav bsStyle="pills" stacked onSelect={handleSelect}>
          {
            posts.map( post => {
              return (
                <NavItem key={post.id} eventKey={post.id}>
                  <div className='post-item-title'>{post.title}</div>
                </NavItem>);
            })
          }
        </Nav>
      </div>
    );
  }
});

module.exports = PostIndex;
