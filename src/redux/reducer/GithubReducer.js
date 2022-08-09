import { SEARCH } from "../actions/actionTypes";

const initialState = {
    search: "",
    resp: "",
};
function GithubReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            return { ...state, search: action.payload };
        default:
            return { ...state };
    }
}

export default GithubReducer;
