import React, { useState } from "react";
import "../Form/Form.css";

function Form({ addNewContact, addHideToggle, changeAddHideToggle }) {
	const initialFieldsState = {
		firstName: "",
		lastName: "",
		phone: "",
		isEmpty: false,
	};
	const [fields, setFields] = useState(initialFieldsState);
	const { firstName, lastName, phone, isEmpty } = fields;

	const onInputChange = (e) => {
		const { value, name } = e.target;
		setFields({ ...fields, [name]: value });
	};

	const onAddContact = (e) => {
		e.preventDefault();
		for (let key in fields) {
			if (fields[key] === "") {
				setFields({ ...fields, isEmpty: true });
				return;
			}
		}
		addNewContact(fields);
		setFields(initialFieldsState);
	};

	const onHideForm = (e) => {
		e.preventDefault();
		setFields(initialFieldsState);
		changeAddHideToggle();
	};

	return (
		<form className={`form ${addHideToggle ? "" : "hide"}`}>
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
						onChange={onInputChange}
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
						onChange={onInputChange}
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
						onChange={onInputChange}
						name="phone"
					/>
				</div>
				<button className="add-form__button" onClick={onAddContact}>
					Add contact
				</button>
			</div>
			<button className="form__hide" onClick={(e) => onHideForm(e)}>
				HIDE
			</button>
		</form>
	);
}

export default Form;
