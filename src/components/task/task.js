import React, { useContext } from "react";
import "./task.css";
import Timer from "../timer";

export default function Task({
  done,
  editing,
  onChangeHandler,
  stateTask,
  date,
  onToggleDone,
  onSubmit,
  changeItem,
  onDeleted,
  isChecked,
}) {
  let classNames = "description";
  let classNameLabel = "label";
  if (done) classNames += " completed-task";
  let editingElem;
  if (editing) {
    classNameLabel += " label-padding";
    editingElem = (
      <label className={classNameLabel}>
        <input
          className="description form-control"
          onChange={onChangeHandler}
          defaultValue={stateTask}
        />{" "}
      </label>
    );
  } else {
    editingElem = (
      <>
        <div className={classNameLabel}>
          <a href="#id" className={classNames}>
            {stateTask}
          </a>{" "}
          <Timer />
          <span className="created">{date} created ago</span>
          <button
            aria-label="Delete"
            type="button"
            className="icon icon-destroy"
            onClick={onDeleted}
          />
          <button
            aria-label="Edit"
            type="button"
            className="icon icon-edit"
            onClick={changeItem}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="view">
          <input
            className="toggle"
            checked={isChecked}
            onInput={onToggleDone}
            onChange={() => {}}
            type="checkbox"
          />
          {editingElem}
        </div>
      </form>
    </>
  );
}
