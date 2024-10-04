import { baseApi } from "./baseApi"

const commentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllComments: build.query({
      query: () => ({
        url: "/comments",
        method: "GET",
            headers: {
                'Content-Type': 'application/json',
              },
      })
    }),
  }),
})

export const { useGetAllCommentsQuery } = commentApi