import utils from "../utils.js";

const initialState = {
    session: {
        user: {},
        userToken: ""
    },
    users: []
};

export default function AppReducer(currentState, action) {
    //const newState = utils.newState(currentState);

    if (currentState === undefined) {
        return initialState;
    }

    switch (action.type) {
        case "CREATE_USER":
            var session = {
                user: action.user,
                userToken: action.userToken
            };
            var users = [];
            var users = users.push(session);
            var newState = {
                session,
                users
            };

            return Object.assign({}, currentState, newState);

        case "LOGGED_IN":
            var session = {
                user: action.user,
                userToken: action.userToken
            };
            var users = [];
            users = users.push(session);
            newState = {
                session,
                users
            };

            return Object.assign({}, currentState, newState);
    }

    console.log("Unhandled State!");
    return currentState;
}
