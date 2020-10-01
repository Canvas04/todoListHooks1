import React, { useContext } from "react";
import Task from "../task";
import { AdditionalContext } from "../todo-list/todoList";
export default function TaskListItem() {
  const data = useContext(AdditionalContext);
  const elements = data.map((el) => {
    return (
      <li className={el.className}>
        <Task />
      </li>
    );
  });
  return <>
  {elements}
  </>
}
