import React from "react";
import store from "./store";
import {
  getInputValueChangeAction,
  getAddTodoItemAction,
  getDelTodoItemAction,
  initListAction
} from "./store/actionCreator";
import axios from 'axios'

import TodoListUI from "./TodoListUI";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleItemDel = this.handleItemDel.bind(this);
    store.subscribe(this.handleStoreChange);
  }


  componentDidMount() {
    axios.get('/api/todolist').then( (res) => {
      debugger
      const data = res.data;
      const action = initListAction(data)
      store.dispatch(action);
    })
   
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleClick={this.handleClick}
        list={this.state.list}
        handleItemDel={this.handleItemDel}
      />
    );
  }

  handleInputChange = e => {
    store.dispatch(getInputValueChangeAction(e.target.value));
  };

  handleStoreChange = () => {
    this.setState(store.getState());
  };

  handleClick = () => {
    store.dispatch(getAddTodoItemAction());
  };

  handleItemDel(index) {
    store.dispatch(getDelTodoItemAction(index));
  }
}

export default TodoList;
