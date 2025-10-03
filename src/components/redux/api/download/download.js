

import { baseApi } from "../downloadApi";



const downloadApi = baseApi.injectEndpoints({

    endpoints:(builder)=>({

        downloadVideo:builder.mutation({

            query:(payload)=>({
                url:'/api/download-tiktok', /// endpoint
                method:"POST",  /// post method 
                 body:payload

            })


        })

    })

})

export const {useDownloadVideoMutation} = downloadApi;