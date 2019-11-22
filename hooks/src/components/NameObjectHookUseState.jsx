import React, { useState } from "react";

const NameObjectHookUseState = () => {

  const [name, setName] = useState({firstName:"", lastName: ""});

  const handleChange = e => {
    console.log(e.target.name,'=',e.target.value)
    setName({
      ...name,
      [e.target.name]: e.target.value      
    });
  }

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        name="firstName"
        onChange={handleChange}
      />
      <input
        type="text"
        value={name.lastName}
        name="lastName"
        onChange={handleChange}
      />
      <h2>First Name: {name.firstName}</h2>
      <h2>Last Name: {name.lastName}</h2>
    </form>
  );
}

export default NameObjectHookUseState;