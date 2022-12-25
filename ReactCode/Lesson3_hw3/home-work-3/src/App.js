import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import ContactBook from "./components/ContactBook/ContactBook";
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			fields: {
				firstName: "",
				lastName: "",
				phone: "",
				isEmpty: false,
			},
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

	onAddContack = (e) => {
		e.preventDefault();
		const { fields } = this.state;
		for (let key in fields) {
			if (fields[key] === "") {
				this.setState({
					fields: { ...this.state.fields, isEmpty: true },
				});
				return;
			}
		}

		this.setState({
			contacts: [
				...this.state.contacts,
				{
					firstName: this.state.fields.firstName,
					lastName: this.state.fields.lastName,
					phone: this.state.fields.phone,
					id: Math.random(),
				},
			],
			fields: { firstName: "", lastName: "", phone: "" },
			isEmpty: false,
		});
	};

	onDelete = (e, id) => {
		e.preventDefault();
		this.setState({
			contacts: this.state.contacts.filter((contact) => contact.id !== id),
		});
	};

	onAddHide = (e) => {
		e.preventDefault();
		if (!this.state.addPressed) this.setState({ addPressed: true });
		else {
			this.setState({
				fields: { firstName: "", lastName: "", phone: "" },
				isEmpty: false,
				addPressed: false,
			});
		}
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
						onAddContack={this.onAddContack}
						onAddHide={this.onAddHide}
						addPressed={this.state.addPressed}
					></Form>
				</div>
			</>
		);
	}
}

export default App;
