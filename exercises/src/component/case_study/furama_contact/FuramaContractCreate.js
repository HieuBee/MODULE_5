import {useNavigate} from "react-router-dom";
import * as contractServices from "../conectAPI/conectAPI";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

export function FuramaContractCreate() {
    const navigate = useNavigate();

    const addContract = async (value) => {
        await contractServices.addNewContract(value);
        navigate("/contracts");
        toast.success("Successfully!");
    };

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <div className="m-4">
                            <Formik
                                initialValues={
                                    {
                                        code: 0,
                                        startDate: "",
                                        endDate: "",
                                        deposit: 0,
                                        total: 0
                                    }
                                }
                                onSubmit={(values, {setSubmitting}) => {
                                    addContract(values);
                                    setSubmitting(false);
                                }}
                                validationSchema={
                                    Yup.object({
                                        total: Yup.number()
                                            .required("Required")
                                            .min(1),
                                        code: Yup.string()
                                            .required("Required"),
                                        startDate: Yup.string()
                                            .required("Required"),
                                        endDate: Yup.string()
                                            .required("Required"),
                                        deposit: Yup.number()
                                            .required("Required"),
                                    })
                                }
                            >
                                <Form>
                                    <div className="mb-3">
                                        <label className="form-label">Code: </label>
                                        <Field name="code" type="number" className="form-control" />
                                        <ErrorMessage name="code" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Date of starting: </label>
                                        <Field name="startDate" type="date" className="form-control" />
                                        <ErrorMessage name="startDate" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Date of termination: </label>
                                        <Field name="endDate" type="date" className="form-control" />
                                        <ErrorMessage name="endDate" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Deposit: </label>
                                        <Field name="deposit" type="number" className="form-control" />
                                        <ErrorMessage name="deposit" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Total: </label>
                                        <Field name="total" type="number" className="form-control" />
                                        <ErrorMessage name="total" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
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