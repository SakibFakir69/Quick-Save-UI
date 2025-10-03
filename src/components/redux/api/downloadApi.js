
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
;



export const baseApi = createApi({
    reducerPath:"tiktokvideoDownloader", /// uniqe key store redux state

    baseQuery:fetchBaseQuery({
        baseUrl:process.env.NEXT_PUBLIC_BACKEND_URL,

    }),
    tagTypes:['count'],
    

    endpoints:()=>({})

})

// add tag for cahing