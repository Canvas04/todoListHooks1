import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';
import Main from './components/main';
import { formatDistanceToNow } from 'date-fns';
const MyContext = React.createContext();
export { MyContext };
const App = () => {
	let idItem = 100;
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState('all');
	const removeItem = (id) => {
		const newArr = data.filter((el) => el.id !== id);
		setData(newArr);
	};
	const createTodoItem = (text) => {
		return {
			id: idItem++,
			text,
			time: new Date(),
			date: formatDistanceToNow(new Date(), { includeSeconds: true }),
			done: false,
			editing: false,
			isChecked: false,
		};
	};
	const onToggleDone = (id, e) => {
		e.preventDefault();
		const idx = data.findIndex((el) => el.id === id);
		const oldItem = data[idx];
		const newItem = {
			...oldItem,
			done: !oldItem.done,
			isChecked: !oldItem.isChecked,
		};
		const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
		setData(newArray);
	};
	const changeItem = (id) => {
		const idx = data.findIndex((el) => el.id === id);
		const oldItem = data[idx];
		const newItem = { ...oldItem, editing: !oldItem.editing };
		const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
		setData(newArray);
	};
	const onSubmit = (id, e) => {
		e.preventDefault();
		setData((data) => {
			const idx = data.findIndex((el) => el.id === id);
			const oldItem = data[idx];
			const newItem = {
				...oldItem,
				editing: !oldItem.editing,
				date: formatDistanceToNow(new Date(), { includeSeconds: true }),
				time: new Date(),
			};
			const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
			return newArray;
		});
	};
	const onChangeHandler = (id, e) => {
		const idx = data.findIndex((el) => el.id === id);
		const oldItem = data[idx];
		const newItem = { ...oldItem, text: e.target.value };
		const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
		setData(newArray);
	};

	const removeCompletedItem = () => {
		const resArr = data.filter((el) => !el.done);
		setData(resArr);
	};
	const changeFilter = (filterValue) => {
		setFilter(filterValue);
	};
	const addItem = (text) => {
		const newObj = createTodoItem(text);
		setData((data) => {
			newObj.date = formatDistanceToNow(new Date(), { includeSeconds: true });
			const newTime = data.map((el) => {
				el.date = formatDistanceToNow(el.time, { includeSeconds: true });
				return el;
			});
			return [...newTime, newObj];
		});
	};

	const doneCount = data.filter((el) => el.done).length;
	const todoCount = data.length - doneCount;
	return (
		<section className="todo-app">
			<MyContext.Provider
				value={{
					data: data,
					filter: filter,
					removeItem: removeItem,
					onToggleDone: onToggleDone,
					changeItem: changeItem,
					onChangeHandler: onChangeHandler,
					doneCount: doneCount,
					todoCount: todoCount,
					changeFilter: changeFilter,
					removeCompletedItem: removeCompletedItem,
					addItem: addItem,
					onSubmit: onSubmit,
				}}
			>
				<Header />
				<Main />
			</MyContext.Provider>
		</section>
	);
};
ReactDom.render(<App />, document.querySelector('#root'));
