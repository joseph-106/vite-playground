import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Main } from "@/pages";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
