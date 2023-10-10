import React from "react";

const AmazonSearchBar: React.FC = () => {
  return (
    <div className="flex items-center bg-gray-100 h-[2.5rem] p-2 rounded-md">
      <div className="flex-none p-1 bg-gray-300 rounded-md ml-[-2rem]">
        <select
          className="bg-gray-300 h-[2rem] text-sm outline-none"
          defaultValue="all"
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Search Amazon"
        className="flex-grow p-2 outline-none bg-transparent"
      />

      <div className="flex-none mr-[-1rem] p-2 bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default AmazonSearchBar;
