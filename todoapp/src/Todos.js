import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <span onClick={() => deleteTodo(todo.id)} style={{cursor: "pointer"}} className="badge">删除</span>
        </div>
      )
    })
  ) : (
    <p className="center">恭喜李完成了所有任务！</p>
  );
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;