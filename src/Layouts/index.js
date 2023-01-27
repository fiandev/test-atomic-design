import { Outlet } from "react-router";
import Header from "./Header/index";

export default function Layout ({ childrens }) {
  return (
      <div className="min-h-screen relative container overflow-hidden">
        <Header />
        <Outlet />
      </div>
    )
}