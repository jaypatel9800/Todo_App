import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      list: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.text.length === 0) {
      return;
    } else {
      const addItem = {
        text: this.state.text,
        id: Date.now(),
      };
      this.setState({ list: this.state.list.concat(addItem), text: "" });
    }
  }
  handleDelete(id) {
    const old = [...this.state.list];
    const updated = old.filter((item) => item.id !== id);
    this.setState({ list: updated });
  }
  render() {
    return (
      <div className="section">
          <h1>Daily Notes...</h1>
        <input
          type="text"
          placeholder="Write notes here..."
          onChange={this.handleChange}
          value={this.state.text}
          name="text"
        />
        <button onClick={this.handleSubmit} className="submit-button">ADD</button>
        <br />
        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => this.handleDelete(item.id)} className="delete-button">X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;