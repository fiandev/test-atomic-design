import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layouts";
import Home from "../pages/Home";

export default function Router () {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    )
}