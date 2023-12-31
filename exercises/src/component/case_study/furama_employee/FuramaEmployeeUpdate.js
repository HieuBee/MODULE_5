import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as frService from "../conectAPI/conectAPI";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export function FuramaEmployeeUpdate() {
    const [service, setService] = useState([]);
    const navigate = useNavigate();
    const idParam = useParams();

    useEffect(() => {
        getService()
    }, []);

    const getService = async () => {
        const result = await frService.getService(idParam.id);
        setService(result);
    };

    const updateService = async (id, value) => {
        await frService.updateService(id, value);
        navigate("/services")
        toast.success("Chỉnh sửa thành công")
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <div className="m-4">
                            <Formik
                                enableReinitialize={true}

                                initialValues={
                                    {
                                        name: service.name,
                                        s: service.s,
                                        expense: service.expense,
                                        people: service.people,
                                        rentalPeriod: service.rentalPeriod
                                        /*"name": "Villa",
                                        "s": 100,
                                        "expense": 1600,
                                        "people": 5,
                                        "rentalPeriod": "Day"*/
                                    }
                                }
                                onSubmit={(values, {setSubmitting}) => {
                                    updateService(idParam.id, values);
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
                                        <Field type="number" name="s" className="form-control"/>
                                        <ErrorMessage name="s" className="form-err" component='span'></ErrorMessage>
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