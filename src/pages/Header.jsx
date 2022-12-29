import React from "react";

function Header({ setIsAdding }) {
  return (
    <header className="text-center">
      <h1> Contact Management System</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button
          onClick={() => setIsAdding(true)}
          className="btn btn-primary mb-3"
        >
          Add Contacts
        </button>
      </div>
    </header>
  );
}

export default Header;
