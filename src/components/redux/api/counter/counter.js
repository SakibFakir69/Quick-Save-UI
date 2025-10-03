


import { baseApi } from "../downloadApi";



export const counterApi = baseApi.injectEndpoints({

    endpoints:(builder)=>({
        counterShow:builder.query({

            query:()=>({
                url:"/counter",
                method:"GET"
            }),

            providesTags:['count']



        }),
        // count download
        countDownload:builder.mutation({
            query:(payload)=>({
                url:"/api/counter",
                method:"POST",
                body:payload

            }),
            providesTags:['count']

        })



    })


})

export const {useCounterShowQuery,useCountDownloadMutation} = counterApi;