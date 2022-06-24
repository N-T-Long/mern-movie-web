import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {  useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { authActions } from "../../../redux-toolkit/slice/auth";
import "./style.scss";

function SignUp(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });


    //validation signup
    const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



    const registerOptions = {
        username: { required: "Vui lòng nhập tài khoản" },
        email: { required: "Vui lòng nhập email" },
        password: {
            required: "Vui lòng nhập mật khẩu",
            minLength: {
                value: 8,
                message: "Mật khẩu phải trên 8 ký tự"
            }
        }
    };

    useEffect(()=>{
        if (isLoggedIn) navigate("/")
    },[isLoggedIn])


    const handleRegister = (data) => {
        dispatch(authActions.register({
            username: data.username, 
            password: data.password,
            email: data.email,
        }));
        
   };

   const handleError = (errors) => { };



    return (
        <>
            <div className="form-auth">
                <h1 className="form-title">Đăng ký</h1>
                <Form className="my-4">
                    <Form.Group>
                        <Form.Control
                            type="text"
                            {...register('username', registerOptions.username)}
                            className="text-input"
                            placeholder="Username.."
                            name="username"
                            pattern={USER_REGEX}
                            required
                            
                        />
                        <small className="text-danger">
                            {errors?.username && errors.username.message}
                        </small>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            {...register('email', registerOptions.email)}
                            className="text-input"
                            placeholder="Email.."
                            pattern={PWD_REGEX}
                            name="email"
                            required
                            
                        />
                        <small className="text-danger">
                            {errors?.email && errors.email.message}
                        </small>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="password"
                            {...register('password', registerOptions.password)}
                            className="text-input"
                            placeholder="Mật khẩu"
                            name="password"
                            required
                            
                        />
                        <small className="text-danger">
                            {errors?.password && errors.password.message}
                        </small>
                    </Form.Group>

                    <Button
                        className="btsubmit "
                        variant="info"
                        type="submit"
                        onClick={handleSubmit(handleRegister, handleError)}
                    >
                        Đăng ký
                    </Button>
                </Form>
                <p className="p-signup">
                    Bạn đã có tài khoản?
                    <Link to="/dang-nhap" style={{ color: "#ffbb00", marginLeft: "10px" }}>
                        Đăng nhập
                    </Link>
                </p>
            </div>
        </>
    )
}


export default SignUp;