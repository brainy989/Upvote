import React, { createContext, useContext, useEffect, useState } from "react";

const UpvotesContext = createContext();

export const useUpvotes = () => {
  const context = useContext(UpvotesContext);

  if (!context) {
    throw new Error("useUpvotes must be used within an UpvotesProvider");
  }
  return context;
};

export const UpvotesProvider = ({ children }) => {
  const [lists, setLists] = useState(() => {
    const savedLists = localStorage.getItem("upvotesLists");
    return savedLists ? JSON.parse(savedLists) : [];
  });

  useEffect(() => {
    localStorage.setItem("upvotesLists", JSON.stringify(lists));
  }, [lists]);

  const toggleUpvote = (listId, upvoteId) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              upvotes: list.upvotes.map((upvote) =>
                upvote.id === upvoteId
                  ? { ...upvote, selected: !upvote.selected }
                  : upvote,
              ),
            }
          : list,
      ),
    );
  };

  const addUpvote = (listId) => {
    const list = lists.find((list) => list.id === listId);
    const newId = list.upvotes.length + 1;
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              upvotes: [...list.upvotes, { id: newId, selected: false }],
            }
          : list,
      ),
    );
  };

  const removeUpvote = (listId) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              upvotes: list.upvotes.slice(0, -1),
            }
          : list,
      ),
    );
  };

  const createList = () => {
    const newListId = lists.reduce((max, item) => {
      return item.id > max ? item.id : max;
    }, 0) + 1;
    setLists((prevLists) => [...prevLists, { id: newListId, upvotes: [] }]);
  };

  const removeList = (listId) => {
    setLists((prevLists) => prevLists.filter(list => list.id !== listId));
  }

  return (
    <UpvotesContext.Provider
      value={{ lists, createList, removeList, toggleUpvote, addUpvote, removeUpvote }}
    >
      {children}
    </UpvotesContext.Provider>
  );
};
