const React = require('react');
const PostStore = require('../../stores/postStore');

const Panel = require('react-bootstrap').Panel;

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

    return(
      <div>
        <div className="post-summary">
          <Panel header="Post Details">
            <h5>Summary</h5>
            {this.state.post.title}
            <h5>Body</h5>
            {this.state.post.body}
          </Panel>
        </div>
        <div className="post-answer">
          <Panel header="Student Answer">
            Reserved Space for Student Answer
          </Panel>
        </div>
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
