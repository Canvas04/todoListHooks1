import React, { useContext } from "react";
import Task from "../task";
import { AdditionalContext } from "../todo-list/todoList";
export default function TaskListItem() {
  const data = useContext(AdditionalContext);
  const elements = data.map((el) => {
    return (
      <li className={el.className} key={el.key} > 
        <Task done={el.done} editing = {el.editing} onChangeHandler={el.onChangeHandler} stateTask={el.stateTask}  date={el.date} onToggleDone={el.onToggleDone} onSubmit={el.onSubmit} changeItem={el.onChangeItem} onDeleted={el.onRemoveItem} isChecked={el.isChecked} key={el.id}/>
      </li>
    );
  });
  return <>
  {elements}
  </>
}
