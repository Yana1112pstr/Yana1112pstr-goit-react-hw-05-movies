import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  // const currentQuery = (searchParams.get("query") || "");

  // useEffect(() => {
  //   if (currentQuery) {
  //     setQuery(currentQuery.toLocaleLowerCase())
  //     setSearchParams({ currentQuery });
  //   } else {
  //     setSearchParams({});
  //   }
  // }, [currentQuery])

  const handleChangeInput = (e) => {
    let query = e.target.value;
    if (query) {
      setQuery(query.toLowerCase())
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
  };
  console.log(query)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      alert("enter your request!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
          <input
          type="text"
          name="query"
          value={searchParams.get("query") || ""}
          onChange={handleChangeInput}
        />
        <button type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchForm;