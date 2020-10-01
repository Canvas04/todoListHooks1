import React, { useState, useContext } from "react";
import ReactDom from "react-dom";
import Header from "./components/header";
import Main from "./components/main";
import { formatDistanceToNow } from "date-fns";
const MyContext = React.createContext();
export {MyContext};
const App = () => {
  let idItem = 100;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  const removeItem = (id) => {
    setData((state) => {
      const newArr = data.filter((el) => el.id !== id);
      return {
        data: newArr,
      };
    });

    const createTodoItem = (text) => {
      return {
        id: idItem++,
        text,
        date: formatDistanceToNow(new Date(), { includeSeconds: true }),
        done: false,
        editing: false,
        isChecked: false,
      };
    };
  };
const onToggleDone = () => {

}
const changeItem = () => {

}
const onSubmit = () => {

}
const onChangeHandler = () => {

}
const removeCompletedItem = () => {

}
const changeFilter =  () => {

}
const doneCount = data.filter(el => el.done).length;
const todoCount = data.length - doneCount
  return (
    <section className="todo-app">
      <MyContext.Provider value={{data,filter,removeItem,onToggleDone,changeItem,onChangeHandler,doneCount,todoCount,changeFilter,removeCompletedItem}}>
        <Header />
        <Main />
      </MyContext.Provider>
    </section>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));
// Надо сделать компонент Header