import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

export const useAuthCheck = () => {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage.getItem("auth");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      dispatch(
        userLoggedIn({
          accessToken: auth.accessToken,
          user: auth.user,
        })
      );
    }
    setAuthChecked(true);
  }, [dispatch]);

  return authChecked;
};
