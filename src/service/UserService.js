import axios from "../axios/customize_axios";



const LoginService = async (email, password) => {
    let res = await axios.post('api/login', {
        email, password
    });
    return res;

}

export {
    LoginService
}