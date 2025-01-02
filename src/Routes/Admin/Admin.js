import { Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";

const Admin = (props) => {

    return (
        <>
            <HeaderAdmin
                isLogin={props.isLogin}
                setIsLogin={props.setIsLogin}
            />
            <Outlet />
        </>
    )
}
export default Admin;