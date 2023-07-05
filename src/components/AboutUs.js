import React from "react";

function AboutUs() {
  return (
    <div className="bg-[#111111]">
      <div className="flex justify-center items-center w-[100%]">
        <div className="px-20 mt-12 mb-20 flex gap-2">
          <div className="w-[180px] h-[80px] rounded-[8px] border border-[#969696] flex justify-center items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-[#F7512E] flex justify-center items-center">
              <h5>1</h5>
            </div>
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
          </div>
          <div className="w-[500px] h-[80px] bg-[#F7512E] rounded-[8px] border border-[#969696] flex justify-center items-center"></div>
          <div className="w-[180px] h-[80px] rounded-[8px] border border-[#969696] flex justify-center items-center">
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#F7512E] flex justify-center items-center">
              <h5>3</h5>
            </div>
          </div>
          <div className="flex h-[80px] items-center">
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
          </div>
        </div>
      </div>
      <div className="px-20">
        <div>
          <h5>01</h5>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
