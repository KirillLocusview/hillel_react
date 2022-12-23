import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Contact from "./components/Contact/Contact";
import "./components/Form/Form.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<>
				<div className="container">
					<Contact></Contact>
					<Form></Form>
				</div>
			</>
		);
	}
}

export default App;
