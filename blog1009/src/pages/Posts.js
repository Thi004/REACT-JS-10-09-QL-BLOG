import Header from "../component/Header";
import {Field, Form, Formik} from "formik";
import {Button, Form as BootstrapForm, FormSelect} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useContext, useState} from "react";
import {MyContext} from "../component/MyContext";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function Posts() {
    let {currentUser} = useContext(MyContext);
    const [editorValue, setEditorValue] = useState('');
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        values.username = currentUser.username;
        values.content = editorValue;
        // Gửi dữ liệu tới API bằng axios
        axios.post('http://localhost:3000/posts', values)
            .then(response => {
                console.log('Phản hồi API:', response.data);
                alert('Bài viết đã được đăng thành công!');
                resetForm(); // Xóa sạch form sau khi đăng thành công
                navigate("/");
            })
            .catch(error => {
                console.error('Lỗi khi đăng bài:', error);
                alert('Đã có lỗi xảy ra khi đăng bài.');
            })
            .finally(() => {
                setSubmitting(false); // Dừng trạng thái submitting
            });
    };
    return (
        <>
            <Header/>
            <div className="mt-5">
                <h1>Đăng bài viết mới</h1>
                <Formik
                    initialValues={
                        {
                            title: '',
                            content: '',
                            status: '',
                            type: '',
                        }
                    }
                    onSubmit={handleSubmit}
                >
                    {({isSubmitting, setFieldValue}) => (
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
                                    content={editorValue}
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
                            <button type="submit" className="btn btn-primary">
                                Đăng bài
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>

    )
}

export default Posts