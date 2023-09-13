import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteById, getAll} from "../redux/actions/UserAction";
import {toast} from "react-toastify";

export function UserList() {
    const users = useSelector(store => store.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll());
    }, []);

    const deleteBook = async (id) => {
        dispatch(deleteById(id));
        alert("response status 200");
        toast.success("Xoá thành công")
        dispatch(getAll());
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Website</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                            <button onClick={() => {
                                                deleteBook(user.id);
                                            }} className="btn btn-danger">Delete</button>
                                        </tr>
                                    </>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        </>
    )
}