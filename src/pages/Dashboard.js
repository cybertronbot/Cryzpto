import React from "react";
import { GoHome } from "react-icons/go";
import { IconContext } from "react-icons/lib";
import { RiDashboardLine } from "react-icons/ri";
import { IoReceiptOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { PiChartLine } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { PiCaretDownLight } from "react-icons/pi";
function Dashboard() {
  return (
    <div>
      <div className="flex  w-full h-screen">
        <div className="sm:block hidden bg-[#161717] pt-10 min-w-[70px]">
          <div className="flex flex-col items-center gap-[20px]">
            <IconContext.Provider value={{ color: "#8C8C8C", size: "24px" }}>
              <GoHome />
              <RiDashboardLine />
              <IoReceiptOutline />
              <LuMessageSquare />
              <PiChartLine />
              <FaRegUser />
              <IoSettingsOutline />
            </IconContext.Provider>
            <FaPlus className="text-#26252A] text-[24px]" />
          </div>
        </div>
        <div className="bg-[#242424] w-full pt-[2%] px-[2%]">
          <div className="flex justify-between items-center w-full">
            <div className="w-[290px] h-[43px] bg-[rgba(255,255,255,0.4)] rounded-[24px]">
              <input
                type="text"
                className="h-full w-full outline-none bg-transparent rounded-[24px] pl-[10px]"
              />
            </div>
            <h4 className="text-white sm:flex hidden">Dashboard</h4>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-[2px]">
                <div className="sm:flex hidden ">
                  <h5 className="text-white">Uroos Fatima</h5>
                  <h6 className="text-[#5E5E5E]">uroos.design@gmail.com</h6>
                </div>
                <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
              </div>
              <PiCaretDownLight className="text-[25px] text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
