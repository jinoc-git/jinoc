import React, { useState } from "react";
import "./App.css";
import "./reset.css";
import uuid from "react-uuid";
import Section from "./components/Section";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "리액트 공부하기",
      body: "리액트 열심히 공부하기",
      isDone: false,
    },
    {
      id: uuid(),
      title: "리액트 공부하기2",
      body: "리액트 열심히 공부하기2",
      isDone: true,
    },
  ]);
  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };
  const bodyHandler = ({ target }) => {
    setBody(target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <header>
        <h1>My Todo List</h1>
        <p>react</p>
      </header>
      <main>
        <form onSubmit={onSubmitHandler}>
          <label>
            제목
            <input type="text" value={title} onChange={titleHandler} />
          </label>
          <label>
            내용
            <input type="text" value={body} onChange={bodyHandler} />
          </label>
          <button type="submit">추가하기</button>
        </form>
        <Section todos={todos} isDone={false} />
        <Section todos={todos} isDone={true} />
      </main>
    </>
  );
}

export default App;
