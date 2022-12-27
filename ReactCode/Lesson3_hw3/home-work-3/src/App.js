import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import ContactBook from "./components/ContactBook/ContactBook";
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			contacts: [],
			addPressed: false,
		};
	}

	onInputChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			fields: { ...this.state.fields, [name]: value },
		});
	};

	addContack = (contact) => {
		const { firstName, lastName, phone } = contact;
		const newContacts = [
			...this.state.contacts,
			{
				firstName,
				lastName,
				phone,
				id: Math.random(),
			},
		];

		newContacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
		this.setState({
			contacts: newContacts,
			isEmpty: false,
			addPressed: false,
		});
	};

	onDelete = (e, id) => {
		e.preventDefault();
		this.setState({
			contacts: this.state.contacts.filter((contact) => contact.id !== id),
		});
	};

	onAddHide = (isPressed) => {
		this.setState({
			addPressed: isPressed,
		});
	};

	render() {
		return (
			<>
				<div className="container">
					<ContactBook
						contacts={this.state.contacts}
						onDelete={this.onDelete}
						onAddHide={this.onAddHide}
						addPressed={this.state.addPressed}
					/>
					<Form
						fields={this.state.fields}
						onInputChange={this.onInputChange}
						addContack={this.addContack}
						onAddHide={this.onAddHide}
						addPressed={this.state.addPressed}
					></Form>
				</div>
			</>
		);
	}
}

export default App;
