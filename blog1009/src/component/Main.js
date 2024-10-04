import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {MyContext} from "./MyContext";
import useListBlog from "./useListBlog";

function Main() {
    let {currentUser} = useContext(MyContext);
// xem bài show list sản phẩm để làm
    let [listPost, setListPost] = useState([]);
    const getList = () => {
        axios.get("http://localhost:3000/posts").then((res) => {
            let data = res.data;
            console.log(data)
            setListPost(data);
        })
    }
    useEffect(() => {
        getList()
    }, []);
    const remove = (id) => {
        let isConfirm = window.confirm("Are you sure?");
        if (isConfirm) {
            axios.delete(`http://localhost:3000/posts/${id}`).then((res) => {
                alert("Deleted");
                getList()
            })
        }
    }
    //Search
    const { listBlog } = useListBlog('http://localhost:3000/posts');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchOptions, setSearchOptions] = useState('All');
    const { setShowSearch, setSearchResults } = useContext(MyContext);
    const navigate = useNavigate();

    const publicPosts = listBlog.filter((post) => post.status === 'public');

    const handleSearch = () => {
        const filterPost = publicPosts.filter((post) => {
            if (searchOptions === 'All') {
                return (
                    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    post.type.toLowerCase().includes(searchTerm.toLowerCase())
                );
            } else if (searchOptions === 'Title') {
                return post.title.toLowerCase().includes(searchTerm.toLowerCase());
            } else if (searchOptions === 'Content') {
                return post.content.toLowerCase().includes(searchTerm.toLowerCase());
            }else if (searchOptions === 'Types') {
                return post.type.toLowerCase().includes(searchTerm.toLowerCase());
            }
            return false;
        });
        setSearchResults(filterPost);
        setShowSearch(false);
        navigate('/search')
    };
    return (
        <>
            <div className={'container mt-4'}>
                <div className={'row'}>
                    <div className={'col-md-8'}>
                        {listPost.map((item) => (
                            <div className=" box-shadow card mb-4">
                                <img src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474075isV/anh-nen-chill-cute-full-hd-dang-yeu-dep_012436407.jpg" className="card-img-top"
                                     alt="Blog Post Image"/>
                                <div className="card-body">
                                    <h2 id={'title'} className="card-title">{item.title}</h2>
                                    <h5 id={'name'} className="card-text mt-2">Tác giả: {item.username}</h5>
                                    <Link href="#" id='btn' className="btn btn-primary mr-2" to={'/detail/' + item.id}>Read
                                        More &rarr;</Link>
                                    <button id='btn' className="btn btn-primary mr-2">Like <i
                                        className="fas fa-thumbs-up"></i>
                                    </button>
                                    <button id='btn' className="btn btn-primary mr-2">Dislike <i
                                        className="fas fa-thumbs-down"></i>
                                    </button>
                                    {currentUser.username === item.username &&
                                        <Link id='btn' href="#" className="btn btn-primary mr-2"
                                              to={'/update/' + item.id}>Update <i
                                            className="fas fa-sync-alt"></i></Link>}
                                    {currentUser.username === item.username && <button onClick={() => {
                                        remove(item.id)
                                    }} id='btn' className={'btn btn-primary mr-2'}>Delete <i
                                        className="fas fa-trash-alt"></i>
                                    </button>}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={'col-md-4'}>
                        <div className="box-shadow card mb-4">
                            <h5 className="card-header">Search</h5>
                            <div className="card-body">
                                <div className="input-group">
                                    <input value={searchTerm}
                                           id='searchTerm'
                                           onChange={(e) => setSearchTerm(e.target.value)} type="text" className="form-control" placeholder="Search for..."/>
                                    <span className="input-group-btn">
                                <Link onClick={handleSearch} className="btn btn-primary" type="button" to={'/results-search/'}>Go!</Link>
                            </span>
                                </div>
                            </div>
                        </div>
                        <div id="carouselExampleIndicators" className="box-shadow carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0"
                                    className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="https://blogradio.vn/uploads/image/2024/08/21/94e1e4360d13e61e8ecd4aad879cfdab_2.jpg"
                                        className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://blogradio.vn/uploads/image/2024/08/13/04f40945ccaad5f01e9d9d87445a27b5_17.jpg"
                                        className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://blogradio.vn/uploads/image/2024/09/08/3836dcd7206422e33428e668287186ae_8.jpg"
                                        className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-target="#carouselExampleIndicators" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-target="#carouselExampleIndicators" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;