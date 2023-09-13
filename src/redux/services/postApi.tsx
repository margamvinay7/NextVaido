import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Posts from '@/models/posts'
import posts from '@/type'

export const postsApi = createApi({
   
    reducerPath: "poststsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
    tagTypes: ['posts'],
    endpoints: (builder) => ({
        posts: builder.query<posts[], void>({
            query: () => '/posts',
            providesTags: ['posts']
        }),
        post: builder.query<posts, string>({
            query: (id) => `/posts/${ id }`,
            providesTags: ['posts']
        }),
        addPost: builder.mutation<{}, Partial<posts>>({
            query: posts => ({
                url: '/posts',
                method: 'POST',
                body: posts    
            }),
            invalidatesTags: ['posts']
        }),
        updatePost: builder.mutation<void,{id:String,posts:Partial<posts>}>({
            query: ({id, posts}) => ({
                url: `/posts/${ id }`,
                method: 'PUT',
                body: posts
            }),
            invalidatesTags: ['posts']
        }),
        deletePost: builder.mutation<void, string>({
            query: (id) => ({
                url: `/posts/${ id }`,
                method: 'DELETE',
            }),
            invalidatesTags: ['posts']
        }),
        userPosts:builder.query<posts[],string>({
            query: (userId) => `/posts/${ userId }`,
            providesTags: ['posts']
            }),
        searchPosts:builder.query<posts[],string>({
            query: (search) => `/searchPost/${search}`,
            providesTags: ['posts']
            })
            
        
    })
})

export const {
    usePostsQuery,
    usePostQuery,
    useSearchPostsQuery,
    useUserPostsQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = postsApi;