
import { NavLink, useNavigate } from 'react-router-dom'
import './headerUser.scss'
import { useDispatch } from 'react-redux';
import { ActionLogOut } from '../../redux/actions/ActionLogin';

const HeaderUSer = (props) => {
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

                        <NavLink className="nav-item" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-item" to="/course">
                            Course
                        </NavLink>
                        <NavLink className="nav-item" to="/quiz">
                            My quiz
                        </NavLink>
                        <NavLink className="nav-item" to="/admin">
                            Admin
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
export default HeaderUSer