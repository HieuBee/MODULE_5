import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";
import * as service from "../conectDb/conectDb";
import {useNavigate} from "react-router-dom";

export function FuramaServiceCreate() {
    const navigate = useNavigate();

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
                                    /*"name": "Villa",
                                    "s": 100,
                                    "expense": 1600,
                                    "people": 5,
                                    "rentalPeriod": "Day"*/
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
                                        <Field type="text" name="name" className="form-control"/>
                                        <ErrorMessage name="id" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Area</label>
                                        <Field type="number" name="area" className="form-control"/>
                                        <ErrorMessage name="area" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="quan">Expense</label>
                                        <Field type="number" name="expense" className="form-control"/>
                                        <ErrorMessage name="expense" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Rental Period</label>
                                        <Field type="text" name="rentalPeriod" className="form-control"/>
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