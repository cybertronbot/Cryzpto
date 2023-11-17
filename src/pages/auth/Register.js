import React, { useState, useRef, useEffect } from "react";
import bg from "../../assests/React App.mp4";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { Button } from "../../components/buttons/Button";
import google from "../../assests/google.png";
import facebook from "../../assests/facebook.png";

import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import axios from "axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const REGISTER_URL = "https://authendpoints.onrender.com/api/auth/signup";

function Register() {
  const [values, setValues] = useState({
    showPass: false,
  });
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  const userFullName = useRef();

  const errRef = useRef();

  const [fullName, setFullName] = useState("");
  const [validFullName, setValidFullName] = useState(false);
  const [fullNameFocus, setFullNameFocus] = useState(false);

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [userNameFocus, setUsernameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading,setIsLoading] = useState(false)
  useEffect(() => {
    userFullName.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(username);
    console.log(result);
    console.log(fullName);
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = USER_REGEX.test(fullName);
    console.log(result);
    console.log(fullName);
    setValidFullName(result);
  }, [fullName]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [fullName, pwd, username, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const v1 = USER_REGEX.test(username);
    const v2 = USER_REGEX.test(fullName);
    const v3 = PWD_REGEX.test(pwd);
    const v5 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3 || !v5) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          fullname: fullName,
          username: username,
          password: pwd,
          email: email,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response?.data);

      console.log(JSON.stringify(response));
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else if (err.response?.status === 400) {
        setErrMsg("This Email Is Already In Use");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <div className="w-full h-screen">
          <div className="grid grid-cols-1  sm:grid-cols-6">
            <div className="flex flex-col h-screen justify-center items-center py-8 sm:py-0 bg-[#030205] col-span-2 sm:order-first order-last">
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
                className="px-4 sm:px-6 xl:px-14  w-[100%]"
                action=""
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
                    htmlFor="fullName"
                    className="mb-3 text-base font-medium text-white"
                  >
                    First Name:
                  </label>
                  <div className="flex justify-between items-center sm:h-[48px] h-[42px] px-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#141414] rounded-lg ">
                    <input
                      type="text"
                      id="fullname"
                      ref={userFullName}
                      autoComplete="off"
                      className="w-full h-full bg-transparent outline-none"
                      onChange={(e) => setFullName(e.target.value)}
                      value={fullName}
                      required
                      aria-invalid={validFullName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setFullNameFocus(true)}
                      onBlur={() => setFullNameFocus(false)}
                    />
                    <div>
                      <FaCheck className={validFullName ? "valid" : "hide"} />
                      <FaTimes
                        className={
                          validFullName || !fullName ? "hide" : "invalid"
                        }
                      />
                    </div>
                  </div>

                  <p
                    id="uidnote"
                    className={
                      fullNameFocus && fullName && !validFullName
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <div className="flex gap-2 items-center">
                      <FaInfoCircle
                        className="
                 text-red-500"
                      />
                      <h5 className="text-white">
                        who are you ? How should we address you
                      </h5>
                    </div>
                  </p>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="mb-3 text-base font-medium text-white"
                  >
                    Username:
                  </label>
                  <div className="flex justify-between items-center sm:h-[48px] h-[42px] px-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#141414] rounded-lg ">
                    <input
                      type="text"
                      id="username"
                      autoComplete="off"
                      className="w-full h-full bg-transparent outline-none"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      required
                      aria-invalid={validUsername ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setUsernameFocus(true)}
                      onBlur={() => setUsernameFocus(false)}
                    />
                    <div>
                      <FaCheck className={validUsername ? "valid" : "hide"} />
                      <FaTimes
                        className={
                          validUsername || !username ? "hide" : "invalid"
                        }
                      />
                    </div>
                  </div>

                  <p
                    id="uidnote"
                    className={
                      userNameFocus && username && !validUsername
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <div className="flex gap-2 items-center">
                      <FaInfoCircle className="text-red-500" />
                      <h5 className="text-white">
                        what nickname should we call you?
                      </h5>
                    </div>
                  </p>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="mb-3 text-base font-medium text-white"
                  >
                    Email:
                  </label>
                  <div className="flex justify-between items-center sm:h-[48px] h-[42px] px-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#141414] rounded-lg ">
                    <input
                      type="email"
                      id="email"
                      autoComplete="off"
                      className="w-full h-full bg-transparent outline-none"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      aria-invalid={validEmail ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                    <div>
                      <div>
                        {" "}
                        <FaCheck className={validEmail ? "valid" : "hide"} />
                        <FaTimes
                          className={validEmail || !email ? "hide" : "invalid"}
                        />
                      </div>
                    </div>
                  </div>

                  <p
                    id="uidnote"
                    className={
                      emailFocus && email && !validEmail
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <div className="flex items-center gap-2">
                      <FaInfoCircle className="text-red-500" />
                      <h5 className="text-white text-sm ">
                        A valid email address is required.Don't worry, we wont
                        spam you or sell your Info
                      </h5>
                    </div>
                  </p>
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="password"
                    className="mb-3 text-base font-medium text-white"
                  >
                    Password:
                  </label>
                  <div className="flex justify-between items-center sm:h-[48px] h-[42px] px-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#141414] rounded-lg ">
                    <input
                      type="password"
                      id="password"
                      className="w-full h-full bg-transparent outline-none"
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                    />
                    <div>
                      <FaCheck className={validPwd ? "valid" : "hide"} />
                      <FaTimes
                        className={validPwd || !pwd ? "hide" : "invalid"}
                      />
                    </div>
                  </div>

                  <p
                    id="pwdnote"
                    className={
                      pwdFocus && !validPwd ? "instructions" : "offscreen"
                    }
                  >
                    <div className="flex gap-2 items-start w-full">
                      <FaInfoCircle className="text-red-500 " />
                      <h5 className="text-white tex-sm">
                        Your Password need to be a minimun of 8 character and
                        preferrably contains uppercase and lowercase
                        letters,numbers,special charcters({" "}
                        <span aria-label="exclamation mark">!</span>{" "}
                        <span aria-label="at symbol">@</span>{" "}
                        <span aria-label="hashtag">#</span>{" "}
                        <span aria-label="dollar sign">$</span>{" "}
                        <span aria-label="percent">%</span>)
                        <br />
                      </h5>
                    </div>
                  </p>
                </div>

                <div className="sm:my-6 my-4 ">
                  <button
                    disabled={
                      !validFullName ||
                      !validUsername ||
                      !validPwd ||
                      !validEmail
                        ? true
                        : false
                    }
                    className="bg-[#F7512E] w-full h-[48px] rounded-[6px] sm:rounded-[8px] text-sm font-medium"
                  >
                      {isLoading ? 'Loading...' : 'Create Account'}
                  </button>
                </div>

                <h5 className=" text-center text-base font-medium text-white">
                  Already have an account?{" "}
                  <a href="/auth/login" className="underline text-[#ffffff]">
                    Login
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
      )}
    </div>
  );
}

export default Register;
