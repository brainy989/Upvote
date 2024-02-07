import { UpvotesProvider, useUpvotes } from "./context/UpvotesContext";
import UpvotesList from "./components/UpvotesList";

function App() {
  return (
    <UpvotesProvider>
      <AppContent />
    </UpvotesProvider>
  );
}

const AppContent = () => {
  const { lists, createList } = useUpvotes();

  return (
    <div className="flex flex-col p-10 text-center">
      <h1 className="mb-10 text-3xl font-bold">Upvotes List</h1>
      <button
        className="flex w-fit rounded-lg bg-blue-500 p-4 text-white hover:bg-blue-400"
        onClick={createList}
      >
        Add List
      </button>
      {lists.map((list) => (
        <UpvotesList key={list.id} listId={list.id} />
      ))}
    </div>
  );
};

export default App;
