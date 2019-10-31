import React, { Component } from "react";
import PropTypes  from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {deleteItem, index} = this.props;
    deleteItem(index);
  }


  shouldComponentUpdate(nextProps,nextState) {
    if(nextProps.item !== this.props.item) {
      return true;
    }
    return false;
  }

  // 组件从父组件接受参数
  // 第一次存在父组件中 不执行
  // 这个组件之前已经存在父组件中 执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }


  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  render() {
    console.log('child render')
    const { item , test} = this.props;
    return <div onClick={this.handleClick}>{test} - {item}</div>;
  }
}

TodoItem.propTypes = {
  test:PropTypes.string.isRequired,
  index:PropTypes.number,
  item:PropTypes.string,
  deleteItem:PropTypes.func,
}

TodoItem.defaultProps = {
  test:'Hello World',
}

export default TodoItem;
