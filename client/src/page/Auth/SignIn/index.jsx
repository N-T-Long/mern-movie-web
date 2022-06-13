import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../../redux-toolkit/slice/auth";

import "./style.scss";

function SignIn(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });

    const signInOptions = {
        username: { required: "Bạn chưa nhập tài khoản" },
        password: { required: "Bạn chưa nhập mật khẩu"}
    };

    const handleLogin = (data) => {
        dispatch(authActions.login({
            username: data.username,
            password: data.password,
        }))
    };
    
    useEffect(()=>{
        if (isLoggedIn) navigate("/")
    },[isLoggedIn])

    return (
        <>  
            <div className="form-auth">
                <h1 className="form-title">Đăng nhập</h1>
                <Form className="my-4">
                    <Form.Group>
                        <Form.Control
                            type="text"
                            {...register('username', signInOptions.username)} 
                            className="text-input"
                            placeholder="Username.."
                            name="username"
                            required

                        />
                        <small className="text-danger">
                            {errors?.username && errors.username.message}
                        </small>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="password"
                            className="text-input"
                            {...register('password', signInOptions.password)}
                            placeholder="Mật khẩu.."
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
                        onClick={handleSubmit(handleLogin)}
                    >
                        Đăng nhập
                    </Button>
                </Form>
                <p className="p-signup">
                    Bạn chưa có tài khoản?
                    <Link to="/dang-ky" style={{ color: "#ffbb00", marginLeft: "10px" }}>
                        Đăng ký
                    </Link>
                </p>
            </div>
        </>
    )
}

export default SignIn;