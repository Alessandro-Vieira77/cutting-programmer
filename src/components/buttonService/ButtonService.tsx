import { IoAdd } from "react-icons/io5";
import { Modal } from "../modal/Modal";
import { useState } from "react";

interface PropCourt {
  court: string;
}

export function ButtonService({ court }: PropCourt) {
  const [block, setBlock] = useState<string>("none");

  function handleClick() {
    setBlock("block");
  }

  function exit() {
    setBlock("none");
  }

  return (
    <>
      <div className="flex items-center justify-between w-full h-9 px-4 bg-white rounded-xl font-medium">
        {court}
        <button onClick={handleClick}>
          <IoAdd className="cursor-pointer" size={30} color="#0D2839" />
        </button>

        <Modal block={block} exit={exit} court={court} />
      </div>
      <div />
    </>
  );
}
