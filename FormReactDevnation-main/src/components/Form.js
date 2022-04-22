import React, { useState } from "react";
import DisplayResult from "./DisplayResult";

const Form = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState([]);
  const passwordInput = (e) => {
    setpassword(e.target.value);
  };
  const emailInput = (e) => {
    setemail(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    let dataObj = {
      email,
      password,
    };
    setdata([...data, dataObj]);
    console.log(dataObj);
    setemail("");
    setpassword("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={emailInput}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={passwordInput}
            value={password}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
      <DisplayResult dataProp={data} />
    </div>
  );
};

export default Form;
