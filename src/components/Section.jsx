import React from "react";
import uuid from "react-uuid";
import Todo from "./Todo";

function Section({ todos, isDone }) {
  return (
    <section>
      <h2>{isDone ? 'Working' : 'Done'}</h2>
      <Todo todos={todos} isDone={isDone} />
    </section>
  );
}

export default Section;
