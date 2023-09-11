import {useEffect, useState} from "react";
import * as service from "../conectAPI/conectAPI";
import {NavLink} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {toast} from "react-toastify";

export function FuramaCustomerList() {
    const [customers, setCustomer] = useState([]);
    const [idDelete, setIdDelete] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getCustomers()
    }, []);

    const getCustomers = async () => {
        const result = await service.getCustomers();
        setCustomer(result);
    };

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const deleteService = async () => {
        await service.deleteCustomer(idDelete);
        getCustomers();
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Birthday</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Id Card</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Level</th>
                                <th scope="col">Address</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.map((c) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{c.name}</td>
                                            <td>{c.birthday}</td>
                                            <td>{c.gender === 1 ? "Nam" : "Nữ"}</td>
                                            <td>{c.idCard}</td>
                                            <td>{c.phone}</td>
                                            <td>{c.level}</td>
                                            <td>{c.address}</td>
                                            <td>
                                                <NavLink to={`/customer/update/${c.id}`}>
                                                    <button className="btn btn-primary">Update</button>
                                                </NavLink>
                                                <button className="btn btn-danger" onClick={() => {
                                                    showModal();
                                                    setIdDelete(c.id);
                                                }}>Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body>Remove service with id: {idDelete}</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger" onClick={
                        () => {
                            deleteService();
                            hideModal();
                        }
                    }>Delete</button>
                    <button className="btn btn-secondary" onClick={hideModal}>Cancel</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}