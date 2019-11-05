import React from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

const TodoListUI = props => {
  return (
    <div>
      <div>
        <Input
          placeholder="todo"
          value={props.inputValue}
          style={{
            marginTop: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            width: "300px"
          }}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleClick}>
          add
        </Button>
      </div>
      <List
        style={{ marginTop: "10px", marginLeft: "10px", width: "300px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handleItemDel(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoListUI;
