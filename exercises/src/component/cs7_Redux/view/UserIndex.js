import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {UserList} from "./UserList";

export function UserIndex() {
    return (
        <>
            <BrowserRouter>

                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-6">
                            <h1>User List</h1>
                            <NavLink to='/userList'>
                                <button className="btn btn-primary">Get Users</button>
                            </NavLink>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path="/userList" element={<UserList />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}