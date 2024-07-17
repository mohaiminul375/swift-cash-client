import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hoooks/useAxiosPublic";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  // react hook form
  const { register, handleSubmit } = useForm();
  const onSubmit = async (user_info) => {
    console.log(user_info);
    const { data } = await axiosPublic.post("/login", user_info);

    console.log(data)
  };
  return (
    <section className="min-h-[calc(100vh-90px)]">
      <div className="mt-20 border-2 border-[#e2136e] md:w-96 mx-auto rounded-md bg-[#e2136e] text-white p-5">
        <h2 className="text-center font-bold text-2xl">Login</h2>
        {/* from */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Phone Number</span>
            </label>
            <input
              type="number"
              placeholder="number"
              className="input input-bordered text-black"
              required
              {...register("phone_number")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered text-black"
              required
              {...register("password")}
            />
          </div>
          <div>
            <button className="text-center w-full mt-5 bg-white rounded-md py-1 text-[#e2136e] font-bold">
              Login
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-lg">
          New here?{" "}
          <Link className="hover:underline" to="/register">
            Please Register{" "}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
