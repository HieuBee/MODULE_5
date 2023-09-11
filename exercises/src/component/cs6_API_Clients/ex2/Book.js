import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as bookService from "../service/Service";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export function Book() {
    const [bookList, setBookList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getAll()
    }, []);

    const getAll = async () => {
        const result = await bookService.getAllBook();
        setBookList(result);
    };

    const deleteBook = async (id) => {
        await bookService.deleteBook(id);
        navigate("");
        toast.success("Xoá thành công")
        getAll();
    };

    const addBook = async (value) => {
        await bookService.addNewBook(value);
        toast.success("Thêm mới thành công")
        getAll();
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
                                    title: "",
                                    quantity: 0
                                }
                            }
                                    onSubmit={(values, {setSubmitting}) => {
                                        //Call
                                        console.log(values);

                                        addBook(values);
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

                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {bookList.map((book) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{book.id}</td>
                                            <td>{book.title}</td>
                                            <td>{book.quantity}</td>
                                            <NavLink to={`/edit/${book.id}`}>
                                                <button className="btn btn-primary">Edit</button>
                                            </NavLink>
                                            <button onClick={() => {
                                                deleteBook(book.id);
                                            }} className="btn btn-danger">Delete</button>
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