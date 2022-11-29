import React from "react";

class Task extends React.Component {
	onTaskClick = (e) => {
		e.target.classList.toggle("not-Complited");
	};
	render() {
		const taskItem = {
			id: this.props.task.id,
			taskTitle: this.props.task.taskTitle,
		};
		return (
			<li
				key={taskItem.id}
				className="list-element not-Complited"
				onClick={this.onTaskClick}
			>
				{taskItem.taskTitle}
			</li>
		);
	}
}

export default Task;
