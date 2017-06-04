const initialState = {
    session: {
        user: {},
        userToken: ""
    },
    users: []
};

export default function AppReducer(currentState, action) {
    if (currentState === undefined) {
        return {};
    }

    switch (action.type) {
        case "LOGGED_IN":
            console.log("logged in", action.usertoken);
            return Object.assign(
                {},
                currentState,
                newState({
                    session: {
                        user: action.user,
                        usertoken: action.usertoken
                    },
                    users: session.push(users)
                })
            );
    }

    console.log("Unhandled State!");
    return currentState;
}
