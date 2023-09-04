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
import {Library} from "./component/cs5/Library";
import {TodoList} from "./component/cs6_API_Clients/ex1/TodoList";
import {Book} from "./component/cs6_API_Clients/ex2/Book";
import {Header} from "./component/case_study/view/Header";
import {Footer} from "./component/case_study/view/Footer";


function App() {
    return (
        <>
            {/*<Counter />*/}
            {/*<Counter1 />*/}
            {/*<Select />*/}
            {/*<Timer />*/}
            {/*<Contact />*/}
            {/*<HealthDeclaration />*/}
            {/*<Library />*/}
            {/*<TodoList />*/}
            {/*<Book />*/}
            <Header />
            <Footer />

            <ToastContainer />
        </>
    );
}

export default App;
