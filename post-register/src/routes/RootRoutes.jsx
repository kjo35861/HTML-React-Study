import { Route, Routes, useLocation, useNavigate } from "react-router";
import AuthRoutes from "./AuthRoutes";
import Layout from "../components/Layout/Layout";
import { useAuthentication } from "../hooks/queries/useAuthentication";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import PostList from "../pages/PostList/PostList";
import PostRegister from "../pages/PostRegister/PostRegister";
import Menus from "../pages/Menus/Menus";
import Restaurants from "../pages/Restaurants/Restaurants";
import Customers from "../pages/Customers/Customers";


function RootRoutes() {

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const authenticationQuery = useAuthentication(localStorage.getItem("accessToken"));
    console.log(authenticationQuery);
    useEffect(() => {
        if (!authenticationQuery.isLoading) {
            const status = authenticationQuery.data.status;
            if (status !== 200 && !pathname.startsWith("/auth/")) {
                navigate("/auth/signin", {
                    replace: true,              // history를 남기지 않음
                });
                console.log(status);
            }

            if (status === 200 && pathname.startsWith("/auth/")) {
                navigate("/", {
                    replace: true,
                });
            }
        }
    }, [authenticationQuery.isLoading])


    return (<>
        {
            authenticationQuery.isLoading
                ? <h1>로딩중</h1>
                : <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/write" element={<PostRegister />} />
                    <Route path="/menus" element={<Menus/>} />
                    <Route path="/restaurants" element={<Restaurants/>} />
                    <Route path="/customers" element={<Customers/>} />
                    <Route path="/auth/*" element={<AuthRoutes />} />
                    <Route path="*" element={<>페이지를 찾을 수 없습니다.</>} />
                </Routes>
        }
    </>
    )
}

export default RootRoutes;