import ArticleIcon from "@mui/icons-material/Article";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ListIcon from "@mui/icons-material/List";
import PhoneIcon from "@mui/icons-material/Phone";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideocamIcon from "@mui/icons-material/Videocam";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "../../Assets/Css/sidebar.css";

function Sidebar() {
    const { t } = useTranslation(["main"]);
    const location = useLocation();

    return (
        <>
            <aside className="col-1 sidebar-wrapper mx-3">
                <div className="sidebar-content">
                    {/* video buttons  */}

                    <nav className="sidebar-content-nav">
                        <Link
                            to={"/"}
                            className={`sidebar-content-links ${
                                location.pathname === "/"
                                    ? "active-block"
                                    : null
                            } `}
                        >
                            <VideocamIcon
                                className={`${
                                    location.pathname === "/"
                                        ? "active-icon"
                                        : null
                                }`}
                            />
                            <h6>{t("home")}</h6>
                        </Link>

                        <Link
                            to={"/playlist"}
                            className={`sidebar-content-links ${
                                location.pathname === "/playlist"
                                    ? "active-block"
                                    : null
                            } `}
                        >
                            <SubscriptionsIcon
                                className={`${
                                    location.pathname.includes("/playlist")
                                        ? "active-icon"
                                        : null
                                }`}
                            />
                            <h6>{t("playlist")}</h6>
                        </Link>

                        <Link
                            to={"/categories"}
                            className={`sidebar-content-links ${
                                location.pathname === "/categories"
                                    ? "active-block"
                                    : null
                            } `}
                        >
                            <ListIcon
                                className={`${
                                    location.pathname === "/categories"
                                        ? "active-icon"
                                        : null
                                }`}
                            />
                            <h6>{t("categories")}</h6>
                        </Link>

                        <Link
                            to={"/blogs"}
                            className={`sidebar-content-links ${
                                location.pathname === "/blogs"
                                    ? "active-block"
                                    : null
                            } `}
                        >
                            <ArticleIcon
                                className={`${
                                    location.pathname === "/blogs"
                                        ? "active-icon"
                                        : null
                                }`}
                            />
                            <h6>{t("Blogs")}</h6>
                        </Link>
                    </nav>

                    {/* query buttons */}

                    <nav className="sidebar-content-help-nav">
                        <Link
                            to={"/query"}
                            className={`sidebar-content-help-links ${
                                location.pathname === "/query"
                                    ? "active-block"
                                    : null
                            } `}
                        >
                            <QuestionAnswerIcon
                                className={`${
                                    location.pathname === "/query"
                                        ? "active-icon"
                                        : null
                                }`}
                            />
                            <h6>{t("Query")}</h6>
                        </Link>
                        <Link
                            to={"/faq"}
                            className={`sidebar-content-help-links ${
                                location.pathname === "/faq"
                                    ? "active-block"
                                    : null
                            } `}
                        >
                            <ContactSupportIcon
                                className={`${
                                    location.pathname === "/faq"
                                        ? "active-icon"
                                        : null
                                }`}
                            />
                            <h6 className="text-center">{t("Faq")}</h6>
                        </Link>
                        <Link
                            to={"/contactus"}
                            className={`sidebar-content-help-links ${
                                location.pathname === "/contactus"
                                    ? "active-block"
                                    : null
                            } `}
                        >
                            <PhoneIcon
                                className={`${
                                    location.pathname === "/contactus"
                                        ? "active-icon"
                                        : null
                                }`}
                            />
                            <h6>{t("Contact us")}</h6>
                        </Link>
                    </nav>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
