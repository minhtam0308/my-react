import { Outlet } from "react-router-dom"
import HeaderUSer from "./HeaderUser"

const User = (props) => {
    return (
        <>
            <div>
                <HeaderUSer
                    isLogin={props.isLogin}
                    setIsLogin={props.setIsLogin} />

                <Outlet />
            </div>
        </>
    )
}

export default User