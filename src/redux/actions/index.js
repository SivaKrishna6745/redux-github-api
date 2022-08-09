import { SEARCH } from "./actionTypes";

export const handleSearch = (search) => {
    return {
        type: SEARCH,
        payload: search,
    };
};
