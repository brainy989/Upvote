import React from "react";
import { useUpvotes } from "../../context/UpvotesContext";

const Upvote = ({ id }) => {
  const { toggleUpvote, upvotes } = useUpvotes();
  const upvote = upvotes.find((item) => item.id === id);

  if (!upvote) return null;

  const handleClick = () => {
    toggleUpvote(id);
  };

  return (
    <div
      style={{
        backgroundColor: upvote.selected ? "#E5E8FD" : "#F4F6F8",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      data-testid='upvote-1'
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={upvote.selected ? "#253CF2" : "#343A40"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </div>
  );
};

export default Upvote;
