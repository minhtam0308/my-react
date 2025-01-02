
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { ActionLogOut } from '../../redux/actions/ActionLogin';
import './HeaderAdmin.scss'

const HeaderAdmin = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {

        dispatch(ActionLogOut());
        props.setIsLogin(false);
        navigate('/');
    }

    return (
        <>
            <div className="header-container">
                <nav className="navbar navbar-dark bg-dark px-3">
                    <div>
                        <a className="navbar-brand" href="#">Study</a>
                    </div>

                    <div className="option-nav">

                        <NavLink className="nav-item" to="/admin" end>
                            Home
                        </NavLink>
                        <NavLink className="nav-item" to="/admin/createCourse">
                            Create Course
                        </NavLink>
                        <NavLink className="nav-item" to="/">
                            user
                        </NavLink>
                    </div>
                    <span className="navbar-text">
                        <div>
                            <button className="btn btn-danger" onClick={() => {
                                handleLogOut();
                            }}>
                                Log Out
                            </button>
                        </div>
                    </span>

                </nav>
            </div>
        </>
    )
}
export default HeaderAdmin