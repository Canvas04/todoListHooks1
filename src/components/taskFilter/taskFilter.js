import React, { useContext } from "react";
import {MyContext} from '../../index';
export default function TaskFilter() {
  const { changeFilter} = useContext(MyContext);
  const handlerFilterChange = (e) => {
    changeFilter(e.currentTarget.dataset.value)
  };
  return (
    <ul className="filters">
			<li>
				<button type="button" data-value="all" onClick={handlerFilterChange}>
					All
				</button>
			</li>
			<li>
				<button type="button" data-value="active" onClick={handlerFilterChange}>
					Active
				</button>
			</li>
			<li>
				<button type="button" data-value="completed" onClick={handlerFilterChange}>
					Completed
				</button>
			</li>
		</ul>
  )
}
