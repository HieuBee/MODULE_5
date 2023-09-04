import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {FuramaServiceList} from "../furama_service/FuramaServiceList";
import {FuramaServiceCreate} from "../furama_service/FuramaServiceCreate";

export function Header() {
    return (
        <>
            <BrowserRouter>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="menu-wrap">
                                <ul className="menu">
                                    <li className="menu-item">
                                        <a href="#">Service</a>
                                        <ul className="drop-menu">
                                            <li className="drop-menu-item">
                                                <NavLink to='/services'>List</NavLink>
                                            </li>
                                            <li className="drop-menu-item">
                                                <NavLink to='/services/create'>Create</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#">Customer</a>
                                        <ul className="drop-menu">
                                            <li className="drop-menu-item">
                                                <NavLink to='/customers'>List</NavLink>
                                            </li>
                                            <li className="drop-menu-item">
                                                <NavLink to='/customers/create'>Create</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#">Employee</a>
                                        <ul className="drop-menu">
                                            <li className="drop-menu-item">
                                                <NavLink to='/employees'>List</NavLink>
                                            </li>
                                            <li className="drop-menu-item">
                                                <NavLink to='/employees/create'>Create</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path="/services" element={<FuramaServiceList />}></Route>
                    <Route path="/services/create" element={<FuramaServiceCreate />}></Route>
                    {/*<Route path="/students/create" element={<StudentCreate/>}></Route>
                    <Route path="/edit/:id" element={<StudentUpdate/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>*/}
                </Routes>
            </BrowserRouter>
        </>
    )
}