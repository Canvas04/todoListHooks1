import React, { useContext } from "react";
import "./todoList.css";
import { MyContext } from "../../index";
import TaskListItem from "../taskListItem";
const AdditionalContext = React.createContext();
export {AdditionalContext,TodoList};
  function TodoList() {
  let filterData;
  let {
    data: todos,
    filter,
    removeItem,
    onToggleDone,
    changeItem,
    onSubmit,
    onChangeHandler,
   } = useContext(MyContext);
  if (filter === "all") filterData = todos;
  if (filter === "active") filterData = todos.filter((el) => !el.done);
  if (filter === "completed") filterData = todos.filter((el) => el.done);
  const elements = filterData.map((el) => {
    return (
      <AdditionalContext.Provider key={el.id}
        value={[
          createItem(
            el.className,
            el.done,
            el.text,
            el.id++,
            el.date,
            el.isChecked,
            () => removeItem(el.id),
            (e) => onToggleDone(el.id, e),
            (e) => changeItem(el.id, e),
            el.editing,
            (e) => onSubmit(el.id, e),
            (e) => onChangeHandler(el.id, e)
          )
        ]
        }
      >
        <TaskListItem />
      </AdditionalContext.Provider>
    );
  });
  console.log(elements);
  return <ul className='todo-list'>
      {elements}
  </ul>
}
function createItem(
  className,
  done,
  stateTask,
  key,
  date,
  isChecked,
  onDeleted,
  onToggleDone,
  changeItem,
  editing,
  onSubmit,
  onChangeHandler
) {
  return {
    className,
    done,
    stateTask,
    key,
    date,
    isChecked,
    onToggleDone,
    changeItem,
    editing,
    onSubmit,
    onChangeHandler,
  };
}
