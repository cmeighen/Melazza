const React = require('react');
const PostStore = require('../stores/postStore');
const UserStore = require('../stores/userStore');
const PostActions = require('../actions/postActions');
const PostIndexItem = require('./postListItem');
const PostForm = require('./postForm');

const Modal = require('boron/FlyModal');

const PostIndex = React.createClass({

  showModal: function() {
    this.refs.modal.show();
  },

  hideModal: function() {
    this.refs.modal.hide();
  },

  getInitialState: function(){
    return {
      posts: PostStore.all(),
      currentUser: UserStore.currentUser()
    };
  },

  componentDidMount: function(){
    this.postStoreListener = PostStore.addListener(this.__onPostChange);
    this.userStoreListener = UserStore.addListener(this.__onPostChange);
    PostActions.fetchPosts();
  },

  __onPostsChange: function() {
      this.setState({posts: PostStore.all()});
  },

  _onUserChange: function() {
    this.setState({user: UserStore.currentUser()});
  },

  componentWillUnmount: function(){
    this.postStoreListener.remove();
    this.userStoreListener.remove();
  },

  render: function() {
    const postIndexList = this.state.posts.map(function(post){
      return <PostIndexItem key={post.id} post={post}/>;
    });

    return (
      <div className='post-container'>

        <div className='post-container-nav'>
          <div className='post-container-nav-options'>
          </div>
        </div>

        <Modal className='modal-post-form' ref='modal'>
          <PostForm />
        </Modal>

        <div className='post-container-bar'>
          <span className='post-container-new-form'
            onClick={this.showModal}>
            New Post
          </span>
          <span className='post-container-search'>
            Placeholder
          </span>
        </div>

        <ul className='post-container-index'>
          {postIndexList}
        </ul>
      </div>
    );
  }

});


module.exports = PostIndex;
