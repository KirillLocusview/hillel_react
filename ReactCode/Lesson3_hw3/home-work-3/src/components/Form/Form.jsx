import React from "react";
import "../Form/Form.css";
class Form extends React.Component {
	constructor() {
		super();
		this.initialFieldsState = {
			firstName: "",
			lastName: "",
			phone: "",
			isEmpty: false,
		};
		this.state = {
			fields: this.initialFieldsState,
		};
	}

	onInputChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			fields: { ...this.state.fields, [name]: value },
		});
	};

	onAddContact = (e) => {
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
		this.props.addContack(this.state.fields);
		this.setState({
			fields: this.initialFieldsState,
		});
	};

	onHide = (e) => {
		e.preventDefault();
		this.setState({
			fields: this.initialFieldsState,
		});
		this.props.onAddHide(false);
	};

	render() {
		const { addPressed } = this.props;
		const { firstName, lastName, phone, isEmpty } = this.state.fields;
		return (
			<form className={`form ${addPressed ? "" : "hide"}`}>
				<div className="add-form">
					<div className="add-form__inputs">
						<input
							type="text"
							className={`add-form__input--first ${
								firstName === "" && isEmpty ? "empty" : ""
							}`}
							placeholder={`${
								firstName === "" && isEmpty ? "Fill in name" : "First Name"
							}`}
							value={firstName}
							onChange={this.onInputChange}
							name="firstName"
						/>
						<input
							type="text"
							className={`add-form__input--last ${
								lastName === "" && isEmpty ? "empty" : ""
							}`}
							placeholder={`${
								lastName === "" && isEmpty ? "Fill in last name" : "Last Name"
							}`}
							value={lastName}
							onChange={this.onInputChange}
							name="lastName"
						/>
						<input
							type="number"
							className={`add-form__input--phone ${
								phone === "" && isEmpty ? "empty" : ""
							}`}
							placeholder={`${
								phone === "" && isEmpty ? "Fill in phone" : "Phone number"
							}`}
							value={phone}
							onChange={this.onInputChange}
							name="phone"
						/>
					</div>
					<button className="add-form__button" onClick={this.onAddContact}>
						Add contact
					</button>
				</div>
				<button className="form__hide" onClick={(e) => this.onHide(e)}>
					HIDE
				</button>
			</form>
		);
	}
}

export default Form;
