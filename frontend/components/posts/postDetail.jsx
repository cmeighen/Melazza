const React = require('react');
const PostStore = require('../../stores/postStore');
const PostActions = require('../../actions/postActions');
const Modal = require('react-bootstrap').Modal;
const Panel = require('react-bootstrap').Panel;

const StudentAnswer = require('./postStudentAnswer');

const PostDetail = React.createClass({
  getInitialState: function(){
    return {
      post: PostStore.find(this.props.params.postId)
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

  render: function(){
      let answers = this.state.post.answers;

    return(
      <div className="post-container">
        <div className="post-details">
          <Panel header="Post Details" id="post-details">
            <h5>Summary</h5>
            {this.state.post.title}
            <h5>Body</h5>
            {this.state.post.body}
          </Panel>
        </div>
        <StudentAnswer answers={answers} />
        <div className="post-discussion">
          <Panel header="Discussion">
            Reserved Space for Post Discussion
          </Panel>
        </div>
      </div>
    );
  }
});

module.exports = PostDetail;
