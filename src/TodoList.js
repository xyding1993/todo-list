import React, { Component } from "react";
import { connect } from "react-redux";
class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          ></input>
          <button>提交</button>
        </div>
        <div>
          <ul>
            <li>111</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  };
};

//  store.dispatch
const mapDispatchToProps = dispatch => {
  return {
    handleInputChange(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
