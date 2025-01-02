

import Login from './Routes/Login/Login';
import { Route, Routes } from 'react-router-dom';
import HomeUser from './Routes/User/HomeUser';
import { useState } from 'react';
import { store } from './redux/store';
import User from './Routes/User/User';
import CourseUser from './Routes/User/CourseUser';
import QuizUser from './Routes/User/QuizUser';
import Admin from './Routes/Admin/Admin';
import HomeAdmin from './Routes/Admin/HomeAdmin';
import CreateQuiz from './Routes/Admin/CreateQuiz';


const Layout = () => {

    const [isLogin, setIsLogin] = useState(store.getState().isLogin);
    console.log(store.getState());
    return (
        <>
            {isLogin ?
                <Routes>
                    <Route path='/' element={<User
                        isLogin={isLogin}
                        setIsLogin={setIsLogin} />
                    }>
                        <Route index element={<HomeUser />} />
                        <Route path='/course' element={<CourseUser />} />
                        <Route path='/Quiz' element={<QuizUser />} />
                    </Route>

                    <Route path='/admin' element={<Admin
                        isLogin={isLogin}
                        setIsLogin={setIsLogin} />}>
                        <Route index element={<HomeAdmin />} />
                        <Route path='/admin/createCourse' element={<CreateQuiz />} />
                    </Route>

                </Routes>
                :
                <Routes>
                    <Route index element={<Login
                        isLogin={isLogin}
                        setIsLogin={setIsLogin}
                    />} />
                </Routes>
            }


        </>
    )
}
export default Layout
