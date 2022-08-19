import { vite } from "@/assets/img";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={vite} className="w-64" />
      <h1 className="text-3xl font-pretendard text-primary">Hello World!</h1>
    </div>
  );
};

export default Main;
