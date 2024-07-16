import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";

const Main = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};

export default Main;
