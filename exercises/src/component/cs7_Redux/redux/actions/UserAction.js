import * as userService from "../../connectAPI/ConnectAPI";

export const getAll =() => async(dispatch) => {
    const res = await userService.getAllUser();
    dispatch({
        type: "get_all",
        payload: res
    })
};

export const deleteById = (id) => async(dispatch) => {
    const res = await userService.deleteUser(id);
    dispatch({
        type: "delete",
        payload: res
    })
}