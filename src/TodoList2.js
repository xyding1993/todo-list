import React, { Fragment, useState } from "react";

function TodoList2() {
  const [inputValue, setInputValue] = useState();
  const [list, setListValue] = useState([]);

  function inputChange(e) {
    setInputValue(e.target.value);
  }

  function submit() {
    const a = [...list, inputValue];
    setListValue(a);
  }

  return (
    <Fragment>
      <label htmlFor="name">name</label>
      <input type='text' id="name" onChange={inputChange} />
      <button onClick={submit}>提交</button>
      <div style={{height:'1px',overflow:'hidden',background:'red'}}></div>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </Fragment>
  );
}

export default TodoList2;
