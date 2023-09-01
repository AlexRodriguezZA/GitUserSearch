import search from "../assets/Icons/Search.svg";

import { fetchDataUsers } from "../utils/SearchUserGit";
import { useState } from "react";

const Search = ({ setUser }) => {
  const [Search, setSearch] = useState("");
  const [Error, setError] = useState(false)

  const handleSearch = async () => {
    if (Search === "" || Search === undefined) {
      setError(true)
      return;
    }
    const result = await fetchDataUsers(Search)
    setError(false);
    setSearch("");
    setUser(result)
    console.log(result)
  };
  return (
    <div className="w-11/12 blue-card-bg hover:shadow-sm hover:shadow-blue-button bg-blue-card justify-center gap-2 flex h-16 rounded-2xl md:justify-between md:gap-0 md:items-center">
      <div className="h-full w-8 flex justify-center items-center md:w-7 md:ml-2">
        <img src={search} className="w-full" alt="" />
      </div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="bg-blue-card text-sm text-white h-11/12 px-1 border-none placeholder:text-white md:text-md md:w-4/5 md:h-4/6"
        placeholder="Search Github username..."
      />
      <button onClick={()=>handleSearch()} className="bg-blue-button mt-2 mb-2 rounded-lg text-sm text-white font-bold py-3 px-4 md:mr-2 ">
        Search
      </button>
    </div>
  );
};

export default Search;
