import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";

const Main = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};

export default Main;
