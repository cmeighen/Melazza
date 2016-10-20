const React = require('react');
const PostStore = require('../../stores/postStore');
const PostActions = require('../../actions/postActions');
const UserStore = require('../../stores/userStore');
const UserActions = require('../../actions/userActions');

const StudentAnswer = require('./postStudentAnswer');
const CommentIndex = require('./commentIndex');
const CommentForm = require('./commentForm');
const PostForm = require('./postForm');

const Modal = require('react-bootstrap').Modal;
const Panel = require('react-bootstrap').Panel;
const Button = require('react-bootstrap').Button;
const Well = require('react-bootstrap').Well;

const PostDetail = React.createClass({
  getInitialState: function(){
    return {
      currentUser: '',
      post: '',
      showPostFormModal: false
    };
  },

  componentDidMount: function(){
    this.postStoreListener = PostStore.addListener(this._onPostChange);
    this.userStoreListener = UserStore.addListener(this._onUserChange);
    PostActions.getPost(this.props.params.postId);
  },

  componentWillReceiveProps: function(nextProps){
    PostActions.getPost(nextProps.params.postId);
  },

  componentWillUnmount: function(){
    this.postStoreListener.remove();
  },

  _onPostChange() {
    this.setState({ post: PostStore.find(this.props.params.postId)});
  },

  _onUserChange() {
    this.setState({ currentUser: UserStore.currentUser()});
  },

  openPostForm(){
    this.setState({ showPostFormModal: true });
  },

  closePostForm(){
    this.setState({ showPostFormModal: false });
  },

  render: function(){
    let answers;
    if (this.state.post && this.state.post.answers) {
      answers = this.state.post.answers;
    }

    let editPost;
    
    if (this.state.currentUser && this.state.currentUser.id === this.state.post.author_id) {
        editPost = (
          <div>
            <Button bsStyle="primary" bsSize="large" block onClick={this.openPostForm}>Edit Post</Button>
              <Modal show={this.state.showPostFormModal} onHide={this.closePostForm}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Post</Modal.Title>
                  <PostForm close={this.closePostForm} subType="update" post={this.state.post}/>
                </Modal.Header>
              </Modal>
          </div>
        );
      }

    let postedBy = "Posted by: " + this.state.post.username;

    return(
      <div className="post-container clear">
        <div className="post-details">
          <Panel header="Question" id="post-details">
            <h5>Description</h5>
            <Well bsSize="small">{this.state.post.title}</Well>
            <h5>Full Question</h5>
            <Well bsSize="large">{this.state.post.body}</Well>
            {postedBy}
            {editPost}
          </Panel>
        </div>
        <StudentAnswer answers={answers} postId={this.props.params.postId} />
        <div className="post-discussion">
          <Panel header="Discussion">
            <CommentIndex comments={this.state.post.comments}/>
            <CommentForm postId={this.props.params.postId} />
          </Panel>
        </div>
      </div>
    );
  }
});

module.exports = PostDetail;
