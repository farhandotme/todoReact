import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <>
      <Navbar />
      <div className="mx-10 my-5 rounded-lg p-5 bg-emerald-50 min-h-[80vh] ">
        <div className="flex justify-center items-center">
          <input
            className="text-3xl border-2 border-emerald-900 w-1/3 rounded-md px-3 py-1"
            type="text"
            placeholder="Enter your todo"
          />
          <button
            onClick={() => setTodos([...todos, todo])}
            className="text-3xl ml-5 text-white bg-emerald-800 border-2 border-emerald-900 hover:border-emerald-900 hover:bg-emerald-100 hover:text-emerald-900 transition-colors rounded-md px-3 py-2"
          >
            <FaPlus />
          </button>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div>
            <span className="text-2xl text-emerald-900 mt">
              dolor sit, amet consectetur adipisicing.
            </span>
          </div>
          <div className="flex ml-10">
            <button className="mr-4 bg-gray-800 px-4 py-2 text-white rounded">
              Edit
            </button>
            <button className="mr-8 bg-red-700 px-4 py-2 text-white rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;