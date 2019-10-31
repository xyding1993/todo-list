import React, { Fragment, Component } from "react";
import TodoItem from "./TodoItem";
import axios from 'axios';
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
      show:true
    };
  }
  // 在组件即将被挂载到页面之前执行的方法
  componentWillMount() {
    console.log("componentWillMount");
  }
  // 在组件即将被挂载到页面之后方法
  componentDidMount() {
    console.log("componentDidMount");
    axios.get('api/query').then(
      ()=> {
        console.log('成功了')
      }
    ).catch(
      (error)=> {
        console.log(error)
      }
    )
  }

  // 在组件更新之前自动执行
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  // shouldComponentUpdate true 执行
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    const { inputValue , show} = this.state;
    return (
      <Fragment>
        <label htmlFor="name">name</label>
        <input
          id="name"
          value={inputValue}
          onChange={this.inputChange}
          ref={input => {
            this.input = input;
          }}
        />
        <button onClick={this.submit}>提交</button>
        <ul
          ref={ref => {
            this.ref = ref;
          }}
        >
          {" "}
          {this.getTodoItem()}
        </ul>

        <div>
          <div className={ show ? 'show' : 'hidden'}>hello</div>
          <button onClick={this.changeClick}> change </button>
        </div>
      </Fragment>
    );
  }

  inputChange = () => {
    const inputValue = this.input.value;
    this.setState(() => ({ inputValue }));
  };

  submit = () => {
    this.setState(
      prevState => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ""
      }),
      () => {
        console.log(this.ref.querySelectorAll("div").length);
      }
    );
    // console.log(this.ref.querySelectorAll("div").length);
  };

  handleItemDelete = index => {
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  };

  getTodoItem = () => {
    const { list } = this.state;
    return list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      );
    });
  };

  changeClick = () => {
    this.setState({show:!this.state.show});
  }
}

export default TodoList;
