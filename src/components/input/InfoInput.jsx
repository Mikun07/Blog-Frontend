import React from "react";

function InfoInput({ UserName, Info }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <label htmlFor="" className="font-bold capitalize">
          {UserName}:
        </label>
        <div className="border-2 w-60 truncate p-2 rounded-lg">
          <p className=" font-bold text-gray-400">{Info}</p>
        </div>
      </div>
    </>
  );
}

export default InfoInput;
