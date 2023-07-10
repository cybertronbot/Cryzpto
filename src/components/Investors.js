import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
function Investors() {
  return (
    <div className="bg-[#111111]">
      <div className="">
        <div className="flex gap-3 mb-5 mx-40">
          <h5 className="text-[20px] text-[#C3C3C3]">02</h5>
          <div className="w-[280px] h-[35px] flex justify-center items-center bg-[#C3C3C3]  rounded-[8px]">
            <div className="flex gap-1 items-center">
              <h5 className=" text-[18px]">Investorsof</h5>
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
        <div>
       
            <h2 className="text-[40px] mx-40 text-[#C3c3c3] mb-5">Our Investors of Network Project</h2>
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
