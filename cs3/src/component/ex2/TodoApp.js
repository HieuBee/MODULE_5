import {Component} from "react";

class TodoApp extends Component{
    constructor() {
        super();
        this.state = {
            todoName: "",
            todoList: ['']
        }
    }

    componentWillMount() {
    }

    addStudent() {
        this.setState({
            todoList: [...this.state.todoList, this.state.todoName],
            todoName: ""
        });
    }

    handleInputName(value) {
        this.setState({
            todoName: value
        })
    }

    render() {
        return (
            <>
                <h1>Todo List</h1>
                <input value={this.state.todoName} onChange={(event) => this.handleInputName(event.target.value)}/>
                <button onClick={() => this.addStudent()}>Add</button>
                    {this.state.todoList.map((todo, index) => {
                        return (
                            <>
                               <br/> <span>{todo}</span> <br/>
                            </>
                        )
                    })}
            </>
        )
    }
}

export default TodoApp;