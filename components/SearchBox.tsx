"use client";

//! HOOKS
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation"; //! Next.JS 13

const SearchBox = () => {
  const [inputData, setInputData] = useState("");
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputData) return;

    router.push(`/search?term=${inputData}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <input
        type="search"
        placeholder="Search keywords..."
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-red-500"
      />

      <button
        type="submit"
        disabled={!inputData}
        className="text-red-500 disabled:text-gray-400">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
