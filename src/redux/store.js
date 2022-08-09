import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import GithubReducer from "./reducer/GithubReducer";

const store = createStore(GithubReducer, applyMiddleware(thunk));
export default store;
