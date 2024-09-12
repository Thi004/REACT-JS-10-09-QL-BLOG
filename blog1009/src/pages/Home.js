import Header from "../component/Header";
import '../style/Home.css'
import Main from "../component/Main";
import Footer from "../component/Footer";

function Home() {
    return (
        <>
            <div className={'container-fluid'}>
                <Header/>
                <Main/>
                <Footer/>
            </div>

        </>
    );
}

export default Home;