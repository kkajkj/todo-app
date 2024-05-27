import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todosAdded } from "../store/features/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddToDoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(input)) {
      alert("enter a todo");
      setInput("");
      return;
    } else {
      dispatch(
        todosAdded({
          id: nanoid(),
          name: input,
        })
      );
      setInput("");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" w-full flex justify-center  space-x-3 sm:w-full"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="  shadow appearance-none border rounded px-3 py-2 bg-zinc-300 sm:w-full"
          placeholder="Add todo"
        />
        <button
          type="submit"
          className=" bg-blue-500 hover:bg-blue-700
         text-white font-bold  py-2 px-7 focus:outline-none focus:shadow rounded"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddToDoForm;
