import React from "react";

function Search({ setSearchItem }) {

const handleInputChange = (e) => {
  const searchTerm = e.target.value;
  setSearchItem(searchTerm)
}

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
