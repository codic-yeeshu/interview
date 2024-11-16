import React from "react";

const Todo = ({ id, todo }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{todo}</td>
    </tr>
  );
};

export default Todo;
