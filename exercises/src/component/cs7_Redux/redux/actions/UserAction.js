import * as studentService from "../../connectAPI/ConnectAPI";

export const getAll =() => async(dispatch) => {
    const res = await studentService.getAllUser();
    dispatch({
        type: "get_all",
        payload: res
    })
};

export const deleteById = (id) => async(dispatch) => {
    const res = await studentService.deleteUser(id);
    dispatch({
        type: "delete",
        payload: res
    })

}