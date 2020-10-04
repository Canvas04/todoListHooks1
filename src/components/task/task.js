import React from 'react';
import './task.css';
import Timer from '../timer';
import propTypes from 'prop-types';

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
	let classNames = 'description';
	let classNameLabel = 'label';
	if (done) classNames += ' completed-task';
	let editingElem;
	if (editing) {
		classNameLabel += ' label-padding';
		editingElem = (
			<label className={classNameLabel}>
				<input
					className="description form-control"
					onChange={onChangeHandler}
					defaultValue={stateTask}
					autoFocus
				/>{' '}
			</label>
		);
	} else {
		editingElem = (
			<>
				<div className={classNameLabel}>
					<a href="#id" className={classNames}>
						{stateTask}
					</a>{' '}
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
			<form name="form" id="#form" onSubmit={onSubmit}>
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
Task.propTypes = {
	done: propTypes.bool.isRequired,
	editing: propTypes.bool.isRequired,
	onChangeHandler: propTypes.func.isRequired,
	stateTask: propTypes.string.isRequired,
	date: propTypes.string.isRequired,
	onToggleDone: propTypes.func.isRequired,
	onSubmit: propTypes.func.isRequired,
	changeItem: propTypes.func.isRequired,
	onDeleted: propTypes.func.isRequired,
	isChecked: propTypes.bool.isRequired,
};
