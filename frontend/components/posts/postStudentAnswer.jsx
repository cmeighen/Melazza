const React = require('react');
const PostStore = require('../../stores/postStore');
const PostActions = require('../../actions/postActions');
const Modal = require('react-bootstrap').Modal;
const Panel = require('react-bootstrap').Panel;
const Button = require('react-bootstrap').Button;
const StudentAnswerForm = require('./studentAnswerForm');


const PostStudentAnswer = React.createClass({

  getInitialState() {
    return {
      showStudentAnswerModal: false,
    };
  },

  openStudentAnswerModal(){
    this.setState({ showStudentAnswerModal: true });
  },

  closeStudentAnswerModal(){
    this.setState({ showStudentAnswerModal: false });
  },

  render: function(){
    if (typeof this.props.answers === "undefined" || this.props.answers.length === 0) {
      return(
        <div>
          <Panel header="Student Answer">
            <Button bsStyle="primary" bsSize="large" block onClick={this.openStudentAnswerModal}>Start Answer</Button>
          </Panel>
          <Modal show={this.state.showStudentAnswerModal} onHide={this.closeStudentAnswerModal}>
            <Modal.Header closeButton>
              <Modal.Title>Student Answer</Modal.Title>
              <StudentAnswerForm
                close={this.closeStudentAnswerModal}
                response=""
                postId={this.props.postId}/>
            </Modal.Header>
          </Modal>
        </div>
      );
    } else {
      return(
        <div>
          <Panel header="Student Answer">
            { this.props.answers[this.props.answers.length - 1].response }
            <Button bsStyle="primary" bsSize="large" block onClick={this.openStudentAnswerModal}>Continue Answer</Button>
          </Panel>
          <Modal show={this.state.showStudentAnswerModal} onHide={this.closeStudentAnswerModal}>
            <Modal.Header closeButton>
              <Modal.Title>Student Answer</Modal.Title>
              <StudentAnswerForm
                close={this.closeStudentAnswerModal}
                response={this.props.answers[this.props.answers.length - 1].response}
                postId={this.props.postId}/>
            </Modal.Header>
          </Modal>
        </div>
      );
    }
  }
});

module.exports = PostStudentAnswer;
