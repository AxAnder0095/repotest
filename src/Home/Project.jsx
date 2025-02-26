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
            <div className='d-flex justify-content-center gap-3'>
                <Link id='project-button' to={projectProp.github}>Code</Link>
                <Link id='project-button' to={projectProp.demo}>Demo</Link>
            </div>
        </>
    )
}

export default Project;