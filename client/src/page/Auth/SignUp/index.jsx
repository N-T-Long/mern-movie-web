import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Navigate, useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function SignUp(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [email, setEmail] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });

    const handleRegister = (data) => {
        // data.preventDefault();
        // dispatch(authApi.signUp(data.username, data.email, data.password));
    };
    const handleError = (errors) => { };

    const auth = useSelector((state) => state.auth)
    if (auth.authenticate) {

    }
    //validation signup
    const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    // const handleSignUp = async (e) => {
    //     if (email === "" || password === "" || username === "" || repeatPassword === "") {
    //         e.preventDefault();
    //     } else {
    //         console.log(username, email, password);
    //         dispatch(authApi.signUp(username, email, password));
    //     }
    // }

    const registerOptions = {
        username: { required: "Username is required" },
        email: { required: "Email is required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        }
    };

    return (
        <>
            <div className="form-auth">
                <h1 className="form-title">Đăng ký</h1>
                {auth.errors ? (
                    <h2 className="text-danger">{auth.errors}</h2>
                ) : null}
                <Form className="my-4">
                    <Form.Group>
                        <Form.Control
                            type="text"
                            {...register('username', registerOptions.username)}
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
                            type="text"
                            {...register('email', registerOptions.email)}
                            className="text-input"
                            placeholder="Email.."
                            name="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
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