import React from "react";
import Todo from "./todo";

const AllTodo = ({ todos }) => {
  //   console.log(todos);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>todo</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                <Todo id={todo.id} todo={todo.todo} />
              </div>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AllTodo;
