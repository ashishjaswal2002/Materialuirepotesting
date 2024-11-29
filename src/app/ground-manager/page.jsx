'use client'
import React, { useState } from "react";
// import DataGridy from "../dataGrid/page";
// import FantasyFormFilterForAllGrounds from "../FantasyFormFilterAllGrounds/page";
const GroundManager = () => {
  const [incomingData,setIncomingData]=useState([])
  const handleIncomingData=(filteredData)=>{
      setIncomingData(filteredData)
  }

  return (
    <>
      <div className="flex bg-teal-500">
        <div className=" flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="bg-custom-blue p-6 md:p-12 h-40 md:h-60 flex items-center ">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                @ Ground Manager
              </h1>
            </div>
            <div className=" mx-auto px-4 md:px-6 py-6 space-y-4 drop-shadow-lg">
              {/* <FantasyFormFilterForAllGrounds sendValue={handleIncomingData}/>
              <DataGridy incomingData={incomingData} /> */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default GroundManager;