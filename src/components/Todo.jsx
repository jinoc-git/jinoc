import React from "react";

function Todo({ todos, isDone }) {
  console.log(todos);
  return (
    <>
      {todos
        .filter((todo) => {
          return todo.isDone === isDone;
        })
        .map((item) => {
          return (
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div>
                <button>삭제하기</button>
                <button>{item.isDone ? "완료취소" : "완료"}</button>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Todo;
