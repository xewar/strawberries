"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef(null);

  const onSearch = (event) => {
    event.preventDefault();
    //convert spaces to %20
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };
  //move cursor to input on search
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={onSearch} className="z-40">
      <input
        className=" focus:outline-none  pr-4 mt-4 md:mt-0  border-b-4 rounded-none border-opacity-70 border-yellow-800 text-2xl text-right w-[225px] placeholder-yellow-800 placeholder-opacity-50 bg-transparent"
        type="search"
        name="search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        style={{ resize: "horizontal" }}
        placeholder="Search the seeds..."
        ref={inputRef}
      />
    </form>
  );
};

export default Search;
