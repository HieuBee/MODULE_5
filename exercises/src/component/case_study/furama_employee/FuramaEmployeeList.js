import {useEffect, useState} from "react";
import * as service from "../conectAPI/conectAPI";
import {NavLink} from "react-router-dom";

export function FuramaEmployeeList() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices()
    }, []);

    const getServices = async () => {
        const result = await service.getServices();
        setServices(result);
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
                                <th scope="col">Area</th>
                                <th scope="col">Expense</th>
                                <th scope="col">People</th>
                                <th scope="col">RentalPeriod</th>
                            </tr>
                            </thead>
                            <tbody>
                            {services.map((s) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{s.name}</td>
                                            <td>{s.s}</td>
                                            <td>{s.expense}</td>
                                            <td>{s.people}</td>
                                            <td>{s.rentalPeriod}</td>
                                            <td>
                                                <NavLink to={`/services/update/${s.id}`}>
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