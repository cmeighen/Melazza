const React = require('react');
const ReactDOM = require('react-dom');
const HashHistory = require('react-router').hashHistory;

const Errors = React.createClass({

  render: function() {
    var key = 0;
    var errorsList = this.props.errors.map(function(error) {
      key += 1;
      return <li key={key}>{error}</li>;
    });

    return (
      <ul className='form-errors'>
        {errorsList}
      </ul>
    );
  }
});
