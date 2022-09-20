import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/' }),
    endpoints: (builder) => ({
      getUsers: builder.query({
        keepUnusedDataFor:0,
        query: (name) => `getUser`,
      }),
      setUsers : builder.mutation({
        query: (body) => ({
            url: `addUser`,
            method: 'POST',
            body,
          }),
      })
    }),
  })
  

  export const { useGetUsersQuery,useSetUsersMutation } = userApi