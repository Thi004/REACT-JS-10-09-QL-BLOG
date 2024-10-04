import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Posts from "./pages/Posts";
import DetailPost from "./pages/DetailPost";
import Update from "./pages/Update";
import MyBlog from "./pages/MyBlog";
import Search from "./component/ResultsSearch";


function App() {
    return (
        <>
            <Routes>
                <Route element={<Home/>} path={'/'}></Route>
                <Route element={<Login/>} path={'login'}></Route>
                <Route element={<Register/>} path={'register'}></Route>
                <Route element={<Posts/>} path={'posts'}></Route>
                <Route element={<DetailPost/>} path={'detail/:x'}></Route>
                <Route element={<Update/>} path={'update/:id'}></Route>
                <Route element={<MyBlog/>} path={'my-blog'}></Route>
                <Route element={<Search/>} path={'results-search'}></Route>
            </Routes>
        </>
    );
}

export default App;
