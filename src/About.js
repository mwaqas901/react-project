import React from "react";
import "./App.css";
// Following is a Class Component
// Lifecycle methods is used with the class components in React Js.
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "Muhammad",
      lname: "Waqas",
      age: 24,
    };
    console.log("Constructor is called before the component creation");
  }
  componentDidMount() {
    console.log(
      "componentDidMount method is called just after the creation of component."
    );
    console.warn("Phone is updated",this.props.phone)
  }
  componentDidUpdate(){
        console.warn("state is updated");
      //   console.warn("Phone is updated",this.props.phone)
  }
  render() {
    return (
      <div className="about-us">
        <h2>Hello From About Us Component (Class Component)</h2>
        <p>
         Full Name: {this.state.fname} {this.state.lname} <br/>
         Age: {this.state.age}
        </p>
        <p>{this.props.phone}</p>
        <button
          onClick={() => {
            this.setState({ fname: "M." });
          }}
        >
          Update State
        </button>
      </div>
    );
  }
}
export default About;
