
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
;


console.log(process.env.NEXT_PUBLIC_BACKEND_URL , 'api')

export const baseApi = createApi({
    reducerPath:"tiktokvideoDownloader", /// uniqe key store redux state

    baseQuery:fetchBaseQuery({
        baseUrl:process.env.NEXT_PUBLIC_BACKEND_URL || 'https://tik-1-kzxw.onrender.com'

    }),
    tagTypes:['count'],
    

    endpoints:()=>({})

})

// add tag for cahing