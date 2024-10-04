import Header from "../component/Header";
import {Field, Form, Formik} from "formik";
import {Button, Form as BootstrapForm} from "react-bootstrap";
import ReactQuill from "react-quill";
import {useContext, useEffect, useState} from "react";
import {MyContext} from "../component/MyContext";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

function Update(){
    let {currentUser} = useContext(MyContext);
    const [editorValue, setEditorValue] = useState('');
    let [listPost,setListPost] = useState({});
    const params = useParams();
    const idUpdate = params.id;
    const navigate = useNavigate();
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const handleSubmit = (values) => {
        values.username = currentUser.username;
        console.log(values)
        // Gửi dữ liệu tới API bằng axios
        axios.put(`http://localhost:3000/posts/${idUpdate}`,values).then(() => {
            alert("Update Success");
            navigate("/");
        })
    };

    const getList = () => {
        axios.get("http://localhost:3000/posts/" + idUpdate).then((res) => {
            let data = res.data;
            console.log(data)
            setListPost(data);
        })
    }
    useEffect(() => {
        getList()
    }, []);
    return(
        <>
            <Header/>
            <div className="mt-5">
                <h1>Chỉnh sửa bài viết</h1>
                <Formik
                    initialValues={
                        listPost
                    }
                    enableReinitialize={true}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-3">
                                <BootstrapForm.Label htmlFor="title">Tiêu đề bài viết</BootstrapForm.Label>
                                <Field
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="Nhập tiêu đề bài viết"
                                />
                            </div>
                            <div className="mb-3">
                                <BootstrapForm.Label htmlFor="content">Nội dung bài viết</BootstrapForm.Label>
                                <ReactQuill
                                    theme="snow"
                                    value={listPost.content}
                                    onChange={setEditorValue}
                                    placeholder="Nhập nội dung bài viết của bạn..."
                                    modules={{
                                        toolbar: [
                                            [{'header': '1'}, {'header': '2'}, {'font': []}],
                                            [{size: []}],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                                            ['link', 'image'],
                                            ['clean']
                                        ],
                                    }}
                                    formats={[
                                        'header', 'font', 'size',
                                        'bold', 'italic', 'underline', 'strike', 'blockquote',
                                        'list', 'bullet', 'indent',
                                        'link', 'image'
                                    ]}
                                />
                            </div>
                            <div className="mb-3">
                                <BootstrapForm.Label htmlFor="status">Status</BootstrapForm.Label>
                                <Field as="select" className="form-control" name="status">
                                    <option value={'Public'}>Public</option>
                                    <option value={'Private'}>Private</option>
                                </Field>
                            </div>
                            <div className="mb-3">
                                <BootstrapForm.Label htmlFor="type">Categories</BootstrapForm.Label>
                                <Field as="select" className="form-control" name="type">
                                    <option value={'Cuộc sống'}>Cuộc sống</option>
                                    <option value={'Tình yêu'}>Tình yêu</option>
                                </Field>
                            </div>
                            <button type="submit" className="btn btn-primary" >
                                Cập nhật
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default Update