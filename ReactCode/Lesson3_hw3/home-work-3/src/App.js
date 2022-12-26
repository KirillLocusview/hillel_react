import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import ContactBook from "./components/ContactBook/ContactBook";

function App() {
	const [fields, setFields] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		isEmpty: false,
	});
	const [contacts, setContacts] = useState([]);
	const [addPressed, setAddPressed] = useState(false);

	const onInputChange = (e) => {
		const { value, name } = e.target;
		setFields({ ...fields, [name]: value });
	};

	const onAddContack = (e) => {
		e.preventDefault();
		for (let key in fields) {
			if (fields[key] === "") {
				setFields({ ...fields, isEmpty: true });
				return;
			}
		}
		const newContacts = contacts.map((contact) => contact);
		newContacts.push({
			firstName: fields.firstName,
			lastName: fields.lastName,
			phone: fields.phone,
			id: Math.random(),
		});
		newContacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
		setContacts(newContacts);
		setFields({
			firstName: "",
			lastName: "",
			phone: "",
			isEmpty: false,
		});
		setAddPressed(false);
	};

	const onDelete = (id) => {
		const newContacts = contacts.filter((contact) => contact.id !== id);
		setContacts(newContacts);
	};

	const onHide = () => {
		setFields({
			firstName: "",
			lastName: "",
			phone: "",
			isEmpty: false,
		});
		setAddPressed(false);
	};

	const onAdd = () => {
		setAddPressed(true);
	};

	return (
		<>
			<div className="container">
				<ContactBook
					contacts={contacts}
					onDelete={onDelete}
					onAdd={onAdd}
					addPressed={addPressed}
				/>
				<Form
					fields={fields}
					onInputChange={onInputChange}
					onAddContack={onAddContack}
					onHide={onHide}
					addPressed={addPressed}
				></Form>
			</div>
		</>
	);
}

export default App;
