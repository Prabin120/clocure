// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.3:8000/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query:(data)=>{
        console.log(data)
        return{
            url : data.endPoint,
            method:'POST',
            body:data.formData,
            headers:{
                'Content-type':'application/json',
            }
        }
      }
    }),
    verifyUser: builder.query({
      query:(data)=>{
        console.log(data)
        return{
            url : data.endPoint,
            method:'GET',
            headers:{
                'Content-type':'application/json',
                'authorization':`Bearer ${data.token}`
            }
        }
      }
    }),
  }),
})


export const { useRegisterUserMutation,useVerifyUserMutation } = userAuthApi