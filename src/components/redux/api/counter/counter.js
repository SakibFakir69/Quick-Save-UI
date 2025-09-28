


import { baseApi } from "../downloadApi";



export const counterApi = baseApi.injectEndpoints({

    endpoints:(builder)=>({
        counterShow:builder.query({

            query:()=>({
                url:"/counter",
                method:"GET"
            }),

            providesTags:['']



        }),
        // count download
        countDownload:builder.mutation({
            query:(payload)=>({
                url:"/counter",
                method:"POST",
                body:payload

            })

        })



    })


})

export const {useCounterShowQuery,useCountDownloadMutation} = counterApi;