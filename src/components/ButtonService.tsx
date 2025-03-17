import { IoAdd } from "react-icons/io5";

interface PropCourt {
  court: string;
}

export function ButtonService({ court }: PropCourt) {
  return (
    <div className="flex items-center justify-between w-full h-9 px-4 bg-white rounded-xl font-medium">
      {court}
      <IoAdd size={30} color="#0D2839" />
    </div>
  );
}
