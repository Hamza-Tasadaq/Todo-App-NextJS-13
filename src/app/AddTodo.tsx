"use client";

import { useRouter } from "next/navigation";
import { ElementRef, useRef, useState } from "react";

async function addTodo(
  name: string,
  setTaskName: (arg0: string) => void,
  setLoading: (arg0: boolean) => void,
  refresh: () => void
) {
  await fetch("/api/todo/add", {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
  setTaskName("");
  setLoading(false);
}

const AddTodo = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="flex space-x-4">
      <input
        className="flex-1 font-semibold outline-none py-1.5 rounded-md px-3"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        type="text"
      />
      <button
        disabled={loading}
        className={`bg-[#14bae3] rounded-md font-bold text-[#FFFFFF]  px-4 sm:px-8 py-1.5  border-2 border-[#14bae3] ${
          loading && "opacity-50"
        } `}
        onClick={() => {
          if (taskName) {
            setLoading(true);
            addTodo(taskName, setTaskName, setLoading, router.refresh);
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
