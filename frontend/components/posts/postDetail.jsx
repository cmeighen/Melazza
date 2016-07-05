const React = require('react');
const ReactDOM = require('react-dom');

const PostStore = require('../../stores/postStore');

const Jumbotron = require('react-bootstrap').Jumbotron;

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
    const postStoreListener = PostStore.addListener(this._onChange);
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
        <Jumbotron>
          <h5>Summary</h5>
          {this.state.post.title}
          <h5>Body</h5>
          {this.state.post.body}
        </Jumbotron>
      </div>
    );
  }
});

module.exports = PostDetail;
