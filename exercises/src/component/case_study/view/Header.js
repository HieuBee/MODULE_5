import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {FuramaServiceList} from "../furama_service/FuramaServiceList";
import {FuramaServiceCreate} from "../furama_service/FuramaServiceCreate";
import {FuramaServiceUpdate} from "../furama_service/FuramaServiceUpdate";
import {FuramaCustomerList} from "../furama_customer/FuramaCustomerList";
import {FuramaCustomerCreate} from "../furama_customer/FuramaCustomerCreate";
import {FuramaCustomerUpdate} from "../furama_customer/FuramaCustomerUpdate";
import {FuramaEmployeeList} from "../furama_employee/FuramaEmployeeList";
import {FuramaEmployeeCreate} from "../furama_employee/FuramaEmployeeCreate";
import {FuramaEmployeeUpdate} from "../furama_employee/FuramaEmployeeUpdate";
import {FuramaContractList} from "../furama_contact/FuramaContractList";
import {FuramaContractCreate} from "../furama_contact/FuramaContractCreate";

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
                                        <span>Service</span>
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
                                        <span>Customer</span>
                                        <ul className="drop-menu">
                                            <li className="drop-menu-item">
                                                <NavLink to='/customers'>List</NavLink>
                                            </li>
                                            <li className="drop-menu-item">
                                                <NavLink to='/customer/create'>Create</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <span>Contact</span>
                                        <ul className="drop-menu">
                                            <li className="drop-menu-item">
                                                <NavLink to='/contacts'>List</NavLink>
                                            </li>
                                            <li className="drop-menu-item">
                                                <NavLink to='/contact/create'>Create</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <span>Employee</span>
                                        <ul className="drop-menu">
                                            <li className="drop-menu-item">
                                                <NavLink to='/employees'>List</NavLink>
                                            </li>
                                            <li className="drop-menu-item">
                                                <NavLink to='/employee/create'>Create</NavLink>
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
                    <Route path="/service/create" element={<FuramaServiceCreate />}></Route>
                    <Route path="/service/update/:id" element={<FuramaServiceUpdate/>}></Route>

                    <Route path="/customers" element={<FuramaCustomerList />}></Route>
                    <Route path="/customer/create" element={<FuramaCustomerCreate />}></Route>
                    <Route path="/customer/update/:id" element={<FuramaCustomerUpdate />}></Route>

                    <Route path="/contacts" element={<FuramaContractList />}></Route>
                    <Route path="/contact/create" element={<FuramaContractCreate />}></Route>

                    <Route path="/employees" element={<FuramaEmployeeList />}></Route>
                    <Route path="/employee/create" element={<FuramaEmployeeCreate />}></Route>
                    <Route path="/employee/update/:id" element={<FuramaEmployeeUpdate/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}