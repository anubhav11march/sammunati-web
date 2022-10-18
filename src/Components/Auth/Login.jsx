import { Visibility } from "@mui/icons-material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import "../../Assets/Css/login.css";
import logo from "../../Assets/Images/logo.png";
import { LoginUser } from "../Api/Api";

function Login() {
    const navigate = useNavigate();
    const { t } = useTranslation(["main"]);
    const [spinn, setspinn] = useState(false);
    const [unmask, setunmask] = useState(false);
    const [LoginData, setLoginData] = useState({
        name: "",
        password: "",
    });
    const Login = async () => {
        try {
            const data = await LoginUser(LoginData);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleinput = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...LoginData, [name]: value });
    };
    const handleSubmit = async () => {
        if (!LoginData?.password || !LoginData?.email) {
            toast.error("Fill Email and Password !");
            return;
        }
        setspinn(true);
        try {
            const data = await LoginUser(LoginData);

            setspinn(false);
            navigate("/");
            if (data?.data?.code === 200) {
                localStorage.setItem("token", JSON.stringify(data?.data?.data));
                localStorage.setItem("accessToken", data?.data?.accessToken);
                navigate("/");
            }
        } catch (error) {
            setspinn(false);
            console.log(error.response);
            if (error?.response?.status === 400) {
                toast.error("No user Exist");
            } else if (error?.response?.status === 401) {
                toast.error("Password Incorrect");
            }
        }
    };

    return (
        <>
            <Toaster position="top-right" />
            <section
                className="d-flex justify-content-center align-items-center w-100 "
                style={{ height: "100vh" }}
            >
                <form className="loginform-wrapper p-3">
                    <div className="d-flex justify-content-center pb-2">
                        <img src={logo} alt="No-Img" />
                    </div>

                    <p className="text-center py-2">{t("Welcome back")} </p>

                    <h4 className="text-center py-2">
                        {t("Login into your account")}{" "}
                    </h4>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">
                            {t("Email")}{" "}
                        </label>
                        <input
                            type="email"
                            id="form2Example1"
                            onChange={handleinput}
                            name="email"
                            className="form-control"
                        />
                    </div>

                    <div className="form-outline mb-4 position-relative">
                        <label className="form-label" for="form2Example2">
                            {t("Password")}
                        </label>
                        <input
                            type={unmask ? "text" : "password"}
                            id="form2Example2"
                            name="password"
                            onChange={handleinput}
                            className="form-control "
                        />
                        {unmask ? (
                            <VisibilityOffIcon
                                className="eye-icon"
                                onClick={() => setunmask(false)}
                            />
                        ) : (
                            <Visibility
                                className="eye-icon"
                                onClick={() => setunmask(true)}
                            />
                        )}
                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex ">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="form2Example31"
                                    checked
                                />
                                <label
                                    className="form-check-label"
                                    for="form2Example31"
                                >
                                    {t("Remember me")}{" "}
                                </label>
                            </div>
                        </div>

                        <div className="col " style={{ textAlign: "right" }}>
                            <Link
                                to="/forgotpassword"
                                className="text-decoration-none "
                            >
                                {t("Forgot password")}
                            </Link>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="btn text-white  w-100 py-2 mb-4"
                        style={{ backgroundColor: "rgba(4, 195, 92, 1)" }}
                    >
                        {t("signin")}
                        {spinn ? (
                            <div
                                class="spinner-border mx-2 spinner-border-sm text-light"
                                role="status"
                            >
                                <span class="sr-only"></span>
                            </div>
                        ) : null}
                    </button>
                    {/* <button type="button" className="btn text-white d-flex py-2 align-items-center justify-content-center google-button  w-100 mb-4" style={{backgroundColor:"rgba(45, 55, 72, 1)"}}>
                <img src={Googlelogo} alt="" />
                Or sign-in with google</button> */}

                    <div className="text-center">
                        <p>
                            {t("Don't have an account?")} &nbsp;
                            <Link to={"/signup"}>{t("Join free today")}</Link>
                        </p>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Login;
