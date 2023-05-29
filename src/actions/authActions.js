import { actionType } from "../constants";

export const makeAuthRequest = async (dispatch, loginData) => {
    dispatch({ type: actionType.AUTH_REQUEST });

    try {
        // Replace this with your actual authentication logic
        // Assuming the authentication is successful, create a userData object with the necessary data
        const userData = {
            username: loginData.username,
        };

        dispatch({
            type: actionType.AUTH_SUCCESS,
            payload: userData,
        });
    } catch (error) {
        dispatch({
            type: actionType.AUTH_ERROR,
            payload: "An error occurred during authentication.",
        });
    }
};

export const logout = (dispatch) => {
    dispatch({ type: actionType.LOGOUT });
};