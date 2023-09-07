import {useEffect, useState} from "react";
import * as service from "../conectAPI/conectAPI";
import {NavLink} from "react-router-dom";

export function FuramaCustomerList() {
    const [customers, setCustomer] = useState([]);

    useEffect(() => {
        getCustomers()
    }, []);

    const getCustomers = async () => {
        const result = await service.getCustomers();
        setCustomer(result);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Birthday</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Id Card</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Level</th>
                                <th scope="col">Address</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.map((c) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{c.name}</td>
                                            <td>{c.birthday}</td>
                                            <td>{c.gender === 1 ? "Nam" : "Nữ"}</td>
                                            <td>{c.idCard}</td>
                                            <td>{c.phone}</td>
                                            <td>{c.level}</td>
                                            <td>{c.address}</td>
                                            <td>
                                                <NavLink to={`/customer/update/${c.id}`}>
                                                    <button className="btn btn-danger">Update</button>
                                                </NavLink>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}