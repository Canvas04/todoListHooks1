import React, { useContext } from "react";
import "./footer.css";
import { MyContext } from "../../index";
import TaskFilter from "../taskFilter/taskFilter";
export default function Footer() {
  const {doneCount, todoCount, removeCompletedItem} = useContext(
    MyContext
  );
  return (
    <footer className="footer">
      <span className="todo-count">
        {todoCount} left,{doneCount} done
      </span>
      <TaskFilter />
      <button
        type="button"
        className="clear-completed"
        onClick={removeCompletedItem}
      >
        {" "}
        Clear Completed
      </button>
    </footer>
  );
}
