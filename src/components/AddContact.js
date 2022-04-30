import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "./withRouter";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are Mandatory!!");
      return;
    }
    this.props.sendContacts(this.state);
    this.setState({ name: "", email: "" });
    this.props.navigate("/");
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contacts </h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text-area"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            ></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text-area"
              placeholder="Email"
              name="name"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            ></input>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddContact);
