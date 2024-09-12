import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Posts from "./pages/Posts";

function App() {
    return (
        <>
            <Routes>
                <Route element={<Home/>} path={'/'}></Route>
                <Route element={<Login/>} path={'login'}></Route>
                <Route element={<Register/>} path={'register'}></Route>
                <Route element={<Posts/>} path={'posts'}></Route>
            </Routes>
        </>
    );
}

export default App;
