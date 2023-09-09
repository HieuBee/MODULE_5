import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as service from "../conectAPI/conectAPI";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";

export function FuramaCustomerCreate() {
    const navigate = useNavigate();

    const addCustomer = async (value) => {
        await service.addNewCustomer(value);
        navigate("/customers")
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
                            <Formik
                                initialValues={
                                    {
                                        name: "",
                                        birthday: "",
                                        gender: 1,
                                        idCard: "",
                                        phone: "",
                                        level: "",
                                        address: ""
                                    }
                                }
                                onSubmit={(values, {setSubmitting}) => {
                                    addCustomer(values);
                                    setSubmitting(false);
                                }}
                                validationSchema={
                                    Yup.object({
                                        name: Yup.string()
                                            .required("Required")
                                            .matches(/^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*/, "Tên không đúng định dạng!"),
                                        phone: Yup.string()
                                            .required("Required")
                                            .matches(/((090|091)+([0-9]{7})) | ((84)+[+]+(90|91)+([0-9]{8}))/, "Số điện thoại không đúng định dạng!"),
                                        idCard: Yup.string()
                                            .required("Required")
                                            .matches(/([0-9]{9}) | ([0-9]{12})/, "CMNN/CCCD không đúng định dạng!"),
                                        email: Yup.string()
                                            .required("Required")
                                            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không đúng định dạng!"),
                                        address: Yup.string()
                                            .required("Required"),
                                        level: Yup.string()
                                            .required("Required"),
                                        birthday: Yup.string()
                                            .required("Required"),
                                    })
                                }
                            >
                                <Form>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <Field type="text" name="name" className="form-control"/>
                                        <ErrorMessage name="name" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Birthday</label>
                                        <Field type="date" name="birthday" className="form-control"/>
                                        <ErrorMessage name="birthday" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="quan">Gender</label>
                                        <Field as="select" name="gender" className="form-select">
                                            <option value="1">Nam</option>
                                            <option value="0">Nữ</option>
                                        </Field>
                                        <ErrorMessage name="gender" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="quan">Id Card</label>
                                        <Field type="text" name="idCard" className="form-control"/>
                                        <ErrorMessage name="idCard" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <Field type="text" name="phone" className="form-control"/>
                                        <ErrorMessage name="phone" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Level</label>
                                        <Field type="text" name="level" className="form-control"/>
                                        <ErrorMessage name="level" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Address</label>
                                        <Field type="text" name="address" className="form-control"/>
                                        <ErrorMessage name="address" className="form-err" component='span'></ErrorMessage>
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