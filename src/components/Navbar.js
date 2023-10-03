import React, { useState } from "react";
import "../App.css";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Add searchQuery state

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery); // Pass the searchQuery to the parent component
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <form className="d-flex" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search "
            aria-label="Search"
            value={searchQuery} // Set input value to searchQuery
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
