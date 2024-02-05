import React, { createContext, useContext, useEffect, useState } from "react";

const UpvotesContext = createContext();

export const useUpvotes = () => {
    const context = useContext(UpvotesContext);

    if(!context) {
        throw new Error('useUpvotes must be used within an UpvotesProvider');
    }
    return context;
}

export const UpvotesProvider = ({ children }) => {
    const [upvotes, setUpvotes] = useState(() => {
        const savedUpvotes = localStorage.getItem('upvotes');
        return savedUpvotes ? JSON.parse(savedUpvotes) : [];
    });

    useEffect(() => {
        localStorage.setItem('upvotes', JSON.stringify(upvotes));
    }, [upvotes]);

    const toggleUpvote = (id) => {
        setUpvotes((prevUpvotes) =>
            prevUpvotes.map((upvote) =>
                upvote.id === id ? { ...upvote, selected: !upvote.selected } : upvote
            )
        );
    };

    const addUpvote = () => {
        const newId = upvotes.length + 1;
        setUpvotes((prevUpvotes) => [...prevUpvotes, { id:newId, selected: false }]);
    };

    const removeUpvote = () => {
        setUpvotes(prevUpvotes => prevUpvotes.slice(0, -1));
    }

    return (
        <UpvotesContext.Provider value={{ upvotes, toggleUpvote, addUpvote, removeUpvote }}>
            {children}
        </UpvotesContext.Provider>
    )
}