import React, { useContext } from "react";
import Task from "../task";
import { AdditionalContext } from "../todo-list/todoList";
export default function TaskListItem({task}) {
  return (
    <>
      <li>
        {task}
      </li>
    </>
  );
}
