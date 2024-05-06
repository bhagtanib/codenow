import React, { useEffect, useState, useRef } from "react";
import styles from "./HomeListHeader.module.css";

const DropDownItem = ({ title, dropdownItems, isOpen, toggleDropdown }) => {
  return (
    <div>
      <span className={styles.item} onClick={toggleDropdown}>
        {title}
        <img
          src="https://img.icons8.com/ios-filled/50/FFFFFF/expand-arrow--v1.png"
          alt="expand-arrow--v1"
        />
      </span>
      {isOpen && (
        <div className={styles.dropdownItems}>
          {dropdownItems.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

const HomeListHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownIdx) => {
    if (openDropdown === dropdownIdx) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownIdx);
    }
  };

  const modelDataList = {
    listsData: ["Blind 75", "Blind 100", "Blind 50"],
    difficultyData: ["Easy", "Medium", "Hard"],
    statsData: ["Solved", "Unsolved"],
  };

  // Close dropdown when clicking outside
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <DropDownItem
        dropdownItems={modelDataList.listsData}
        title={"Lists"}
        isOpen={openDropdown === "Lists"}
        toggleDropdown={() => toggleDropdown("Lists")}
      />
      <DropDownItem
        dropdownItems={modelDataList.difficultyData}
        title={"Difficulty"}
        isOpen={openDropdown === "Difficulty"}
        toggleDropdown={() => toggleDropdown("Difficulty")}
      />
      <DropDownItem
        dropdownItems={modelDataList.statsData}
        title={"Status"}
        isOpen={openDropdown === "Status"}
        toggleDropdown={() => toggleDropdown("Status")}
      />
      <DropDownItem
        dropdownItems={modelDataList.listsData}
        title={"Tags"}
        isOpen={openDropdown === "Tags"}
        toggleDropdown={() => toggleDropdown("Tags")}
      />
      <input placeholder="search problems..." />
      <img
        width="40"
        height="40"
        src="https://img.icons8.com/glyph-neue/64/FFFFFF/shuffle.png"
        alt="shuffle"
      />{" "}
    </div>
  );
};

export default HomeListHeader;
