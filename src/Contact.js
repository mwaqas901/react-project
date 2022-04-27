import React, { useEffect, useState } from "react";
//  Effects are declared inside the component so they have access to its props and state.
function Contact(props) {
  const [name, setName] = useState("Muhammad Waqas");
  const [jobtype, setJobtype] = useState("Software Engineer");
  useEffect(() => {
    console.warn("Hello from Hook",props.name);
  },[props.name]);
  return (
    <div className="contact-us">
      <h2>Hello from Contact Us Component (Functional Component)</h2>
      <p>Name : {name}</p>
      <p>Job Type: {jobtype}</p>
      <p>nameUsingProp: {props.name}</p>
      <button type="button" onClick={() => setName("M.Waqas")}>
        Update Name
      </button>
      <button type="button" onClick={() => setJobtype("Frontend Developer")}>
        Update Jobtype
      </button>
    </div>
  );
}

export default Contact;
