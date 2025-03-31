import './body.css'

function Body() {
    return (
        <>
            <h1 className='intro-name'>
                It's Faikar!
            </h1>
            <div className='faikar-log'>

            </div>
            <div className='body-container'>
                <a href="../project.html"className='body-content'>
                    <h1>Project</h1>
                </a>
                <a href="../aboutme.html" className='body-content'>
                    <h1>aboutme</h1>
                </a>
                <a href="./music.html" className='body-content'>
                    <h1>music</h1>
                </a>
            </div>
            <div id='project'>

            </div>

        </>
    )
}

function FaikarLog() {
    return (
        <>
        </>
    )
}

export default Body