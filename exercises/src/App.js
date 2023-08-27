import logo from './logo.svg';
import './App.css';
import {Counter} from "./component/cs4/ex3/Counter";
import {Counter1} from "./component/cs4/ex3/Counter1";
import {Select} from "./component/cs4/ex1/Select";
import {Timer} from "./component/cs4/ex2/Timer";
import {Contact} from "./component/cs5/Contact";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {HealthDeclaration} from "./component/cs5/HealthDeclaration";

function App() {
    return (
        <>
            {/*<Counter />*/}
            {/*<Counter1 />*/}
            {/*<Select />*/}
            {/*<Timer />*/}
            {/*<Contact />*/}
            <HealthDeclaration />

            <ToastContainer />
        </>
    );
}

export default App;
