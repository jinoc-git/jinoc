import React from "react";
import uuid from "react-uuid";

function Todo({ todos, isDone, chageIsDone, deleteTodo }) {
  
  return (
    <>
      {todos
        .filter((todo) => {
          return todo.isDone === isDone;
        })
        .map((item) => {
          return (
            <div key={uuid()}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div>
                <button onClick={() => {
                  deleteTodo(item.id);
                }}>삭제하기</button>
                <button
                  onClick={() => {
                    chageIsDone(item.id);
                  }}>
                  {item.isDone ? "완료취소" : "완료"}
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Todo;
