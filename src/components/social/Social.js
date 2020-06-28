import React, { useEffect, useCallback } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
import jwt from "jsonwebtoken";
import { userLoginSuccess } from "../../views/login/login.action";
import { useDispatch } from "react-redux";

const Social = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAuth = useCallback(async () => {
    const token = params.token;

    const decodedToken = jwt.decode(token);
    if (decodedToken) {
      const user = {
        firstName: decodedToken.user.google.firstName,
        lastName: decodedToken.user.google.lastName,
        ...decodedToken.user,
      };

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));

      await dispatch(userLoginSuccess(token, user));

      history.push("/dashboard");
    } else {
      history.push("/signin");
    }
  }, [history]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  return <div></div>;
};

export default Social;
