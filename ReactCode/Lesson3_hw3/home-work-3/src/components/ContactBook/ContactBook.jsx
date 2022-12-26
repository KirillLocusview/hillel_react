import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import "../ContactBook/ContactBook.css";

function ContactBook({ contacts, onDelete, addPressed, onAdd }) {
	const onAddContact = (e) => {
		e.preventDefault();
		onAdd();
	};
	return (
		<div className="contact-container">
			<div className="contact-book">
				{contacts.map((contact) => (
					<ContactItem contact={contact} key={contact.id} onDelete={onDelete} />
				))}
			</div>
			<button
				className={`contact-book__new-contact ${addPressed ? "hide" : ""}`}
				onClick={(e) => onAddContact(e)}
			>
				ADD NEW CONTACT
			</button>
		</div>
	);
}

export default ContactBook;
