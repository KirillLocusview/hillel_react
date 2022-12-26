import React from "react";
import "./ContactItem.css";

function ContactItem({ contact, onDelete }) {
	const onDeleteContact = (e) => {
		e.preventDefault();
		onDelete(contact.id);
	};
	return (
		<div className="contact">
			<div className="contact-data">
				<div className="contact-data__first-name">{contact.firstName}</div>
				<div className="contact-data__last-name">{contact.lastName}</div>
				<div className="contact-data__phone">{contact.phone}</div>
			</div>
			<button className="contact-delete" onClick={(e) => onDeleteContact(e)}>
				Delete
			</button>
		</div>
	);
}

export default ContactItem;
