import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import ScrollAnimation from "../../ScrollAnimation";
import { useNavigate } from "react-router-dom";

export default function HeaderSearch() {
  const [showInput, setShowInput] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  function showInputSearch() {
    setShowInput(true);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowInput(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSearch(e) {
    if (e.key === "Enter" && searchText.trim() !== "") {
      navigate(`/search-not-found?q=${encodeURIComponent(searchText)}`);
    }
  }

  return (
    <div className="relative top-1" ref={inputRef}>
      <button onClick={showInputSearch}>
        <IoSearchOutline className="text-xl md:text-2xl cursor-pointer" />
      </button>
      {showInput && (
        <ScrollAnimation
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="w-[230px] h-[50px] rounded-[50px_0px_50px_50px] shadow bg-white/95 absolute right-1 top-7">
            <input
              type="search"
              placeholder="search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleSearch}
              className="h-full w-full px-4 outline-none focus-visible:outline-[#D39C4A] rounded-[50px_0px_50px_50px]"
            />
          </div>
        </ScrollAnimation>
      )}
    </div>
  );
}
