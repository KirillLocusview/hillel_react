import React from "react";
import Task from "../Task/Task";

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			id: 0,
			inputValue: "",
			tasks: [],
		};
	}

	onAddTaskClick = (e) => {
		e.preventDefault();
		if (!this.state.inputValue) return;
		this.setState({
			tasks: [
				...this.state.tasks,
				{
					id: this.state.id,
					taskTitle: this.state.inputValue,
				},
			],
			id: this.state.id + 1,
			inputValue: "",
		});
	};

	onInput = (e) => {
		this.setState({ inputValue: e.target.value });
	};

	render() {
		return (
			<form>
				<ul>
					{this.state.tasks.map((item) => (
						<Task task={item} />
					))}
				</ul>
				<input
					type="text"
					value={this.state.inputValue}
					onChange={this.onInput}
				></input>
				<button onClick={this.onAddTaskClick} className="add-task">
					Add task
				</button>
			</form>
		);
	}
}

export default Form;
