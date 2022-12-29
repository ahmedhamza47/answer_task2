import React, { useState } from "react";
import Swal from "sweetalert2";

function Edit({ contacts, selectedcontact, setcontacts, setIsEditing }) {
  const id = selectedcontact.id;

  const [firstName, setFirstName] = useState(selectedcontact.firstName);
  const [lastName, setLastName] = useState(selectedcontact.lastName);
  const [email, setEmail] = useState(selectedcontact.email);
  const [phone, setphone] = useState(selectedcontact.phone);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const contact = {
      id,
      firstName,
      lastName,
      email,
      phone,
    };

    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === id) {
        contacts.splice(i, 1, contact);
        break;
      }
    }

    setcontacts(contacts);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${contact.firstName} ${contact.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container mt-4">
      <form onSubmit={handleUpdate}>
        <h1>Edit contact</h1>
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
          onChange={(e) => setphone(e.target.value)}
        />{" "}
        <div style={{ marginTop: "30px" }}>
          <button type="submit" className="btn btn-primary">
            {" "}
            Add
          </button>
          <button
            style={{ marginLeft: "12px" }}
            className="btn btn-danger"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          >
            {" "}
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
