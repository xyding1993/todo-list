import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM,INIT_TODO_ITEM } from './actionTypes'


const defaultState = {
  inputValue: '',
  list: []
};

// 不能修改state
export default (state = defaultState, action) => {
  const { type } = action;
  if (type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue='';
    return newState;
  }
  if (type === DEL_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (type === INIT_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data
    return newState;
  }
  return state;
};
