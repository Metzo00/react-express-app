import React from "react";
import "./customers.css";

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    fetch("/customers")
      .then((res) => res.json())
      .then((customers) =>
        this.setState({ customers }, () =>
          console.log("Customers fetched...", customers)
        )
      );
  }

  render() {
    return (
      <div>
        <h1>Customers List</h1>
        <ul>
          {this.state.customers.map((customer) => (
            <li key={customer.id}>
              name: {customer.fN} | surname: {customer.lN}
            </li>
          ))}
          ;
        </ul>
      </div>
    );
  }
}

export default Customers;
