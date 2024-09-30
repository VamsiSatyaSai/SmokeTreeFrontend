import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="bg-container">
        <form action="https://smoketreebackend-aryn.onrender.com/register" method="POST" className="user-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />

          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" required />

          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" required />

          <label htmlFor="zipcode">Zipcode:</label>
          <input type="text" id="zipcode" name="zipcode" required />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default App;
