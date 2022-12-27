import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import "../ContactBook/ContactBook.css";

function ContactBook({
	contacts,
	onDelete,
	addHideToggle,
	changeAddHideToggle,
}) {
	const onAddContact = (e) => {
		e.preventDefault();
		changeAddHideToggle();
	};
	return (
		<div className="contact-container">
			<div className="contact-book">
				{contacts.map((contact) => (
					<ContactItem contact={contact} key={contact.id} onDelete={onDelete} />
				))}
			</div>
			<button
				className={`contact-book__new-contact ${addHideToggle ? "hide" : ""}`}
				onClick={(e) => onAddContact(e)}
			>
				ADD NEW CONTACT
			</button>
		</div>
	);
}

export default ContactBook;
