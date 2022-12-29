import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

function Add({ contacts, setcontacts, setIsAdding }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: false,
      });
    }

    const id = contacts.length + 1;
    const newcontact = {
      id,
      firstName,
      lastName,
      email,
      phone,
    };
    contacts.push(newcontact);
    setcontacts(contacts);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container mt-4">
      <form onSubmit={handleAdd}>
        <h1>Add Contact</h1>
        <label htmlFor="firstName" className="mt-5">
          First Name
        </label>
        <input
          name="firstName"
          value={firstName}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={textInput}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          value={lastName}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={email}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          name="number"
          value={phone}
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setPhone(e.target.value)}
        />{" "}
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" className="btn btn-primary" />
          <input
            style={{ marginLeft: "12px" }}
            className="btn btn-danger"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
