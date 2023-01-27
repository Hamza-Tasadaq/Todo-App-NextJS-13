"use client";

import { useRouter } from "next/navigation";
import { MdClose } from "react-icons/md";

async function deleteTodo(id: String, refresh: () => void): Promise<void> {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });

  refresh();
}

interface IPropType {
  id: string;
  setShowModal: (arg0: boolean) => void;
}

const iconStyle = { color: "white", fontSize: "1.5em" };

const Modal = ({ id, setShowModal }: IPropType) => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen bg-black bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center">
      <div className="bg-[#201D47] rounded-lg px-4 py-8 max-w-sm  sm:w-72 relative flex flex-col space-y-4 overflow-hidden">
        <h1 className="max-w-[180px] mx-auto text-[#14bae3] font-semibold text-xl text-center">
          Are you confirm to Delete?
        </h1>
        <div className="w-full space-y-2">
          <button
            onClick={() => {
              deleteTodo(id, router.refresh);
              setShowModal(false);
            }}
            className="w-full rounded-md border-2 font-semibold text-lg border-[#14bae3] bg-[#14bae3] py-1.5  text-white"
          >
            Yes
          </button>
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="w-full rounded-md border-2 font-semibold text-lg  border-[#14bae3] bg-transparent py-1.5 text-[#14bae3]"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
