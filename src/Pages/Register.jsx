import { useForm } from "react-hook-form";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import useAxiosPublic from "../hoooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  // import axios
  const axiosPublic = useAxiosPublic();
  // react hook form
  const { register, handleSubmit,reset } = useForm();
// navigate
  const navigate=useNavigate()



  const onSubmit = async (user_info) => {
    user_info.status='pending'
    user_info.role='User'
    console.log(user_info);
    const { data } = await axiosPublic.post("/users", user_info);
    console.log(data);
    if(data.insertedId){
      reset()
      Swal.fire("Register Successfully, Your account will be active  with in 24 hours");
      setTimeout(() => {
        navigate('/')
      }, 1000);
     
    } else if(data.message){
      Swal.fire('Already have an account on this phone number')
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)]">
      <div className="mt-20 border-2 border-[#e2136e] md:w-96 mx-auto rounded-md bg-[#e2136e] text-white p-5">
        <h2 className="text-center font-bold text-2xl">Register</h2>
        {/* from */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="your Name"
              className="input input-bordered text-black"
              required
              {...register("name")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Mobile Number</span>
            </label>
            <input
              type="number"
              placeholder="your phone number"
              className="input input-bordered text-black"
              required
              {...register("phone_number")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">email</span>
            </label>
            <input
              type="email"
              placeholder="your email"
              className="input input-bordered text-black"
              required
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="your password"
              className="input input-bordered text-black"
              required
              {...register("password")}
            />
          </div>
          <div>
            <button className="text-center w-full mt-5 bg-white rounded-md py-1 text-[#e2136e] font-bold">
              Register
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-lg">
          already Have an account?{" "}
          <Link className="hover:underline" to="/login">
            Please Login{" "}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
