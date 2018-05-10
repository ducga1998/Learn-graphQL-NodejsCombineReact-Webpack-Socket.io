import React from 'react';
import PropTypes from 'prop-types';
import { toggleTodo, addTodo } from "../../action/index";
import { connect } from "react-redux";
class FormChangeDataBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      Address: ""
    };
  }
  handOnChange(event) {
    this.setState({ name: event.target.value });
  }
  handOnChangeDuc(event) {
    this.setState({ Address: event.target.value });
  }
  handSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    fetch("/api/createSendJson", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        name: this.state.name,
        duc: this.state.Address
      })
    }).then(response => {
      console.log(response);
    });
  }
  handConsoleStateRedux(){
    console.log(this.props.todo);
  }
  render() {
    console.log(this.props.todo);
    return (
      <div>
        <form onSubmit={this.handSubmit.bind(this)}>
          <input
            type="text"
            name="name"
            onChange={this.handOnChange.bind(this)}
          />
          <input
            type="text"
            name="duc"
            onChange={this.handOnChangeDuc.bind(this)}
          />

          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.props.onClickA}>On Click A</button>
        <button onClick={this.props.onClickB}>OnClickB</button>
        <button onClick={this.handConsoleStateRedux.bind(this)}>
          View State Redux
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos };
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return { onClickA: () => dispatch(toggleTodo("csacsacsaca")), onClickB: () => dispatch(addTodo("Nguyễn Minh ĐỨc")) };
}
 export default connect(mapStateToProps, mapDispatchToProps)(FormChangeDataBase);




