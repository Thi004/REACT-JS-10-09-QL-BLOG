import {Link, useParams} from "react-router-dom";
import Header from "../component/Header";
import {useEffect, useState} from "react";
import axios from "axios";

function DetailPost() {
    let {x} = useParams()
    let [listPost, setListPost] = useState({});

    const getList = () => {
        axios.get("http://localhost:3000/posts/" + x).then((res) => {
            let data = res.data;
            console.log(data)
            setListPost(data);
        })
    }
    useEffect(() => {
        getList()
    }, []);
    return (
        <>
            <Header/>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="card shadow-lg">
                            <img src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474075isV/anh-nen-chill-cute-full-hd-dang-yeu-dep_012436407.jpg" className="card-img-top"
                                 alt="Hình ảnh bài viết"/>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <span className="badge">Chủng loại: {listPost.type}</span>
                                    <span className="badge">Trạng thái: {listPost.status}</span>
                                </div>
                                <h1 id={'title2'} className="card-title text-center">{listPost.title}</h1>
                                <p id={'date'} className="text-muted text-center">{listPost.createAt}</p>
                                <hr/>
                                <p className="card-text" dangerouslySetInnerHTML={{__html: listPost.content}}></p>
                                <blockquote className="blockquote">
                                    <footer id={'name'} className="blockquote-footer">Tác giả: <cite
                                        title="Source Title">{listPost.username}</cite></footer>
                                    <br/>
                                    <Link href="#" className="btn btn-primary" to={'/'}>&larr; Back </Link>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPost