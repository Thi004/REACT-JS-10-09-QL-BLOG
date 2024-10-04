import '../style/Login.css'
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import Header from "../component/Header";
import AvatarUpload from "../component/AvatarUpload";
function Register () {
    let navigate = useNavigate();
    return (
        <>
            <Header/>
            <div className="container">
                <Formik
                    initialValues={
                        {
                            username: '',
                            password: '',
                            dob:''
                        }
                    }
                    onSubmit={values => {
                        axios.post("http://localhost:3000/register", values).then((res) => {
                            alert('Đăng ký thanh công');
                            navigate("/login")
                        })
                    }}
                >
                    <div className="row justify-content-center">
                        <div className="col-md-6 form-container">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="login" role="tabpanel"
                                     aria-labelledby="login-tab">
                                    <div className="form-header mt-4">
                                        <h2>Register</h2>
                                    </div>
                                    <Form>
                                        <div className="mb-3">
                                            <label className="form-label">User Name</label>
                                            <Field className="form-control" name={'username'}/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <Field className="form-control" name={'password'}/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Dob</label>
                                            <Field className="form-control" name={'dob'}/>
                                        </div>
                                        <AvatarUpload/>
                                            <button type="submit" className="btn btn-primary w-100">Register</button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Formik>
            </div>
        </>
)
}

export default Register