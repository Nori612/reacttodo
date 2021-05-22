import React from "react";

export const IncompleteTodo = (props) => {
  const { todos, onClick, onDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* mapを使う場合はkeyを設定する */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>完了</button>
              {/* 関数に引数を渡す場合アロー関数を使う */}
              <button onClick={() => onDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
