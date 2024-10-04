import Header from "./Header";
import {useContext} from "react";
import {MyContext} from "./MyContext";
import {Link} from "react-router-dom";

function ResultsSearch() {
    const {searchResults} = useContext(MyContext);
    return (
        <>
            <Header/>
            <div className='search-results'>
                {searchResults.map((post, index) => (
                        <div className='post' key={index}>
                            <div className="container my-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 col-md-10">
                                        <div className="card shadow-lg">
                                            <img
                                                src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474075isV/anh-nen-chill-cute-full-hd-dang-yeu-dep_012436407.jpg"
                                                className="card-img-top"
                                                alt="Hình ảnh bài viết"/>
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <span
                                                        className="badge bg-primary">Chủng loại: {post.type}</span>
                                                    <span
                                                        className="badge bg-success">Trạng thái: {post.status}</span>
                                                </div>
                                                <h1 className="card-title text-center">{post.title}</h1>
                                                <p className="text-muted text-center">{post.createAt}</p>
                                                <hr/>
                                                <p className="card-text"
                                                   dangerouslySetInnerHTML={{__html: post.content}}></p>
                                                <blockquote className="blockquote">
                                                    <footer className="blockquote-footer">Tác giả: <cite
                                                        title="Source Title">{post.username}</cite></footer>
                                                    <br/>
                                                    <Link href="#" className="btn btn-primary"
                                                          to={'/'}>&larr; Back </Link>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
                    :
                    <h2 style={{textAlign: 'center'}}>Không tìm thấy bài đăng</h2>
            </div>
        </>
    )
}

export default ResultsSearch;