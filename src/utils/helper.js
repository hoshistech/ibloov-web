import jwt from "jsonwebtoken";

export const updateObject = (oldObject, updatedObject) => {
  return {
    ...oldObject,
    ...updatedObject,
  };
};

export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export const checkAuth = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));
  if (!user) return false;
  if (!token) return false;
  try {
    const { exp } = jwt.decode(token);
    if (exp < new Date().getTime() / 1000) return false;
  } catch (error) {
    return false;
  }
  return true;
};

export const getUser = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));
  const result = {
    token,
    user,
  };

  return result;
};
