import React from "react";
import Upvote from "../Upvote";
import { useUpvotes } from "../../context/UpvotesContext";

const UpvotesList = ({ listId }) => {
  const { lists, removeList, addUpvote, removeUpvote } = useUpvotes();

  const list = lists.find((list) => list.id === listId);

  const handleAddUpvote = () => {
    addUpvote(listId);
  };

  const handleRemoveUpvote = () => {
    removeUpvote(listId);
  };

  const handleRemoveList = () => {
    removeList(listId);
  };

  return (
    <div className="my-4 flex w-full items-center gap-2">
      <button
        className="flex w-fit rounded-lg bg-red-500 p-4 text-white hover:bg-red-400"
        onClick={handleRemoveList}
      >
        Remove
      </button>
      <div className="min-h-16 flex w-full flex-wrap gap-2 rounded-lg border-2 border-gray-300 p-3">
        {list.upvotes.map((upvote) => {
          return <Upvote key={upvote.id} id={upvote.id} listId={listId} />;
        })}
      </div>
      <button
        className="flex-start flex rounded-lg border border-gray-400 bg-grams-hair p-4"
        onClick={handleAddUpvote}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`h-6 w-6 fill-none stroke-[currentColor] stroke-2`}
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <button
        className="flex-start flex rounded-lg border border-gray-400 bg-grams-hair p-4"
        onClick={handleRemoveUpvote}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`h-6 w-6 fill-none stroke-[currentColor] stroke-2`}
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
};

export default UpvotesList;
