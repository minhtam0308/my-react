import { useState } from "react";
import CreateNewQuizService from "../../service/AdminService";



const CreateQuiz = () => {



    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [difficulty, setDifficult] = useState('EASY');
    const [image, setImage] = useState('');


    const handlePostNewQuiz = async () => {
        try {
            let res = await CreateNewQuizService(name, description, difficulty, image);
            console.log(res);
        } catch (e) {
            console.log(e)
        }


    }
    return (
        <>
            <div className="Create-container m-5">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input type="text" value={name}
                            className="form-control"
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <label >Description:</label>
                            <textarea value={description}
                                className="form-control"
                                rows="3"
                                onChange={(event) => {
                                    setDescription(event.target.value);
                                }}
                            ></textarea>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label >Difficulty:</label>

                        <select className="form-control" value={difficulty} onChange={(event) => {
                            setDifficult(event.target.value);
                        }}>
                            <option value={'EASY'}>EASY</option>
                            <option value={'NORMAL'}>NORMAL</option>
                            <option value={'HARD'}>HARD</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input
                            className="form-control"
                            type="file"
                            onChange={(event) => {
                                setImage(event.target.files[0]);
                            }}
                        />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => {
                        handlePostNewQuiz();
                    }}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default CreateQuiz;