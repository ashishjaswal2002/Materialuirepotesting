"use client";

import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Children, useState } from "react";



export default function  Providers(){

    const[queryClient] = useState(()=> new QueryClient());



    return(

        <QueryClientProvider client={queryClient}>
          
          <ReactQueryDevtools initialIsOpen={false} />
          {Children}

        </QueryClientProvider>
    )

}




