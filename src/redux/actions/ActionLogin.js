

const USER_LOGIN_SUCESS = 'USER_LOGIN_SUCESS';
const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
const USER_LOGOUT = 'USER_LOGOUT';

const ActionLoginSuccess = (data) => ({
    type: USER_LOGIN_SUCESS,
    payload: data
})

const ActionLoginFail = (data) => ({
    type: USER_LOGIN_FAIL,
    payload: data
})


export {
    USER_LOGIN_SUCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    ActionLoginSuccess,
    ActionLoginFail
}