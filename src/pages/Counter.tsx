import { TextInput, Count } from "@/components/counter";
import { Link } from "react-router-dom";
import { LinkButton } from "@/components/shared";

const Counter = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <TextInput />
      <Count />
      <Link to={"/"}>
        <LinkButton text={"Home"} />
      </Link>
    </div>
  );
};

export default Counter;
