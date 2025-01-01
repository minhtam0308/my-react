
import './Login.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


import { useState } from 'react';

import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGoogleSquare } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import { LoginService } from '../../service/UserService';
import { useDispatch } from 'react-redux';
import { ActionLoginSuccess } from '../../redux/actions/ActionLogin';
import { useNavigate } from 'react-router-dom';

import { store } from '../../redux/store';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPass, setIsShowPass] = useState(false);
    const [unEOP, setUnEOP] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeemail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const HandleLogin = async () => {
        //check validate
        if (!email || !password) {
            setUnEOP('You need to write both email and password! ');
            return;
        }
        try {
            let res = await LoginService(email, password);
            if (res.errCode === 0) {
                dispatch(ActionLoginSuccess(res.user))
                setUnEOP('');
                props.setIsLogin(store.getState().isLogin)
                console.log(props.isLogin)
                navigate('/');

            } else {
                setUnEOP(res.errMessage);
            }
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign In</h3>

                            <div className="d-flex justify-content-end social_icon">
                                <span><AiFillFacebook /></span>
                                <span><AiFillGoogleSquare /></span>
                                <span><AiFillTwitterSquare /></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className='incorrect' style={{ color: 'red' }}>{unEOP ? unEOP : ''}</div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FaUser size="2em" /></span>
                                </div>
                                <input
                                    type="text"
                                    value={email}
                                    className="form-control"
                                    placeholder="email"
                                    onChange={(event) => handleChangeemail(event)}
                                />

                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><RiLockPasswordFill size="2em" /></span>
                                </div>

                                <input
                                    type={isShowPass ? "text" : "password"}
                                    className="form-control"
                                    placeholder="password"
                                    value={password}
                                    onChange={(event) => handleChangePassword(event)}
                                />


                            </div>
                            <div className='eyePas-container'>
                                <span className='eyePas' onClick={() => {
                                    setIsShowPass(!isShowPass)
                                }}>{isShowPass ? <FaRegEyeSlash /> : <FaRegEye />}</span>

                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox" />Remember Me
                            </div>
                            <div className="form-group">
                                <a type="button"
                                    className="btn btn-warning"
                                    onClick={() => HandleLogin()}>Log In</a>
                            </div>

                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href="#">Sign Up</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Login