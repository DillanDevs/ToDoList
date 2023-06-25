import TakList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Filters from "./components/Filters/Filters.components";

function App() {
  return (
    <main className="bg-zinc-900 h-screen flex">
     {/*  <div className="bg-zinc-700 h-screen p-20">
        <AboutMe />
      </div> */}
      <div className="container mx-auto p-10">
        <TaskForm />
        <TakList />
        <div className="my-3">
          <Filters />
        </div>
      </div>
    </main>
  );
}

export default App;
