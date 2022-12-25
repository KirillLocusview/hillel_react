import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import "../ContactBook/ContactBook.css";

class ContactBook extends React.Component {
	render() {
		const { contacts, onDelete, addPressed, onAddHide } = this.props;
		return (
			<div className="contact-container">
				{" "}
				<div className="contact-book">
					{contacts.map((contact) => (
						<ContactItem
							contact={contact}
							key={contact.id}
							onDelete={onDelete}
						/>
					))}
				</div>
				<button
					className={`contact-book__new-contact ${addPressed ? "hide" : ""}`}
					onClick={(e) => onAddHide(e)}
				>
					{" "}
					ADD NEW CONTACT{" "}
				</button>
			</div>
		);
	}
}

export default ContactBook;
