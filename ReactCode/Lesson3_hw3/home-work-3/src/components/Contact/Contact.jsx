import React from "react";
import "../Contact/Contact.css";

class Contact extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="contact">
				<div className="contact-data">
					<div className="contact-data__last-name">Smirnov</div>
					<div className="contact-data__first-name">Kirill</div>
					<div className="contact-data__phone">0548350985</div>
				</div>
				<button>Delete</button>
			</div>
		);
	}
}

export default Contact;
