import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as bookService from "../service/Service";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";


export function BookUpdate() {
    const [book, setBook] = useState([]);
    const idParam = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getBook()
    }, []);

    const getBook = async () => {
        const result = await bookService.getBook(idParam.id);
        setBook(result);
    };

    const updateBook = async (id, value) => {
        await bookService.updateBook(id, value);
        navigate("");
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
                                    title: book.title,
                                    quantity: book.quantity
                                }
                            }
                                    onSubmit={(values, {setSubmitting}) => {
                                        //Call
                                        console.log(values);
                                        updateBook(idParam.id, values);
                                        setSubmitting(false);
                                    }}
                            >
                                <Form>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="title">Title</label>
                                        <Field type="text" name="title" className="form-control" id="title" placeholder="Title"/>
                                        <ErrorMessage name="title" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="quan">Quantity</label>
                                        <Field type="number" name="quantity" className="form-control" id="quan"/>
                                        <ErrorMessage name="quantity" className="form-err" component='span'></ErrorMessage>
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