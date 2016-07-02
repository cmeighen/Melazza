const React = require('react');
const ReactDOM = require('react-dom');

const PostIndexItem = React.createClass({
  render: function(){
    return (
      <li className='post-item'>
        <div className='post-item-summary'>{this.props.post.title}</div>
      </li>
    );
  }
});

module.exports = PostIndexItem;
