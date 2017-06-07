export default function logOut(userToken) {
    return dispatch => {
        return $.ajax({
            type: "GET",
            url: "https://api.backendless.com/v1/users/logout",
            contentType: "application/json",
            headers: {
                "application-id": "47C14D22-B942-1ACD-FFDC-39A8F71DEF00",
                "secret-key": "F53D1A8A-AB89-64FB-FFA5-B6675F9BAA00",
                "application-type": "REST",
                "user-token": userToken
            }
        }).then(data => {
            dispatch({ type: "LOGOUT_USER" });
        });
    };
}
