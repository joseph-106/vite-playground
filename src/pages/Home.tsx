import { vite } from "@/assets/img";
import { Link } from "react-router-dom";
import { FlexContainer, LinkButton } from "@/components/shared";

const Home = () => {
  return (
    <FlexContainer>
      <img src={vite} className="w-64" />
      <Link to={"/counter"}>
        <LinkButton text={"Counter"} />
      </Link>
    </FlexContainer>
  );
};

export default Home;
