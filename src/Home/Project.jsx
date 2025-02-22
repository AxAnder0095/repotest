import './ProjectStyles.css'
import {Link} from "react-router-dom";

function Project(projectProp) {
    return (
        <>
            <div className='d-flex justify-content-center'>
                    <img id='project-image' src={projectProp.image} alt={projectProp.alt}/>
            </div>
            <p id='project-title'>{projectProp.title}</p>
            <p id='project-desc'>{projectProp.description}</p>
            <div className='d-flex justify-content-center'>
                {/*<button id='project-button'>*/}
                {/*    <a href={projectProp.github} id='project-link'>Code</a>*/}
                {/*</button>*/}
                <Link id='project-button' to={projectProp.github}>Code</Link>
            </div>
        </>
    )
}

export default Project;