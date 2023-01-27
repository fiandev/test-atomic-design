import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/index";
import Home from "./pages/Home";
import Router from "./Router";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            { /* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}