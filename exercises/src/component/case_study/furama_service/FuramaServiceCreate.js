import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as service from "../conectAPI/conectAPI";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export function FuramaServiceCreate() {
    const navigate = useNavigate();
    const [nameServices, setNameServices] = useState([]);
    const rentalPeriod = ["Day", "Month", "Year"];

    useEffect(() => {
        getNameServices()
    }, []);

    const getNameServices = async () => {
        const result = await service.getNameService();
        setNameServices(result);
    };

    const addService = async (value) => {
        await service.addNewService(value);
        navigate("/services")
        toast.success("Thêm mới thành công")
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <div className="m-4">
                            <Formik initialValues={
                                {
                                    name: "",
                                    s: 0,
                                    expense: 0,
                                    people: 0,
                                    rentalPeriod: ""
                                }
                            }
                                    onSubmit={(values, {setSubmitting}) => {
                                        addService(values);
                                        setSubmitting(false);
                                    }}
                            >
                                <Form>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <Field as="select" name="name" className="form-select">
                                            {nameServices.map((n) => {
                                                return (
                                                    <>
                                                        <option value={n.name}>{n.name}</option>
                                                    </>
                                                )
                                            })}
                                        </Field>
                                        <ErrorMessage name="id" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Area</label>
                                        <Field type="number" name="s" className="form-control"/>
                                        <ErrorMessage name="s" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="quan">Expense</label>
                                        <Field type="number" name="expense" className="form-control"/>
                                        <ErrorMessage name="expense" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="quan">People</label>
                                        <Field type="number" name="people" className="form-control"/>
                                        <ErrorMessage name="people" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Rental Period</label>
                                        <Field as="select" name="rentalPeriod" className="form-select">
                                            {rentalPeriod.map((n) => {
                                                return (
                                                    <>
                                                        <option value={n}>{n}</option>
                                                    </>
                                                )
                                            })}
                                        </Field>
                                        <ErrorMessage name="rentalPeriod" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <button className="btn btn-primary">Submit</button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>

            </div>
        </>
    )
}