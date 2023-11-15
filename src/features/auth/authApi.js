import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: data,
      }),
    }),

    // user login mutation
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          // save userInfo in localstorage
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: data.accessToken,
              user: data.user,
            })
          );
          // save userInfo in local redux localStore
          dispatch(
            userLoggedIn({
              accessToken: data.accessToken,
              user: data.user,
            })
          );
        } catch (err) {}
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
