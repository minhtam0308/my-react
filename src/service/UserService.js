import axios from "../axios/customize_axios";



const LoginService = async (email, password) => {
    let res = await axios.post('api/login', {
        email, password
    });
    return res;

}

const getAllQuizService = async () => {
    let res = await axios.get('api/getQuizByUser');
    return res;
}

export {
    LoginService,
    getAllQuizService
}