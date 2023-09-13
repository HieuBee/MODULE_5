import {useEffect, useState} from "react";
import * as service from "../conectAPI/conectAPI";
import {NavLink} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export function FuramaServiceList() {
    const [isOpen, setIsOpen] = useState(false);
    const [services, setServices] = useState([]);
    const [idDelete, setIdDelete] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getServices()
    }, []);

    const getServices = async () => {
        const result = await service.getServices();
        setServices(result);
    };

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const deleteService = async () => {
        await service.deleteService(idDelete);
        getServices();
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
                                <th scope="col">Area</th>
                                <th scope="col">Expense</th>
                                <th scope="col">People</th>
                                <th scope="col">RentalPeriod</th>
                            </tr>
                            </thead>
                            <tbody>
                            {services.map((s) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{s.name.name}</td>
                                            <td>{s.s}</td>
                                            <td>{s.expense}</td>
                                            <td>{s.people}</td>
                                            <td>{s.rentalPeriod}</td>
                                            <td>
                                                <NavLink to={`/service/update/${s.id}`}>
                                                    <button className="btn btn-primary">Update</button>
                                                </NavLink>
                                                <button className="btn btn-danger" onClick={() => {
                                                    showModal();
                                                    setIdDelete(s.id);
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