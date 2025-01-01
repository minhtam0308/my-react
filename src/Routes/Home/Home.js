import { useDispatch } from "react-redux";
import { ActionLogOut } from "../../redux/actions/ActionLogin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";




const Home = (props) => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {

        dispatch(ActionLogOut());
        props.setIsLogin(false);
        navigate('/');
    }
    return (
        <>
            <div className="Home-container">
                <Header />

            </div>
            <div>
                <button onClick={() => {
                    handleLogOut();
                }}>
                    log OUT
                </button>
            </div>
        </>
    )
}
export default Home