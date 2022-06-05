import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Navigate, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import authApi from "../../../api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignIn(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
    const handleError = (errors) => { };

    const auth = useSelector((state) => state.auth);


    const handleLogin = (data) => {
        dispatch(authApi.signIn(data.username, data.password));
        
    };
    const signInOptions = {
        username: { required: "Username is required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        }
    };
    useEffect(() => {
        if (auth.authenticate) {
            setTimeout(() => {
                navigate("/")
            }, 1000);
        }
    }, [dispatch, auth.authenticate]);

    return (
        <>
            {auth.authenticate === true ? (
                <p> Đăng nhập thành công</p>
            ) : null}
            <small className="text-danger">
                {auth?.error && auth.error.message}
            </small>
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
                            onChange={(e) => setUsername(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <small className="text-danger">
                            {errors?.password && errors.password.message}
                        </small>
                    </Form.Group>

                    <Button
                        className="btsubmit "
                        variant="info"
                        type="submit"
                        onClick={handleSubmit(handleLogin, handleError)}
                    >
                        Đăng nhập
                    </Button>
                </Form>
                <p className="p-signup">
                    Bạn chưa có tài khoản?
                    <Link to="/dang-ky" style={{color: "#ffbb00", marginLeft: "10px"}}>
                            Đăng ký
                    </Link>
                </p>
            </div>
        </>
    )
}

export default SignIn;