import React, { useState } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";

import { contactsData } from "../data/index";

function Dashboard() {
  const [contacts, setcontacts] = useState(contactsData);
  const [selectedcontact, setSelectedcontact] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [contact] = contacts.filter((contact) => contact.id === id);

    setSelectedcontact(contact);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [contact] = contacts.filter((contact) => contact.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${contact.firstName} ${contact.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setcontacts(contacts.filter((contact) => contact.id !== id));
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            contacts={contacts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}

      {isAdding && (
        <Add
          contacts={contacts}
          setcontacts={setcontacts}
          setIsAdding={setIsAdding}
        />
      )}
      {/* Edit */}
      {isEditing && (
        <Edit
          contacts={contacts}
          selectedcontact={selectedcontact}
          setcontacts={setcontacts}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default Dashboard;
