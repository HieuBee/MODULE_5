import {useNavigate} from "react-router-dom";
import * as contractServices from "../conectAPI/conectAPI";
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";

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
                                }
                                }>
                                <Form>
                                    <div className="mb-3">
                                        <label className="form-label">Code: </label>
                                        <Field name="code" type="number" className="form-control" />

                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Date of starting: </label>
                                        <Field name="startDate" type="date" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Date of termination: </label>
                                        <Field name="endDate" type="date" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Deposit: </label>
                                        <Field name="deposit" type="number" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Total: </label>
                                        <Field name="total" type="number" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-info">Submit</button>
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