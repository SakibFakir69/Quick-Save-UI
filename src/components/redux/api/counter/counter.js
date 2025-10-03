


import { baseApi } from "../downloadApi";


export const counterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch counter
    counterShow: builder.query({
      query: () => "/counter",
      providesTags: ["count"],  // query provides the 'count' tag
    }),

    // Increment counter
    countDownload: builder.mutation({
      query: () => ({
        url: "/api/counter",  // match backend POST route
        method: "POST",
      }),
      invalidatesTags: ["count"],  // invalidates query cache for refetch
    }),
  }),
});

export const { useCounterShowQuery, useCountDownloadMutation } = counterApi;
