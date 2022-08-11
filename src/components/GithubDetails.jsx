import React from "react";
import { useSelector } from "react-redux/es/exports";

function GithubDetails() {
    const { login, avatar_url } = useSelector((state) => state.resp);
    return (
        <>
            <h5>
                Username: <span>{login}</span>
            </h5>
            <h5>
                Avatar: <br />
                <img
                    src={avatar_url}
                    className="profile-img"
                    alt="avatar"
                />{" "}
            </h5>
        </>
    );
}

export default GithubDetails;
