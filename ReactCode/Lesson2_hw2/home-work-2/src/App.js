import React from "react";
import "./App.css";
import Name from "./components/Name/Name";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			userName: "Kirill",
			count: 0,
			rows: [
				{ id: 1, title: 1 },
				{ id: 2, title: 2 },
				{ id: 3, title: 3 },
			],
		};
	}

	onButtonClick = () => {
		this.setState({ count: this.state.count + 1 });
	};

	onAddElement = (e) => {
		this.setState({
			rows: [
				...this.state.rows,
				{
					id: Date.now(),
					title: this.state.rows[this.state.rows.length - 1].title + 1,
				},
			],
		});
	};
	render() {
		return (
			<>
				<Name userName={this.state.userName} />

				{this.state.count}
				<button onClick={this.onButtonClick}>Click me</button>
				<ul>
					{this.state.rows.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
				<button onClick={this.onAddElement}>Add Element</button>
			</>
		);
	}
}

export default App;
