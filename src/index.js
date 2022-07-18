import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./containers/FormContainer";
import "./containers/App.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div className="division">
        <div className="center">
          <h3> It's a delight to have you onboard </h3>
          <p> Help us know you better</p>
          <p> (This is how we optimize wobot as per your business needs. ) </p>
        </div>
        <FormContainer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
