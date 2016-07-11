const React = require('react');
const PostStore = require('../../stores/postStore');
const PostActions = require('../../actions/postActions');
const Modal = require('react-bootstrap').Modal;
const Panel = require('react-bootstrap').Panel;
const Button = require('react-bootstrap').Button;
const Well = require('react-bootstrap').Well;

const StudentAnswer = require('./postStudentAnswer');
const CommentIndex = require('./commentIndex');
const CommentForm = require('./commentForm');
const PostForm = require('./postForm');



const PostDetail = React.createClass({
  getInitialState: function(){
    return {
      post: PostStore.find(this.props.params.postId),
      showPostFormModal: false
    };
  },

  componentWillMount: function(){
    this.setState({
      post: PostStore.find(this.props.params.postId)
    });
  },

  componentDidMount: function(){
    this.postStoreListener = PostStore.addListener(this._onChange);
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({
      post: PostStore.find(nextProps.params.postId)
    });
  },

  componentWillUnmount: function(){
    this.postStoreListener.remove();
  },

  _onChange() {
    this.setState({ post: PostStore.find(this.props.params.postId)});
  },

  openPostForm(){
    this.setState({ showPostFormModal: true });
  },

  closePostForm(){
    this.setState({ showPostFormModal: false });
  },

  render: function(){
      let answers = this.state.post.answers;
      let editPost;
      if (window.currentUser.id === this.state.post.author_id || window.currentUser.user.id === this.state.post.author_id) {
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
      } else {
        editPost = (
          <div></div>
        );
      }

    return(
      <div className="post-container">
        <div className="post-details">
          <Panel header="Question" id="post-details">
            <h5>Description</h5>
            <Well bsSize="small">{this.state.post.title}</Well>
            <h5>Full Question</h5>
            <Well bsSize="large">{this.state.post.body}</Well>
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
