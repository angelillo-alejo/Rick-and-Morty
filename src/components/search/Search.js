import React from "react";

const Search = ({ setSearch, updatePageNumber }) => {
    const search = (e) => {
        e.preventDefault()
    }
    return (
        <form
          className={`${search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
        >
          <input
            onChange={(e) => {
              updatePageNumber(1);
              setSearch(e.target.value);
            }}
            placeholder="Search for characters"
            className={""}
            type="text"
          />
          <button
            onClick={search}
            className={"btn btn-primary fs-7"}
          >
            Search
          </button>
        </form>
      );
    };

export default Search;