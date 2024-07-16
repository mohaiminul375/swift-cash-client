import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
      <div className="flex flex-col items-center gap-10">
        <Link to='/login'>
          <button className="bg-[#e2136e] hover:bg-[#e2136db0] px-20 py-4 text-white text-2xl font-bold rounded-full">
            Login
          </button>
        </Link>
        <Link to='/register'>
          <button className="border-2 border-[#e2136e] px-20 py-4 text-black text-2xl font-bold rounded-full hover:text-white hover:bg-[#e2136e]">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
