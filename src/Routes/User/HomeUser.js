

import './HomeUser.scss';


const HomeUser = (props) => {

    return (
        <>
            <div className="Home-container">
                <h1>
                    WELCOM TO MY WEBSITE
                </h1>
                <a className='btn btn-secondary goquiz' href='/quiz'>
                    go to my quiz
                </a>
            </div>

        </>
    )
}
export default HomeUser