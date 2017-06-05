import User from "../models/user.js";

export default function signupNewUser(
    signupFullName,
    signupEmail,
    signupPassword
) {
    return dispatch => {
        return $.ajax({
            type: "POST",
            url: "https://api.backendless.com/v1/users/register",
            headers: {
                "application-id": "47C14D22-B942-1ACD-FFDC-39A8F71DEF00",
                "secret-key": "F53D1A8A-AB89-64FB-FFA5-B6675F9BAA00",
                "application-type": "REST",
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                name: signupFullName,
                email: signupEmail,
                password: signupPassword
            })
        }).then((data, status, xhr) => {
            //let retrievedUserToken = data["user-token"];
            dispatch({
                type: "CREATE_USER",
                user: new User({
                    id: data.objectId,
                    userName: data.userName,
                    bio: data.bio || "",
                    image: data.image
                })
                //userToken: data["user-token"]
            });
        });
    };
}
