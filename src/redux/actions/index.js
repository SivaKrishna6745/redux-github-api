import axios from "axios";
import { SEARCH } from "./actionTypes";
import { SUBMIT } from "./actionTypes";

export const handleSearch = (search) => {
    return {
        type: SEARCH,
        payload: search,
    };
};

export const handleSubmit = (data) => {
    return {
        type: SUBMIT,
        payload: data,
    };
};

export const fetchUser = (search) => {
    return function (dispatch) {
        axios
            .get(`https://api.github.com/users/${search}`)
            .then((res) => {
                const data = res.data;
                dispatch(handleSubmit(data));
            })
            .catch((err) => console.log(err));
        dispatch(handleSearch(""));
    };
};
