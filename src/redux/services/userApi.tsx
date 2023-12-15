import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import User from '@/models/user'
import {user} from '@/type'

export const userApi = createApi({
   
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://vaido.vercel.app/api/" }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        
        user: builder.query<user, string>({
            query: (userId) => `/GetUser/${ userId }`,
            providesTags: ['user']
        }),
    })
})

export const { useUserQuery}=userApi
