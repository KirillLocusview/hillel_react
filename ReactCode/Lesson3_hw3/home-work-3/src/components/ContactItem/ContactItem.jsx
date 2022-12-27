import React from "react";
import "./ContactItem.css";

function ContactItem({ contact, onDelete }) {
	const onDeleteContact = () => {
		onDelete(contact.id);
	};
	return (
		<div className="contact">
			<div className="contact-data">
				<div className="contact-data__first-name">{contact.firstName}</div>
				<div className="contact-data__last-name">{contact.lastName}</div>
				<div className="contact-data__phone">{contact.phone}</div>
			</div>
			<button className="contact-delete" onClick={() => onDeleteContact()}>
				Delete
			</button>
		</div>
	);
}

export default ContactItem;
