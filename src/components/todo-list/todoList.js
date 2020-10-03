import React, { useContext } from "react";
import "./todoList.css";
import { MyContext } from "../../index";
import TaskListItem from "../taskListItem";
import Task from '../task';

const AdditionalContext = React.createContext();
export { AdditionalContext, TodoList };
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
    const task = <Task done={el.done}  editing={el.editing} onChangeHandler= {(e) =>onChangeHandler(el.id,e)} stateTask={el.text} date={el.date} onToggleDone={(e) =>onToggleDone(el.id,e)} onSubmit={(e) =>onSubmit(el.id,e)} changeItem={(e) =>changeItem(el.id,e)} onDeleted={() =>removeItem(el.id)} isChecked={el.isChecked}/>
    return (
      <AdditionalContext.Provider
        key={el.id}
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
          ),
        ]}
      >
        <TaskListItem task={task}/>
      </AdditionalContext.Provider>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
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
    onDeleted,
  };
}
