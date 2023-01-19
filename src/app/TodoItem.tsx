"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "./Modal";

async function update(
  body: {
    id: String;
    isDone: Boolean;
  },
  refresh: () => void
): Promise<void> {
  await fetch("/api/todo/update", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(body),
  });
  refresh();
}

interface IPropType {
  todo: { id: string; name: string; isDone: boolean };
}

const iconStyle = { color: "white", fontSize: "1.5em" };

const TodoItem = ({ todo }: IPropType) => {
  const router = useRouter();

  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} id={todo.id} />}
      <div className="background px-4 py-2.5 rounded-lg flex items-center justify-between">
        <div className="flex items-center space-x-4 cursor-pointer">
          <input
            id={todo.id}
            className="bg-[#FFFFFF] border-none focus:outline-none focus-visible:outline-none focus-within:outline-none cursor-pointer w-8 h-8 border-3 border-[#201D47] text-[#201D47] outline-none rounded-md checked:bg-[#201D47]"
            type={"checkbox"}
            onChange={(e) => {
              update({ id: todo.id, isDone: e.target.checked }, router.refresh);
            }}
            checked={todo.isDone}
          />
          <label
            htmlFor={todo.id}
            className="font-bold cursor-pointer text-2xl text-[#201D47]"
          >
            {todo.name}
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <button
            className="bg-[#201D47] w-10 h-10 rounded-md font-bold text-[#FFFFFF]  flex items-center justify-center   border-2 border-[#201D47] "
            onClick={() => {
              setShowModal(true);
            }}
          >
            <MdDeleteOutline style={iconStyle} />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
