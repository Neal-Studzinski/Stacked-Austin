export default function loginUser(loginEmail, loginPassword) {
    return dispatch => {
        return $.ajax({
            type: "POST",
            url: "https://api.backendless.com/v1/users/login",
            headers: {
                "application-id": "47C14D22-B942-1ACD-FFDC-39A8F71DEF00",
                "secret-key": "F53D1A8A-AB89-64FB-FFA5-B6675F9BAA00",
                "application-type": "REST",
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                login: loginEmail,
                password: loginPassword
            }),
            success: (data, status, xhr) => {
                console.log(data["user-token"]);
                dispatch({
                    type: "LOGGED_IN",
                    usertoken: data["user-token"],
                    name: data.name
                });
                //dispatch();
            }
        });
    };
}
