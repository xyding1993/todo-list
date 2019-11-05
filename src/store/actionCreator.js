import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DEL_TODO_ITEM,
  INIT_TODO_ITEM
} from "./actionTypes";
import axios from 'axios'

export const getInputValueChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddTodoItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDelTodoItemAction = index => ({
  type: DEL_TODO_ITEM,
  index
});


export const initListAction = data => ({
  type: INIT_TODO_ITEM,
  data
});

export const getTodolist = () => {
  return (dispatch) => {
    axios.get('/api/todolist').then( (res) => {
      debugger
      const data = res.data;
      const action = initListAction(data)
      dispatch(action);
    })
  }
}
