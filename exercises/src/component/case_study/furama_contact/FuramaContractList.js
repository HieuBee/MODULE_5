import {useEffect, useState} from "react";
import * as contractServices from "../conectAPI/conectAPI";
import {Modal} from "react-bootstrap";
import * as service from "../conectAPI/conectAPI";
import {toast} from "react-toastify";
export function FuramaContractList() {
    const [contracts, setContracts] = useState([]);
    const [idDelete, setIdDelete] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getContracts();
    }, []);

    const getContracts = async () => {
        const list = await contractServices.getContracts();
        setContracts(list);
    }

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const deleteService = async () => {
        await service.deleteContract(idDelete);
        getContracts();
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
                                <th scope="col">Code</th>
                                <th scope="col">Date of starting</th>
                                <th scope="col">Date of terminate</th>
                                <th scope="col">Deposit</th>
                                <th scope="col">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                contracts.map((cont) => {
                                    return (
                                        <>
                                            <tr key={cont.id}>
                                                <td>{cont.code}</td>
                                                <td>{cont.startDate}</td>
                                                <td>{cont.endDate}</td>
                                                <td>{cont.deposit} VND</td>
                                                <td>{cont.total} VND</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => {
                                                        showModal();
                                                        setIdDelete(cont.id);
                                                    }}>Delete</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3"></div>
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