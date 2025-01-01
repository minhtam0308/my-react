

import Login from './Routes/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import { useState } from 'react';
import { store } from './redux/store';


const Layout = () => {

    const [isLogin, setIsLogin] = useState(store.getState().isLogin);

    return (
        <>
            {isLogin ?
                <Routes>
                    <Route index element={<Home />} />
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
