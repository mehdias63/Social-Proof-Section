import React from "react";

export default function Count({ icon, title, text }) {
  return (
    <div className="wrap bg-[#512051] w-[20.4375rem] h-[15.5rem] m-3 mt-6 p-6 text-white rounded-lg">
      <div className="flex gap-8 mt-2">
        <img src={icon} className="w-[2.5rem] h-[2.5rem] rounded-full" />
        <div>
          <h1 className="font-bold text-[ 1.0625rem]">{title}</h1>
          <h2 className="text-[#EE69A4] font-normal text-[ 1.0625rem]">
            Verified Buyer
          </h2>
        </div>
      </div>
      <p className="text-[1.0625rem] font-medium leading-[1.375rem] tracking-[-0.019rem] pt-6 px-[0.7rem]">
        {text}
      </p>
    </div>
  );
}
