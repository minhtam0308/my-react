
import './header.scss'

const Header = (props) => {


    return (
        <>
            <div className="header-container">
                <nav class="navbar navbar-dark bg-dark">
                    <div>
                        <a class="navbar-brand" href="#">Study</a>
                    </div>

                    <div class="option-nav">

                        <div class="nav-item">
                            <a class="nav-link" id="nav-link" aria-current="page" href="#">Home</a>
                        </div>
                        <div class="nav-item">
                            <a class="nav-link" id="nav-link" aria-current="page" href="#">Home</a>
                        </div>
                        <div class="nav-item">
                            <a class="nav-link active" id="nav-link" aria-current="page" href="#">Home</a>
                        </div>
                    </div>
                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>

                </nav>
            </div>
        </>
    )
}
export default Header