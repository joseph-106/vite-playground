import { vite } from "./assets/img";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img src={vite} className="w-64" />
      <h1 className="text-3xl font-bold">Hello world!</h1>
    </div>
  );
}

export default App;
