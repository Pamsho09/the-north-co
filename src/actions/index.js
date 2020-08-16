export const setCart = (payload) => {
  console.log(payload);
  return {
    type: "SET_CART",
    payload,
  };
};
export const deleteFavorite = (payload) => {
  console.log(payload);
  return {
    type: "DELETE_FAVORITE",
    payload,
  };
};
export const loginRequest = (payload) => {
  return {
    type: "LOGIN_REQUEST",
    payload,
  };
};
export const logoutRequest = (payload) => {
  return {
    type: "LOGOUT_REQUEST",
    payload,
  };
};
export const registerRequest = (payload) => {
  return {
    type: "REGISTER_REQUEST",
    payload,
  };
};
export const getVideoSource = (payload) => {
  return {
    type: "GET_VIDEO_SOURCE",
    payload,
  };
};

