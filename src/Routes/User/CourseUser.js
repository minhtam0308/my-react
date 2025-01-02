
import { useEffect, useState } from 'react'
import './CourseUser.scss'
import { getAllQuizService } from '../../service/UserService'
const CourseUser = () => {

    // const [dataQuiz, setDataQuiz] = useState({});


    // useEffect(() => {
    //     getAllQuiz();

    // }, [])

    // const getAllQuiz = async () => {
    //     let res = await getAllQuizService();
    //     setDataQuiz(res.data);
    //     console.log(dataQuiz);
    // }
    console.log('dataQuiz');

    return (
        <>
            <div className="course-container">
                <div className="card">
                    <div className="img-quiz">
                        <img src="../../../public/bgHome.jpg" className="card-img-top" alt="..." />
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseUser