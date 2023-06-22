import React from "react";
import uuid from "react-uuid";
import Todo from "./Todo";

function Section({ todos, isDone, setTodos }) {
  const chageIsDone = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <section>
      <h2>{isDone ? "Done" : "Working"}</h2>
      <Todo todos={todos} isDone={isDone} chageIsDone={chageIsDone} />
    </section>
  );
}

export default Section;
