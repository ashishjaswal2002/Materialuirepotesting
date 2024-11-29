"use client";

import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {  useState } from "react";



export default function  Provider({children}){

    const[queryClient] = useState(()=> new QueryClient({

      defaultOptions:{
        queries:{
          staleTime:6*1000,
          refetchInterval:6*1000,
          cacheTime: 1000 * 60 * 60 * 24, //24 hourss...
        },
      }
    }));



    return(

        <QueryClientProvider client={queryClient}>
          
          <ReactQueryDevtools initialIsOpen={false} />

          {children}

        </QueryClientProvider>
    )

}




