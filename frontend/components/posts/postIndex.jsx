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
    hashHistory.push("/posts/" + postId);
  },

  openPostForm(){
    this.setState({ showPostFormModal: true });
  },

  closePostForm(){
    this.setState({ showPostFormModal: false });
  },

  render() {
    const posts = this.state.posts;
    let postList = posts.map( post => {
      return(
        <li key={post.id} onClick={this.handleSelect.bind(this, post.id)}>
          <div className='post-item-title'>{post.title}</div>
          <div className='post-item-short'>{post.body}</div>
        </li>
      );
    });

    return (
      <div className="post-index">
        <div className="post-index-header">
          <a className="new-post-btn" onClick={this.openPostForm}><span>New Post</span></a>
          <Modal show={this.state.showPostFormModal} onHide={this.closePostForm}>
            <Modal.Header closeButton>
              <Modal.Title>New Post</Modal.Title>
              <PostForm close={this.closePostForm}/>
            </Modal.Header>
          </Modal>
        </div>
        <ul className="post-index-list">
          {postList}
        </ul>
      </div>
    );
  }
});

module.exports = PostIndex;
