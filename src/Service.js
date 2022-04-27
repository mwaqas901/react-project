import React, { useState, useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
function Service() {
  const [val, setVal] = useState("Muhammad Waqas");
  const [user,setUser] = useState([]);
  const test = (e) => {
    console.log("Your're adding something in input field", e.target.value);
    setVal(e.target.value);
  };
//   const users = [
//     { name: "Waqas", age: 24 },
//     { name: "Umer", age: 29 },
//     { name: "Aslam", age: 32 },
//     { name: "Ali", age: 20 },
//   ];
  useEffect(() => {
      fetch("http://dummy.restapiexample.com/api/v1/employees").then((data) => {
        data.json().then((response)=>{
              console.log("response",response);
              setUser(response.data)
        })
      });
    },[]);
  return (
    <div className="container">
      <h1>Welcome to our Services</h1>
      <Form.Control
        type="text"
        value={val}
        onChange={test}
        className="w-25 mx-auto"
      />
      <h5>{val}</h5>
      <Button
        variant="primary"
        onClick={() => {
          alert(val);
        }}
      >
        Click Me
      </Button>
      <h3>Let show listing here:</h3>
      <Table className="my-4" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Employee Salary</th>
            <th>Employee Age</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{item.employee_name}</td>
              <td>Rs-/ {item.employee_salary}</td>
              <td>{item.employee_age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Service;
