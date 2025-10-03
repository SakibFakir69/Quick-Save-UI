


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
            query:()=>({
                url:"/api/counter",
                method:"POST",
                

            }), 
            invalidatesTags:['count']

        })



    })


})

export const {useCounterShowQuery,useCountDownloadMutation} = counterApi;