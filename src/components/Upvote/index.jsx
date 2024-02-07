import React from "react";
import clsx from "clsx";

import { useUpvotes } from "../../context/UpvotesContext";

const Upvote = ({ id, listId }) => {
  const { lists, toggleUpvote } = useUpvotes();

  const list = lists.find((list) => list.id === listId);
  const upvote = list.upvotes.find((item) => item.id === id);

  if (!upvote) return null;

  const handleClick = () => {
    toggleUpvote(listId, id);
  };

  return (
    <div
      className={clsx("cursor-pointer rounded-2xl p-4", {
        "bg-glitter": upvote.selected,
        "bg-grams-hair": !upvote.selected,
      })}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={clsx("h-6 w-6 fill-none stroke-2", {
          "stroke-palatinate-blue": upvote.selected,
          "stroke-antarctic-deep": !upvote.selected,
        })}
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </div>
  );
};

export default Upvote;
