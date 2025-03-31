import './navbar.css'

function Navbar() {
    return (
        <>
            <nav>
                <div className='name-nav'>
                    <a href="./index.html" className='nav-item-click'>Faikar</a>
                </div>
                <div className='nav-contents'>
                    <div className='nav-item'>
                        <a href="./index.html" className='nav-item-click'>Project</a>
                    </div>
                    <div className='nav-item'>
                        <a href="./index.html" className='nav-item-click'>About Me</a>
                    </div>
                    <div className='nav-item'>
                        <a href="./index.html" className='nav-item-click'>Music</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar