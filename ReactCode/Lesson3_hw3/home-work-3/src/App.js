import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import ContactBook from "./components/ContactBook/ContactBook";

function App() {
	const [contacts, setContacts] = useState([]);
	const [addHideToggle, setAddHideToggle] = useState(false);

	const addNewContact = ({ firstName, lastName, phone }) => {
		const newContacts = [
			...contacts,
			{
				firstName,
				lastName,
				phone,
				id: Math.random(),
			},
		];
		newContacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
		setContacts(newContacts);
		setAddHideToggle(!addHideToggle);
	};

	const onDelete = (id) => {
		const newContacts = contacts.filter((contact) => contact.id !== id);
		setContacts(newContacts);
	};

	const changeAddHideToggle = () => {
		setAddHideToggle(!addHideToggle);
	};

	return (
		<>
			<div className="container">
				<ContactBook
					contacts={contacts}
					onDelete={onDelete}
					addHideToggle={addHideToggle}
					changeAddHideToggle={changeAddHideToggle}
				/>
				<Form
					addNewContact={addNewContact}
					addHideToggle={addHideToggle}
					changeAddHideToggle={changeAddHideToggle}
				></Form>
			</div>
		</>
	);
}

export default App;
