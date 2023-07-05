import React from "react";
import { RiArrowDropRightFill } from "react-icons/ri";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { IconContext } from "react-icons/lib"

function Navbar() {
  return (
    <div>
      <div className="px-20 py-10 flex gap-2 w-[100%] justify-center items-center">
        <div className="w-[280px] h-[35px] flex justify-center items-center border  border-[#969696] rounded-[8px]">
          <div className="flex gap-1 items-center">
            <div>
              <div className="relative">
             
                <IconContext.Provider value={{color:'#C3C3C3' }}>
                <BsArrowDownShort className="-rotate-45" />
                <BsArrowUpShort className="-rotate-45 absolute top-1 left-1" />
                </IconContext.Provider>
              </div>
            </div>

            <h5 className="text-[#C3C3C3] text-[18px]">Network</h5>
          </div>
        </div>
        <nav className="w-[440px] h-[35px] bg-[#181818] flex justify-center items-center border border-[#969696] rounded-[8px]" >
          <ul className="flex gap-7 text-[#C3C3C3] text-sm">
            <li>About</li>
            <li>Product</li>
            <li>Solution</li>
            <li>Company</li>
          </ul>
        </nav>
        <div className="flex gap-1 text-[#C3C3C3] text-sm">
          <div className="flex items-center gap-[1px] w-[230px] h-[35px]  justify-center border  border-[#969696] rounded-[8px]">
            <h5>
              Friday 
            </h5>
            <h6 className="text-[10px]">june16 2023</h6>
          </div>
          <div className=" w-[100px] h-[35px] flex justify-center items-center border  border-[#969696] rounded-[8px]">
           <h5 className="text-sm"> Login</h5> 
           <IconContext.Provider value={{size:"20px"}}>
           <h5><RiArrowDropRightFill /></h5>
           </IconContext.Provider>
         
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
