import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as frService from "../conectAPI/conectAPI";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {updateCustomer} from "../conectAPI/conectAPI";
import * as Yup from "yup";

export function FuramaCustomerUpdate() {
    const [customer, setCustomer] = useState([]);
    const navigate = useNavigate();
    const idParam = useParams();

    useEffect(() => {
        getCustomer()
    }, []);

    const getCustomer = async () => {
        const result = await frService.getCustomer(idParam.id);
        setCustomer(result);
    };

    const updateCustomer = async (id, value) => {
        await frService.updateCustomer(id, value);
        navigate("/customers")
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
                                        name: customer.name,
                                        birthday: customer.birthday,
                                        gender: customer.gender,
                                        idCard: customer.idCard,
                                        phone: customer.phone,
                                        level: customer.level,
                                        address: customer.address
                                    }
                                }
                                onSubmit={(values, {setSubmitting}) => {
                                    updateCustomer(idParam.id, values);
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
                                        <Field type="text" name="birthday" className="form-control"/>
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
                                        <Field type="number" name="idCard" className="form-control"/>
                                        <ErrorMessage name="idCard" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <Field type="number" name="phone" className="form-control"/>
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