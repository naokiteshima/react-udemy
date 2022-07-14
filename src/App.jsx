import React, { useState, useEffect } from "react";
import "./style.css";
import { InputTodo } from "./components/inputTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplete, setIncomplete] = useState([]);
  const [complete, setComplete] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const addTodo = () => {
    if (todoText === "") return;
    const newTodo = [...incomplete, todoText];
    setIncomplete(newTodo);
    setTodoText("");
  };

  const onclickdelete = (index) => {
    // alert(index)
    const newTodo = [...incomplete];
    newTodo.splice(index, 1);
    setIncomplete(newTodo);
  };

  const onclickcomplete = (index) => {
    const newTodo = [...incomplete];
    newTodo.splice(index, 1);
    setIncomplete(newTodo);

    setComplete([...complete, incomplete[index]]);
  };

  const backtodo = (index) => {
    const newcomplete = [...complete];
    newcomplete.splice(index, 1);

    const newincomplete = [...incomplete, complete[index]];

    setIncomplete(newincomplete);
    setComplete(newcomplete);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={addTodo}
      />
      <div className="incomplete-area">
        <p className="title">未完了TODO</p>
        <ul>
          {incomplete.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onclickcomplete(index)}>完了</button>
                <button onClick={() => onclickdelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了TODO</p>
        <ul>
          {complete.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => backtodo(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
