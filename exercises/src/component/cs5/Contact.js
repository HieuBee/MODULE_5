import {Field, Formik, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {toast} from "react-toastify";

export function Contact() {
    // const navigate = useNavigate();
    return(
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
                                    email: "",
                                    phone: "",
                                    message: "",
                                }
                            }
                            onSubmit={(values, {setSubmitting}) => {
                                //Call
                                console.log(values);
                                setTimeout(() => {
                                    setSubmitting(false);
                                    toast.success("Thêm mới thành công")
                                }, 1000)
                            }}
                            validationSchema={
                                Yup.object({
                                    name: Yup.string()
                                        .required("Required")
                                        .matches(/^[A-Za-z ]{3,100}$/, "Tên không đúng định dạng"),
                                    phone: Yup.string()
                                        .required("Required")
                                        .length(10),
                                    email: Yup.string()
                                        .required("Required")
                                        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email ko đúng định dạng")
                                })
                            }
                            >
                                <Form>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="inputName">Name</label>
                                        <Field name="name" className="form-control" id="inputName" placeholder="Name"/>
                                        <ErrorMessage name="name" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="inputEmail">Email</label>
                                        <Field name="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                        <ErrorMessage name="email" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="inputPhone">Phone</label>
                                        <Field name="phone" className="form-control" id="inputPhone" placeholder="Phone"/>
                                        <ErrorMessage name="phone" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="inputMessage">Message</label>
                                        <textarea name="message" className="form-control" id="inputMessage"/>
                                        <ErrorMessage name="message" className="form-err" component='span'></ErrorMessage>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Sign in</button>
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