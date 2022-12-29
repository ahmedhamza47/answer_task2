import React from "react";

function List({ contacts, handleEdit, handleDelete }) {
  return (
    <div className="contain-table">
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>

            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact, i) => (
              <tr key={contact.id}>
                <td>{i + 1}</td>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>

                <td className="text-right">
                  <button
                    onClick={() => handleEdit(contact.id)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No contacts</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
