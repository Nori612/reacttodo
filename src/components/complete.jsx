import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onreturn } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onreturn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
