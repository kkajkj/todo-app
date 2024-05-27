import React from "react";
import AddToDoForm from "./AddToDoForm";
import UpdateToDoForm from "./UpdateToDoForm";
import SingleTodoCard from "./SingleTodoCard";
import { useDispatch, useSelector } from "react-redux";
import { todosCleared } from "../store/features/todo/todoSlice";
import { FiEdit } from "react-icons/fi";
const Card = () => {
  const myTodos = useSelector((state) => state.todos.todos);
  const toggleForm = useSelector((state) => state.todos.toggleForm);
  const dispatch = useDispatch();

  return (
    <div
      className=" w-fit sm:w-4/5 md:w-3/4 lg:w-1/2 xl:3/4 h-3/4 min-h-max bg-amber-300 shadow-2xl rounded-lg p-4
    sm:p-2 flex flex-col items-center space-y-10 justify-between"
    >
      <div className=" flex flex-col items-center space-y-10 w-full h-3/4 min-h-max ">
        <h1 className=" text-3xl font-semibold underline">My Todo List</h1>
        <div className=" w-3/4">
          {toggleForm ? <AddToDoForm /> : <UpdateToDoForm />}
        </div>
        {toggleForm ? (
          <div className=" w-full flex flex-col  md:w-3/4 sm:justify-center sm:w-3/4">
            <ul className="  w-full max-h-56 overflow-y-scroll overflow-x-hidden ">
              {myTodos?.map((todo) => (
                <li className="mb-3" key={todo.id}>
                  <SingleTodoCard id={todo.id} name={todo.name} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className=" space-y-8">
            <p className=" text-2xl">Edit your todo Item</p>
            <FiEdit className=" size-10 text-green-600 mx-auto" />
          </div>
        )}
      </div>

      {toggleForm && (
        <button
          onClick={() => {
            dispatch(todosCleared());
            localStorage.removeItem("Todos");
          }}
          className=" bg-red-500 hover:bg-red-700 text-white p-2 font-bold rounded
       focus:outline-none "
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default Card;
