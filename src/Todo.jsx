//!https://www.youtube.com/watch?v=drF8HbnW87w

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
// import {db} from './ConfigFirebase/Todo'

const style = {
  li: "flex justify-between bg-slate-200 p-4 my-2 capitalize",
  liComplete: "flex justify-between bg-slate-400 p-4 my-2 capitalize",
  row: "flex",
  text: "ml-2 cursor-pointer",
  textComplete: "ml-2 cursor-pointer line-through",
  button: "cursor-pointer flex items-center",
};

function Todo({ todo, toggleComplete,deleteTodo }) {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={()=> deleteTodo(todo.id)} className={style.button}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}

export default Todo;
