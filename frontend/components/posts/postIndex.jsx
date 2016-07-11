const React = require('react');
const hashHistory = require('react-router').hashHistory;
const PostStore = require('../../stores/postStore');
const PostActions = require('../../actions/postActions');

const Button = require('react-bootstrap').Button;
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;
const ListGroup = require('react-bootstrap').ListGroup;
const ListGroupItem = require('react-bootstrap').ListGroupItem;
const Modal = require('react-bootstrap').Modal;
const FormControl = require('react-bootstrap').FormControl;
const PostForm = require('./postForm');


const PostIndex = React.createClass({
  getInitialState() {
    return {
      posts: [],
      showPostFormModal: false
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

  handleSelect(postId) {
    hashHistory.push("/class/posts/" + postId);
    PostActions.getPost(postId);
  },

  openPostForm(){
    this.setState({ showPostFormModal: true });
  },

  closePostForm(){
    this.setState({ showPostFormModal: false });
  },

  render() {
    const posts = this.state.posts;

    return (
      <div className="post-index">
        <div className="post-index-header">
          <Button bsStyle="primary" onClick={this.openPostForm}>New Post</Button>
          <Modal show={this.state.showPostFormModal} onHide={this.closePostForm}>
            <Modal.Header closeButton>
              <Modal.Title>New Post</Modal.Title>
              <PostForm close={this.closePostForm}/>
            </Modal.Header>
          </Modal>
          <FormControl type="text" value="" placeholder="Search Not Implemented" />
        </div>
        <Nav id="nav-post-index" bsStyle="pills" stacked onSelect={this.handleSelect}>
          {
            posts.map( post => {
              return (
                <NavItem id='post-item' key={post.id} eventKey={post.id}>
                  <div className='post-item-title'>{post.title}</div>
                  <div className='post-item-short'>{post.body}</div>
                </NavItem>);
            })
          }
        </Nav>
      </div>
    );
  }
});

module.exports = PostIndex;
