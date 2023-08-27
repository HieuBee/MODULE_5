import {Component} from "react";

class StudentList extends Component{
    constructor() {
        super();
        this.state = {
            studentList: [
                {
                    id: 1,
                    name: "An",
                    age: 18,
                    address: "HCM"
                },
                {
                    id: 2,
                    name: "Nam",
                    age: 20,
                    address: "Hue"
                },
                {
                    id: 3,
                    name: "Khue",
                    age: 23,
                    address: "BR - VT"
                },
                {
                    id: 4,
                    name: "Hieu",
                    age: 21,
                    address: "Hue"
                }
            ]
            // studentList: ["a", "b"]
        }
    }

    render() {
        return (
            <>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                        {this.state.studentList.map((student) => (
                            <>
                                <tr>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.address}</td>
                                </tr>
                            </>
                        ))}
                </table>
            </>
        )
    }
}

export default StudentList;