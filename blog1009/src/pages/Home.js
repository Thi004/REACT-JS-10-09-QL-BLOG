import Header from "../component/Header";
import '../style/Home.css'
import Main from "../component/Main";
import Footer from "../component/Footer";
import {Outlet} from "react-router-dom";

function Home() {
    return (
        <>
            <div className={'container-fluid'}>
                <Header/>
                <Outlet/>
                <Main/>
                <Footer/>
            </div>

        </>
    );
}

export default Home;