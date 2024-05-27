import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoUpdated } from "../store/features/todo/todoSlice";

const UpdateToDoForm = () => {
  const todoUpdate = useSelector((state) => state.todos.todoUpdate);
  const [update, setUpdate] = useState(todoUpdate.name);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(update)) {
      alert("Please enter a todoUpdate");
      setUpdate("");
    } else {
      dispatch(
        todoUpdated({
          id: todoUpdate.id,
          name: update,
        })
      );
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center space-x-3 w-full   sm:w-full"
      >
        <input
          type="text"
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
          className=" shadow appearance-none border rounded px-3 py-2 bg-zinc-300"
          placeholder="Update todo"
        />
        <button
          type="submit"
          className=" bg-orange-500 hover:bg-orange-700 rounded 
         text-white font-bold py-2 px-7 focus:outline-none focus:shadow"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateToDoForm;
