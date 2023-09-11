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
import {BookUpdate} from "./component/cs6_API_Clients/ex2/BookUpdate";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FuramaServiceList} from "./component/case_study/furama_service/FuramaServiceList";
import {FuramaServiceCreate} from "./component/case_study/furama_service/FuramaServiceCreate";
import {FuramaServiceUpdate} from "./component/case_study/furama_service/FuramaServiceUpdate";
import {UserIndex} from "./component/cs7_Redux/view/UserIndex";


function App() {
    return (
        <>
            {/*<BrowserRouter>*/}
            {/*<Routes>*/}
            {/*    <Route path="/edit/:id" element={<BookUpdate />}></Route>*/}
            {/*    <Route path="" element={<Book />}></Route>*/}
            {/*</Routes>*/}
            {/*</BrowserRouter>*/}
            {/*<Counter />*/}
            {/*<Counter1 />*/}
            {/*<Select />*/}
            {/*<Timer />*/}
            {/*<Contact />*/}
            {/*<HealthDeclaration />*/}
            {/*<Library />*/}
            {/*<TodoList />*/}
            {/*Case Study Mudule 5*/}
            <Header />
            <Footer />

            {/*cs7 - Redux*/}
            {/*<UserIndex />*/}

            {/*<ToastContainer />*/}
        </>
    );
}

export default App;
