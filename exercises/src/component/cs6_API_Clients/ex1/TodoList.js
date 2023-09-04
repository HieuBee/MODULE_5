import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";
import * as todoService from "../service/Service";

export function TodoList() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        getAll()
    }, []);

    const getAll = async () => {
        const result = await todoService.getAll();
        setTodoList(result);
    };

    const addTodo = async (value) => {
        await todoService.addNewTodo(value);
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
                                    userId: 0,
                                    id: 0,
                                    title: "",
                                    completed: false
                                }
                            }
                                    onSubmit={(values, {setSubmitting}) => {
                                        //Call
                                        console.log(values);

                                        addTodo(values);
                                        setSubmitting(false);
                                        // setTimeout(() => {
                                        //     setSubmitting(false);
                                        //     toast.success("Thêm mới thành công")
                                        // }, 0)
                                    }}
                            >
                                <Form>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="uid">User id</label>
                                        <Field type="number" name="userId" className="form-control" id="uid"/>
                                        <ErrorMessage name="userId" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="id">Id</label>
                                        <Field type="number" name="id" className="form-control" id="id"/>
                                        <ErrorMessage name="id" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="title">Title</label>
                                        <Field name="title" className="form-control" id="title" placeholder="Title"/>
                                        <ErrorMessage name="title" className="form-err" component='span'></ErrorMessage>
                                    </div>
                                    {/*<div className="mb-3">
                                        <label className="form-label" htmlFor="com">Completed</label>
                                        <Field type="number" name="completed" className="form-control" id="com"/>
                                        <ErrorMessage name="completed" className="form-err" component='span'></ErrorMessage>
                                    </div>*/}

                                    <button className="btn btn-primary">Submit</button>
                                </Form>
                            </Formik>
                        </div>

                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">User id</th>
                                <th scope="col">Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Completed</th>
                            </tr>
                            </thead>
                            <tbody>
                            {todoList.map((todo) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{todo.userId}</td>
                                            <td>{todo.id}</td>
                                            <td>{todo.title}</td>
                                            <td>{todo.completed === false ? "false" : "true"}</td>
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