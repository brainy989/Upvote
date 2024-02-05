import logo from "./logo.svg";
import "./App.css";

import { UpvotesProvider } from "./context/UpvotesContext";
import UpvotesList from "./components/UpvotesList";

function App() {
  return (
    <UpvotesProvider>
      <div className="flex flex-col text-center p-10">
        <h1 className="text-3xl font-bold mb-10">Upvotes List</h1>
        <UpvotesList />
      </div>
    </UpvotesProvider>
  );
}

export default App;
