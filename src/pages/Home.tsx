import { vite } from "@/assets/img";
import { Link } from "react-router-dom";
import { LinkButton } from "@/components/shared";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={vite} className="w-64" />
      <Link to={"/counter"}>
        <LinkButton text={"Counter"} />
      </Link>
    </div>
  );
};

export default Home;
