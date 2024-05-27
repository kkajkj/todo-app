import React, { useState } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { todoDeleted, todoToggleform } from "../store/features/todo/todoSlice";

const SingleTodoCard = ({ name, id }) => {
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className=" w-full flex justify-between items-center rounded shadow bg-green-400 py-2">
      <div className="px-4">
        <h1 className={done ? "font-semibold line-through" : "font-semibold"}>
          {name}
        </h1>
      </div>
      <div className="flex  space-x-4 px-4">
        <FaRegCheckSquare
          onClick={() => setDone(!done)}
          className=" text-blue-700 size-7 shrink"
        />
        <FiEdit
          onClick={() =>
            dispatch(
              todoToggleform({
                id: id,
                name: name,
              })
            )
          }
          className=" text-amber-950 size-7 shrink"
        />
        <MdDeleteOutline
          onClick={() => dispatch(todoDeleted(id))}
          className=" text-red-600 size-7 font-bold shrink"
        />
      </div>
    </div>
  );
};

export default SingleTodoCard;
