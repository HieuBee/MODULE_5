const userReducer = (users = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case "get_all":
            return payload;
        case "delete":
            return [...users, payload];
        default:
            return users;
    }
}
export default userReducer;
