const studentReducer = (students = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case "get_all":
            return payload;
        case "delete":
            return [...students, payload];
        default:
            return students;
    }
}
export default studentReducer;
