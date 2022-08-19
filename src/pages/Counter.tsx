import { TextInput, Count } from "@/components/Counter";
import { Link } from "react-router-dom";

const Counter = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <TextInput />
      <Count />
      <Link to={"/"}>
        <div className="flex items-center py-2 pl-2 pr-3 mt-3 text-sm font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-400 group">
          Home
        </div>
      </Link>
    </div>
  );
};

export default Counter;
