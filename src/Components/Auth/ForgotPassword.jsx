import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../../Assets/Css/login.css";
import logo from "../../Assets/Images/logo.png";
import { LoginUser } from "../Api/Api";

function ForgotPassword() {
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
        if (!LoginData?.email) {
            toast.error("Fill Email !");
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

                    <p className="text-center py-4">
                        {t("Forgot Password Note")}{" "}
                    </p>

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
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="btn text-white  w-100 py-2 mb-4"
                        style={{ backgroundColor: "rgba(4, 195, 92, 1)" }}
                    >
                        {t("Send Password")}
                        {spinn ? (
                            <div
                                class="spinner-border mx-2 spinner-border-sm text-light"
                                role="status"
                            >
                                <span class="sr-only"></span>
                            </div>
                        ) : null}
                    </button>
                </form>
            </section>
        </>
    );
}

export default ForgotPassword;
