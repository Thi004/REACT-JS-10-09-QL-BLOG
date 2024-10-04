import '../style/Login.css'
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "../component/MyContext";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import Header from "../component/Header";

function Login() {
    let navigate = useNavigate();
    let {setCurrentUser} = useContext(MyContext);
    return (
        <>
            <Header/>
            <div className="container">
                <Formik
                    initialValues={
                        {
                            username: '',
                            password: ''
                        }
                    }
                    onSubmit={values => {
                        axios.post("http://localhost:3000/login", values).then((res) => {
                            alert('Đăng nhập thành công');
                            setCurrentUser(res.data.data)
                            navigate("/")
                        }).catch(e => {
                            alert("Sai tài khoản, mật khẩu")
                        })
                    }}
                >
                    <div className="row justify-content-center">
                        <div className="col-md-6 form-container">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="login" role="tabpanel"
                                     aria-labelledby="login-tab">
                                    <div className="form-header mt-4">
                                        <h2>Login</h2>
                                    </div>
                                    <Form>
                                        <div className="mb-3">
                                            <label htmlFor="loginEmail" className="form-label">User Name</label>
                                            <Field className="form-control" name={'username'}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="loginPassword" className="form-label">Password</label>
                                            <Field type="password" className="form-control" name={'password'}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>
                                        <button className="btn btn-primary w-100"><Link id={'link'} to={'/register'}>Register</Link></button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Formik>

            </div>
        </>
    );
}

export default Login;