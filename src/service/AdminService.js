import axios from "../axios/customize_axios";

const CreateNewQuizService = async (name, description, difficulty, image) => {


    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                resolve(reader.result)
            }
            reader.onerror = reject
        })
    }

    let img = await getBase64(image);
    try {
        let res = await axios.post('api/postQuizByAdmin', {
            name, description, difficulty, image: img
        });
        return res;
    } catch (e) {
        console.log(e);
    }


}

export default CreateNewQuizService
