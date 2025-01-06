
import { useEffect, useState } from 'react'
import './CourseUser.scss'
import { getAllQuizService } from '../../service/UserService'
const CourseUser = () => {

    const [dataQuiz, setDataQuiz] = useState({});


    useEffect(() => {
        getAllQuiz();

    }, [])

    const getAllQuiz = async () => {
        let res = await getAllQuizService();
        setDataQuiz(res.data);
    }
    // console.log('dataQuiz');
    console.log(dataQuiz);

    return (
        <>
            <div className="course-container">
                {dataQuiz && dataQuiz.length > 0 && dataQuiz.map((item, index) => {
                    return (

                        <div className="card" key={`${index}quiz`}>
                            <div className="img-quiz">
                                <img src={item.image} className="card-img-top" alt="..." />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Description: {item.description}</p>
                                <p className="card-text">Difficult: {item.difficulty}</p>
                                <a href="#" className="btn btn-primary">Doing Quiz</a>
                            </div>
                        </div>

                    )
                })}

            </div>
        </>
    )
}

export default CourseUser