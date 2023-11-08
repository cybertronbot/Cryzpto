import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { PiHashStraightBold } from "react-icons/pi";
import { IconContext } from "react-icons/lib";
function Investors() {
  return (
    <div className="bg-[#111111]">
      <div className="">
      <div className="px-20 flex justify-center ">
        <div className="flex flex-col">
          <div className="flex gap-3 mb-5">
            <h5 className="text-[20px] text-[#C3C3C3]">02</h5>
            <div className="w-[280px] h-[35px] flex justify-center items-center bg-[#C3C3C3]  rounded-[8px]">
              <div className="flex gap-1 items-center">
                <h5 className=" text-[18px]">Investor Of</h5>
                <div>
                  <div className="relative">
                    <IconContext.Provider value={{ color: "#000000" }}>
                      <BsArrowDownShort className="-rotate-45" />
                      <BsArrowUpShort className="-rotate-45 absolute top-1 left-1" />
                    </IconContext.Provider>
                  </div>
                </div>

                <h5 className=" text-[18px]">Network</h5>
              </div>
            </div>
          </div>
          <div className="text-[#C3C3C3]">
            <div className="flex items-center ">
              <h2 className="text-[40px]">Our team</h2>
              <span className="w-[50px] h-[50px] bg-[#F7512E] rounded-[8px] flex justify-center items-center mx-2">
                <IconContext.Provider value={{ size: "15px" }}>
                  <PiHashStraightBold />
                </IconContext.Provider>
              </span>
              <h2 className="text-[40px]">
                has been creating a unique and powerful &nbsp; &nbsp;&nbsp;
              </h2>
            </div>

            <div className="flex items-center">
              <h2 className="text-[40px]">crypto and fintech product for</h2>
              <div className="w-[120px] h-[45px] flex justify-center items-center bg-[#F7512E] rounded-[8px] mx-2">
                <div className="flex gap-1 items-center">
                  <div>
                    <div className="relative">
                      <IconContext.Provider
                        value={{ color: "#000000", size: "20px" }}
                      >
                        <BsArrowDownShort className="-rotate-45" />
                        <BsArrowUpShort className="-rotate-45 absolute top-1 left-1" />
                      </IconContext.Provider>
                    </div>
                  </div>

                  <h5 className="text-[#000000] text-[18px]">Network</h5>
                </div>
              </div>
              <h2 className="text-[40px]">5 years.</h2>
            </div>
          </div>
          <h2 className="text-[40px] text-[#C3C3C3]">A team of 20 people</h2>
        </div>
      </div>
        <div>
       
         <div className="flex gap-9 justify-center items-center">
         <div className=" w-[80px] h-[80px] border  border-[#969696] flex justify-center items-center rounded-full"></div>
            <div className="flex items-center gap-1">
              <div className=" w-[200px] h-[200px] border  border-[#969696] flex justify-center items-center rounded-full">
            
              </div>
              <div className=" w-[200px] h-[200px] border  border-[#969696] flex justify-center items-center rounded-full"></div>
              <div className=" w-[200px] h-[200px] border  border-[#969696] flex justify-center items-center rounded-full"></div>
              <div className=" w-[200px] h-[200px] bg-[#F7512E] flex justify-center items-center rounded-full"></div>
              <div className=" w-[200px] h-[200px] border  border-[#969696] flex justify-center items-center rounded-full"></div>
            </div>
            <div className=" w-[80px] h-[80px] border  border-[#969696] flex justify-center items-center rounded-full"></div>
         </div>
         
        </div>
      </div>
    </div>
  );
}

export default Investors;