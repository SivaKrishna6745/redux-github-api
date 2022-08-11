import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, handleSearch } from "../redux/actions";

function GithubForm() {
    const search = useSelector((state) => state.search);
    const dispatch = useDispatch();
    return (
        <form
            className="form-group"
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(fetchUser(search));
            }}
        >
            <input
                type="text"
                className="form-control"
                value={search}
                onChange={(e) => dispatch(handleSearch(e.target.value))}
            />
            <button className="btn">Search</button>
        </form>
    );
}

export default GithubForm;
