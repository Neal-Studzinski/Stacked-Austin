import User from "../models/user.js";

export default function loadProfile() {
    //All async action creators should return a function that takes 'dispatch' as its argument
    return function(dispatch) {
        //Before ajax call dispatch any needed actions
        dispatch({ type: "STARTING_LOAD_PROFILE" });
        let retrievedUserToken;
        $.ajax({
            url: "https://api.backendless.com/v1/data/Users",
            method: "GET",
            headers: {
                //"user-token": userToken,
                "application-id": "47C14D22-B942-1ACD-FFDC-39A8F71DEF00",
                "secret-key": "F53D1A8A-AB89-64FB-FFA5-B6675F9BAA00"
                //"Content-Type":
            }
        }).then((data, status, xhr) => {
            let userObjects = data.data.map(profile => {
                return new User({
                    key: profile.objectId,
                    userName: profile.userName,
                    bio: profile.bio || "",
                    image: profile.image
                });
            });

            console.log(userObjects);

            dispatch({
                type: "LOAD_PROFILE_INTO_STATE",
                users: userObjects
            });
            //this.props.history.push("/profile");
            // console.log(">> put into User objects: ", userObjects);
            // //dispatch(getAllPosts());
            // //this.props.history.push("/showing_posts");
            // dispatch({
            //     type: "LOAD_PROFILE_INTO_STATE",
            //     users: userObjects
            // });
            //dispatch(getAllPosts());
        });
    };
    return currentState;
}
