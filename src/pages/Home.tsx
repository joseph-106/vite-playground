import { vite } from "@/assets/img";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={vite} className="w-64" />
      <Link to={"/counter"}>
        <div className="flex items-center py-2 pl-2 pr-3 mt-3 text-sm font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-400 group">
          Counter
        </div>
      </Link>
    </div>
  );
};

export default Home;
