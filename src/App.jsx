import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodo } from "./components/incomplete";
import { CompleteTodo } from "./components/complete";

export const App = () => {
  const [todoText, setTodotext] = useState("");
  const [incompleteTodo, setincompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodo, setcompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodotext(event.target.value);
  const onClickTodoText = () => {
    if (todoText === "") return;
    const newTodo = [...incompleteTodo, todoText];
    setincompleteTodos(newTodo);
    setTodotext("");
  };
  const onClickDelete = (index) => {
    // spliceは要素を受け取って第二引数で要素をいくつ削除するか入力する
    const newTodos = [...incompleteTodo];
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };
  const onClickcomplete = (index) => {
    const newIncompleteTodos = [...incompleteTodo];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodo, incompleteTodo[index]];
    setincompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };
  const onClickreturn = (index) => {
    const newCompleteTodos = [...completeTodo];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodo, completeTodo[index]];
    setcompleteTodos(newCompleteTodos);
    setincompleteTodos(newIncompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={incompleteTodo}
        onChange={onChangeTodoText}
        onClick={onClickTodoText}
      />
      <IncompleteTodo
        todos={incompleteTodo}
        onClick={onClickcomplete}
        onDelete={onClickDelete}
      />
      <CompleteTodo todos={completeTodo} onreturn={onClickreturn} />
    </>
  );
};
