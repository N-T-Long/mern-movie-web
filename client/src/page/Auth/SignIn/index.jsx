import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userApi from "../../../api/userApi";
import { signIn } from "../../../redux-toolkit/slice/auth";
import "./style.css";

function SignIn(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
    const handleError = (errors) => { };
    const auth = useSelector((state) => state.auth);


    const handleLogin = (data) => {
        const getToken = async (data) => {
            try {
              const response = await userApi.signIn({
                username: data.username,
                password: data.password,
              });
              if (response.accessToken) 
              {
                window.localStorage.setItem("token", response.accessToken)
                const userInfo =  await userApi.getProfile();
                const action = signIn({...userInfo.user, token: response.accessToken });
                dispatch(action)
              }


            } catch (error) {
              console.log("Falsed to fetch movie list", error);
            }
          };
        getToken(data);
        
    };


    const signInOptions = {
        username: { required: "Username is required" },
        password: { required: "Password is required"}
    };

    useEffect(() => {
        if (auth.authenticate) {
                navigate("/")
        }
    }, [auth.authenticate]);


    return (
        <>
            {auth.authenticate ? (
                alert("Đăng nhập thành công!!")
                
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
                    <Link to="/dang-ky" style={{ color: "#ffbb00", marginLeft: "10px" }}>
                        Đăng ký
                    </Link>
                </p>
            </div>
        </>
    )
}

export default SignIn;