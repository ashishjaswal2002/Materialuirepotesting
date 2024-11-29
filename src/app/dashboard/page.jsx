'use client';
import React, { useState, useEffect } from "react";


import ContactPageIcon from '@mui/icons-material/ContactPage';
import LandslideIcon from '@mui/icons-material/Landslide';
import   GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import getDashboardCounts from "@/libs/getDashboardCounts";

import { useQuery } from "@tanstack/react-query";

// import LoadingFunction from "../ui/LoadingState/page.jsx";


export default  function Dashboard() {


  const{data,error,isLoading} = useQuery({

    queryKey:['dashboardCount'],
    queryFn:()=>fetch(`${process.env.NEXT_PUBLIC_mainURL }${process.env.NEXT_PUBLIC_getDashboardCount }`).then(res=>res.json()),
   
  });

  console.log(data,"Logged data")
 


  if(error || !data){
    console.log(error);

  }
 

  const requestCards = [
    {
      icon: <GroupIcon className="h-6 w-6 text-yellow-600" />,
      title: "Owner count",
      count: data?.data?.owner || 0,
      titleColor: "text-yellow-600",
    },
    {
      icon: <ContactPageIcon className="h-6 w-6 text-green-600" />,
      title: "User count",
      count: data?.data?.user || 0,
      titleColor: "text-green-600",
    },
    {
      icon: <PeopleAltIcon className="h-6 w-6 text-red-600" />,
      title: "Approve ground",
      count: data?.data?.groundApprove || 0,
      titleColor: "text-red-600",
    },
    {
      icon: <LandslideIcon className="h-6 w-6 text-pink-600" />,
      title: "Total ground",
      count: data?.data?.totalGround || 0,
      titleColor: "text-pink-600",
    },
  ];

  return (
    <>
      <div className="flex  ">
        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-y-hidden">
           <div className="bg-custom-blue  p-12 h-60 flex gap-5  flex-col justify-center">
              <h1 className="text-3xl font-bold text-white">@ Dashboard</h1>
              <p className="text-lg text-white mt-1">@Analytics dasboard</p>
            </div> 
       
            <div className="container mx-auto px-4 py-6">
              {isLoading? (
                <div className="w-10 mx-auto mt-10">
                  {/* <LoadingFunction /> */}
                  <p>Loading....</p>
                </div>
              ) : error ? (
                <p className="text-center font-bold text-red-500"> Failed to load data <span>🥲</span></p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {requestCards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-gray-100 rounded-md p-3">
                            {card.icon}
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt
                                className={`text-sm font-medium truncate ${card.titleColor}`}
                              >
                                {card.title}
                              </dt>
                              <dd className="text-3xl font-semibold text-gray-900">
                                {card.count}
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

   
    </>
  );
}
