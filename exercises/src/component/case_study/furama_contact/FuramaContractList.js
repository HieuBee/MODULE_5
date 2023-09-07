import {useEffect, useState} from "react";
import * as contractServices from "../conectAPI/conectAPI";
export function FuramaContractList() {
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        getContracts();
    }, []);

    const getContracts = async () => {
        const list = await contractServices.getContracts();
        setContracts(list);
    }
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

        </>
    )
}