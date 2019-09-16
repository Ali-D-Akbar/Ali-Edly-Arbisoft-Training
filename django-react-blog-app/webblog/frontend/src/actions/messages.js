import {RETURN_ERRORS} from "./types";

//RETURN_ERRORS
export const returnErrors = (message, status) => {
    return {
        type: RETURN_ERRORS,
        payload: {message, status}
    };
};