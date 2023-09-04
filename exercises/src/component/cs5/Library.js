import {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";

export function Library() {
    const [listBook, setListBook] = useState([]);

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
                                    title: "",
                                    quantity: 0,
                                }
                            }
                            onSubmit={(values, {setSubmitting}) => {
                                //Call
                                console.log(values);
                                setListBook([...listBook, values])

                                setTimeout(() => {
                                    setSubmitting(false);
                                    toast.success("Thêm mới thành công")
                                }, 0)
                            }}
                            >
                                <Form>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="inputName">Title</label>
                                        <Field name="title" className="form-control" id="inputName" placeholder="Title"/>
                                        <ErrorMessage name="title" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="inputEmail">Quantity</label>
                                        <Field type="number" name="quantity" className="form-control" id="inputEmail"/>
                                        <ErrorMessage name="quantity" className="form-err" component='span'></ErrorMessage>
                                    </div>

                                    <button className="btn btn-primary">Submit</button>
                                </Form>
                            </Formik>
                        </div>

                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {listBook.map((book) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{book.title}</td>
                                            <td>{book.quantity}</td>
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
                    <div className="col-md-3">
                    </div>
                </div>

            </div>
        </>
    )
}