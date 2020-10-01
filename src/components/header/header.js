import React, { useState, useContext } from "react";
import "./header.css";
import { MyContext } from "../../index";
import ButtonAdd from "../buttonAdd";

export default function Header() {
  const [label, setLabel] = useState("");
 const { addItem } = useContext(MyContext);
  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addItem(label);
    setLabel("");
  };
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form className="form-inline" onSubmit={onSubmit} id="formTodo">
          <div className="input-block-el">
            <input
              className="new-todo"
              placeholder="What needs to be done ?"
              onChange={onLabelChange}
              value={label}
            />
          </div>
          <ButtonAdd addItem={onSubmit} />
        </form>
      </header>
    </>
  );
}
