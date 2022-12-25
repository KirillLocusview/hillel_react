import React from "react";
import "./ContactItem.css";

class Contact extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { firstName, lastName, phone, id } = this.props.contact;
		return (
			<div className="contact">
				<div className="contact-data">
					<div className="contact-data__first-name">{firstName}</div>
					<div className="contact-data__last-name">{lastName}</div>
					<div className="contact-data__phone">{phone}</div>
				</div>
				<button
					className="contact-delete"
					onClick={(e) => this.props.onDelete(e, id)}
				>
					Delete
				</button>
			</div>
		);
	}
}

export default Contact;
