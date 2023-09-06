import {useEffect, useState} from "react";
// import {ErrorMessage, Field, Form, Formik} from "formik";
// import {toast} from "react-toastify";
// import * as Yup from "yup";
import * as service from "../../case_study/conectDb/conectDb";

export function FuramaServiceList() {
    const [services, setService] = useState([]);

    useEffect(() => {
        getServices()
    }, []);

    const getServices = async () => {
        const result = await service.getServices();
        setService(result);
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
                                                <button className="btn btn-primary">Edit</button>
                                                <button className="btn btn-danger">Delete</button>
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