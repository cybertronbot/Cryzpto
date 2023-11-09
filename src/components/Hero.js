import React from "react";
import { IconContext } from "react-icons/lib";
import { RiArrowRightFill, RiArrowLeftFill } from "react-icons/ri";
import { BsArrowUp, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { TiFlash } from "react-icons/ti";
import { PiHashStraightBold } from "react-icons/pi";
function Hero() {
  return (
    <div>
      <div className="flex justify-center items-center overflow-x-hidden  ">
        <div className="w-[500px] h-[500px] border  border-[#969696] rounded-full  px-28 flex  items-center">
          <div className="flex gap-12 items-center ">
            <div className=" w-[80px] h-[80px] border  border-[#969696] flex justify-center items-center rounded-full">
              <IconContext.Provider value={{ color: "#969696" }}>
                <BsArrowLeft />
              </IconContext.Provider>
            </div>
            <div className="flex flex-col gap-5 w-[700px] ">
              <div className="leading-[25px] ">
                <h5 className="text-[#C3C3C3] text-[22px]">93m+</h5>
                <h6 className="text-[#969696] text-[14px]">Total locked</h6>
              </div>
              <hr className="w-[50px] border-[1px] border-[#969696] " />
              <div className="leading-[25px] ">
                <h5 className="text-[#C3C3C3] text-[22px]">3.2b</h5>
                <h6 className="text-[#969696] text-[14px]">Market size</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ">
          <div className="w-[500px] h-[500px] border  border-[#969696] rounded-full bgg  flex justify-center items-center flex-col gap-7">
            <h5 className="text-[14px] text-center text-[#C3C3C3]">
              Al-powered system suggests personalized <br /> content based on
              user preference
            </h5>
            <h2 className="text-[60px]  w-[700px]  text-center leading-[70px] font-normal text-[#C3C3C3]">
              Next level of{" "}
              <span className="text-[#F7512E]"> &nbsp; crypto</span> and
              <span className="text-[#F7512E]"> &nbsp; fintech</span> product
            </h2>
            <div className=" w-[80px] h-[80px] border  border-[#969696] flex justify-center items-center rounded-full">
              <IconContext.Provider value={{ color: "#969696" }}>
                <BsArrowUp className="rotate-45" />
              </IconContext.Provider>
            </div>
          </div>
          <div className="absolute top-[36%] left-[47%]">
            <IconContext.Provider value={{ size: "45px", color: "#F7512E" }}>
              <TiFlash />
            </IconContext.Provider>
          </div>
          <div className="absolute top-[50%] left-[2px]">
            <IconContext.Provider value={{ size: "35px", color: "#F7512E" }}>
              <PiHashStraightBold />
            </IconContext.Provider>
          </div>
        </div>
        <div className="w-[500px] h-[500px] border  border-[#969696] rounded-full  px-28 flex  items-center">
          <div className="flex gap-12 items-center ">
            <div className="flex flex-col gap-5 ml-16">
              <div className="leading-[25px] ">
                <h5 className="text-[#C3C3C3] text-[22px]">1k+</h5>
                <h6 className="text-[#969696] text-[14px]">Award</h6>
              </div>
              <hr className="w-[50px] border-[1px] border-[#969696] " />
              <div className="leading-[25px] ">
                <h5 className="text-[#C3C3C3] text-[22px]">221k</h5>
                <h6 className="text-[#969696] text-[14px]">Transactions</h6>
              </div>
            </div>
            <div className="w-[700px] ">
              <div className=" w-[80px] h-[80px] border border-[#969696] flex justify-center items-center rounded-full">
                <IconContext.Provider value={{ color: "#969696" }}>
                  <BsArrowRight />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] sm:hidden flex justify-center mt-4">
      <div className=" w-[80px] h-[80px] border  border-[#969696] rounded-full">

</div>
      <div className=" w-[80px] h-[80px] border  border-[#969696] rounded-full">

</div>
      <div className=" w-[80px] h-[80px] border  border-[#969696] rounded-full">

</div>
      <div className=" w-[80px] h-[80px] border  border-[#969696] rounded-full">

</div>
      </div>
     
    </div>
  );
}

export default Hero;
