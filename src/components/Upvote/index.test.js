import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Upvote from "./index";
import { UpvotesProvider } from "../../context/UpvotesContext";

test("selection changes based on click event", () => {
  render(
    <UpvotesProvider>
      <Upvote id={1} />
    </UpvotesProvider>
  );
  
  const upvoteElement = screen.getByTestId('upvote-1');

  fireEvent.click(upvoteElement);

  expect(upvoteElement).toHaveStyle("background-color: #E5E8FD");
});
