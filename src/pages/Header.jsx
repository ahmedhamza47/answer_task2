import React from "react";

function Header({ setIsAdding }) {
  return (
    <header className="text-center mt-5">
      <h1> Contact Manager</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button
          onClick={() => setIsAdding(true)}
          className="btn btn-primary mb-5"
        >
          Add Contacts
        </button>
      </div>
    </header>
  );
}

export default Header;
