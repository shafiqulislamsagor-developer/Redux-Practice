import { baseApi } from './baseApi'

const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPost: build.mutation({
      query: (data) => ({
        url: "/post",
        method: "post",
        data
      })
    }),
    getAllPost: build.query({
        query: () => ({
            url: "/posts",
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
              },
        })
      }),
  }),
  overrideExisting: false,
})

export const { useGetAllPostQuery, useCreatePostMutation } = postApi