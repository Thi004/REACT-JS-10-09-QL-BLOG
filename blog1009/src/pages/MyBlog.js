import {useContext} from "react";
import {MyContext} from "../component/MyContext";
import useListBlog from "../component/useListBlog";
import axios from "axios";
import {Link} from "react-router-dom";
import Header from "../component/Header";

function MyBlog() {
    const {listBlog, getData} = useListBlog('http://localhost:3000/posts', 10);
    const {currentUser, removeLike} = useContext(MyContext)
    const myPosts = listBlog.filter((post) => post.username === currentUser.username);
    const removePost = (id) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            axios.delete(`http://localhost:3000/posts/${id}`)
                .then((res) => {
                    removeLike(id)
                    getData();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }
    return (
        <>
            <Header/>
            <div className="ml-5 mt-3">
                <h1>List My Blog</h1>
                {myPosts.map((post, index) => (
                    <div className='title-post mt-3' key={index}>
                        <div className='title-blog'>
                            <span>{index + 1}</span>.
                            <Link to={`my-posts/${post.id}`}>{post.title}</Link>
                        </div>
                        <Link className="dropdown-item" to={`/update/${post.id}`}>
                            <i className="fas fa-edit"></i> Edit
                        </Link>
                        <a onClick={() => removePost(post.id)} className="dropdown-item text-danger" href="#">
                            <i className="fas fa-trash-alt"></i> Delete
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MyBlog