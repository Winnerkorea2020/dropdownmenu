import React from "react";

const Search = () => {
  return (
    <form>
      <div className="flex items-center w-full">
        <input
          type="text"
          placeholder="Search"
          className="border py-2.5 px-5 rounded-l-lg w-full xl:w-[350px] outline-none"
        />
        <input
          className="border py-2.5 px-5 rounded-r-lg  bg-blue-500 text-white hover:bg-blue-600"
          type="submit"
          value={`검색`}
        />
      </div>
    </form>
  );
};

export default Search;
