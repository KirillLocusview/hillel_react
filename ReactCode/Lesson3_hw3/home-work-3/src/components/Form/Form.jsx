import React from "react";
import "../Form/Form.css";

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			phone: "",
			isEmpty: false,
		};
	}

	onInputChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			...this.state,
			[name]: value,
		});
	};

	onAddContack = (e) => {
		e.preventDefault();
		for (let key in this.state) {
			if (this.state[key] === "") {
				this.triggerEmpty(true);
				return;
			}
		}
		this.triggerEmpty(false);
	};

	triggerEmpty = (state) => {
		this.setState({ isEmpty: state });
	};

	render() {
		return (
			<form className="add-form">
				<div className="add-form__inputs">
					<input
						type="text"
						className={`add-form__input--first ${
							this.state.firstName === "" && this.state.isEmpty ? "empty" : ""
						}`}
						placeholder={`${
							this.state.firstName === "" && this.state.isEmpty
								? "Fill in name"
								: "First Name"
						}`}
						value={this.state.firstName}
						onChange={this.onInputChange}
						name="firstName"
					/>
					<input
						type="text"
						className={`add-form__input--last ${
							this.state.lastName === "" && this.state.isEmpty ? "empty" : ""
						}`}
						placeholder={`${
							this.state.lastName === "" && this.state.isEmpty
								? "Fill in last name"
								: "Last Name"
						}`}
						value={this.state.lastName}
						onChange={this.onInputChange}
						name="lastName"
					/>
					<input
						type="tel"
						className={`add-form__input--phone ${
							this.state.phone === "" && this.state.isEmpty ? "empty" : ""
						}`}
						placeholder={`${
							this.state.phone === "" && this.state.isEmpty
								? "Fill in phone"
								: "Phone number"
						}`}
						value={this.state.phone}
						onChange={this.onInputChange}
						name="phone"
					/>
				</div>
				<button className="add-form__button" onClick={this.onAddContack}>
					Add contact
				</button>
			</form>
		);
	}
}

export default Form;
