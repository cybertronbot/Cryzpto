import { useRef, useState, useEffect } from "react";
import bg from "../../assests/React App.mp4";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { Button } from "../../components/buttons/Button";
import google from "../../assests/google.png";
import facebook from "../../assests/facebook.png";
import { IconContext } from "react-icons/lib";

import { Link, useNavigate } from "react-router-dom";

import React from "react";

import axios from "axios";
const LOGIN_URL = "https://authendpoints.onrender.com/api/auth/login";

const Login = () => {
  const navigate = useNavigate(); // Use the useHistory hook
  const emailRef = useRef();
  const errRef = useRef();
const [isLoading,setIsLoading] = useState(false)
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true before making the request
  
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
  
      setEmail("");
      setPwd("");
      navigate("/dashboard");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    } finally {
      setIsLoading(false); 
    }
  };
  
  return (
    <div>
      <div className="w-full h-screen">
        <div className="grid grid-cols-1  sm:grid-cols-6">
          <div className="flex flex-col justify-center h-screen items-center py-8 sm:py-0 bg-[#030205] col-span-2 sm:order-first order-last">
            <div className="flex justify-center items-center gap-5 mb-4">
              <Button variant="primary" imgSrc={google} imgAlt="google">
                Google
              </Button>
              <Button variant="primary" imgSrc={facebook} imgAlt="google">
                Facebook
              </Button>
            </div>
            <div className="flex justify-center items-center font-medium">
              Or
            </div>
            <form
              className="px-4 sm:px-6 xl:px-20 w-[100%]"
              onSubmit={handleSubmit}
            >
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>

              <div className="mb-4">
                <label
                  htmlFor="email "
                  className="mb-3 text-base font-medium text-[#ffffff]"
                >
                  Email Address:
                </label>
                <input
                  type="text"
                  id="email"
                  ref={emailRef}
                  autoComplete="off"
                  className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF]  bg-[#141414] rounded-lg"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>

              <div className="mb-6 relative text-[#ffffff]">
                <label
                  htmlFor="password"
                  className="mb-3 text-base font-medium text-[#ffffff]"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF]  bg-[#141414] rounded-lg"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-start gap-[10px] text-base font-medium max-w-[340px]">
                  <input type="checkbox" className="mt-[5px]" />
                  <h5 className="text-[#ffffff]">Remember me</h5>
                </div>
                <a href="/recover" className=" text-[#ffffff]">
                  Forgot Password
                </a>
              </div>
              <div className="sm:my-6 my-4 ">
                <button
                 onClick={handleSubmit}
                  disabled={isLoading}
                  className="bg-[#F7512E] w-full h-[48px] rounded-[6px] sm:rounded-[8px] text-sm font-medium"
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>
              </div>

              <h5 className=" text-center text-base font-medium text-[#F7512E]">
                Don't have an account?{" "}
                <a href="/auth/register" className="underline text-[#ffffff]">
                  Signup
                </a>
              </h5>
            </form>
          </div>

          <div className="sm:grid hidden col-span-4 relative sm:h-screen h-[40vh]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black">
              <video
                className="min-h-full min-w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover"
                autoPlay
                loop
                muted
                type="video/mp4"
              >
                <source src={bg} />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
