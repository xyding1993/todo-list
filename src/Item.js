import React, { Fragment } from "react";

function TodoList(props) {
  const {list} = props;
  return (
    <Fragment>
      <ul>
        {list.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    </Fragment>
  );
}

export default TodoList;
