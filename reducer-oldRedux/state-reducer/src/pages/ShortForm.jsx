import React, { useState } from "react";

function ShortForm() {
  const [firstName, setFirstName] = useState("");

  const submit = (event) => {
    event.preventDefault();
    console.log(firstName);
  };

  return (
    <div className="container">
      <form className="wrapper" onSubmit={submit}>
        <div className="wrappers">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="wrappers">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="wrappers">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="name"
            id="name"
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="wrappers">
          <label htmlFor="name">password</label>
          <input
            type="password"
            name="name"
            id="name"
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
      {/* <Child /> */}
    </div>
  );
}

export default ShortForm;
