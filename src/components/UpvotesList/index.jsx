import React from "react";
import Upvote from "../Upvote";
import { useUpvotes } from "../../context/UpvotesContext";

const UpvotesList = () => {
  const { upvotes, addUpvote, removeUpvote } = useUpvotes();

  return (
    <div className="flex items-start w-full gap-2 p-4">
      <div className="flex flex-wrap gap-2 w-full min-h-[60px] p-3 border border-gray-400 rounded-lg">
        {upvotes.map((upvote) => {
          return <Upvote key={upvote.id} id={upvote.id}/>;
        })}
      </div>
      <button className="bg-[#F4F6F8] rounded-lg p-4 flex flex-start border border-gray-400" onClick={addUpvote}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <button className="bg-[#F4F6F8] rounded-lg p-4 flex flex-start border border-gray-400" onClick={removeUpvote}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
};

export default UpvotesList;
