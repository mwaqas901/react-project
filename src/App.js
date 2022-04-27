import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import UserData from "./UserData"
function App() {
  const [phone, setPhone] = useState("0211-429-0903");
  const [name,setName] = useState("Waqas")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Hi! Welcome to react js course</h1>
      <About phone={phone} />
      <Contact name={name} />
      <button
        className="update"
        onClick={() => {
          setPhone("0313-992-0982");
        }}
      >
        Update Phone From App
      </button>
      <button
        className="update"
        onClick={() => {
          setName("Waqas Ilyas");
        }}
      >
        Update Name From App For Functional Component
      </button>
      <Service />
      <UserData />
    </div>
  );
}

export default App;
