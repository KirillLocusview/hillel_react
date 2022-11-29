import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import "./components/Task/Task.css";
import "./components/Form/Form.css";
class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<header>
					<h2>ToDo List</h2>
				</header>
				<Form></Form>
			</div>
		);
	}
}

export default App;
