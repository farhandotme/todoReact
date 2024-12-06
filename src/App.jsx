import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
uuidv4();

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handelAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handelCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return (item.id = id);
    });

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="mx-10 my-5 rounded-lg p-5 bg-emerald-50 min-h-[80vh] ">
        <div className="flex justify-center items-center">
          <input
            className="text-3xl border-2 border-emerald-900 w-1/3 rounded-md px-3 py-1"
            type="text"
            placeholder="Enter your todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            onClick={handelAdd}
            className="text-3xl ml-5 text-white bg-emerald-800 border-2 border-emerald-900 hover:border-emerald-900 hover:bg-emerald-100 hover:text-emerald-900 transition-colors rounded-md px-3 py-2"
          >
            <FaPlus />
          </button>
        </div>
        {todos.map((item) => {
          return (
            <div className="flex justify-center">
              <div className="flex p-5 rounded-lg justify-between items-center w-1/3 mt-10 border-2 bg-emerald-200">
                <input
                  onChange={handelCheckBox}
                  type="checkbox"
                  value={item.isCompleted}
                  className=""
                  name={item.id}
                />
                <div>
                  <span
                    className={
                      item.isCompleted
                        ? "line-through text-2xl text-emerald-900 mt"
                        : "text-2xl text-emerald-900 mt"
                    }
                  >
                    {item.todo}
                  </span>
                </div>
                <div className="flex ml-10">
                  <button className="mr-4 bg-gray-800 px-4 py-2 text-white rounded">
                    Edit
                  </button>
                  <button className=" bg-red-700 px-4 py-2 text-white rounded">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
