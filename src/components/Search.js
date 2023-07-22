"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const onSearch = (event) => {
    event.preventDefault();
    //convert spaces to %20
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };
  return (
    <form onSubmit={onSearch}>
      <input
        className=" focus:outline-none p-.5 pt-10 md:mt-0 rounded-md border-b-4 rounded-none border-opacity-70 border-yellow-800 text-2xl p-3 px-3 text-right w-full md:w-[275px] pr-12 placeholder-yellow-800  focus:placeholder-white"
        type="search"
        name="search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        style={{ resize: "horizontal" }}
        placeholder="Search"
      />
    </form>
  );
};

export default Search;
