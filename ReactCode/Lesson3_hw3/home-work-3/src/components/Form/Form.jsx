import React from "react";
import "../Form/Form.css";
function Form({ fields, onInputChange, onAddContack, onHide, addPressed }) {
	const { firstName, lastName, phone, isEmpty } = fields;
	const onHideForm = (e) => {
		e.preventDefault();
		onHide();
	};

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
				<button className="add-form__button" onClick={onAddContack}>
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
