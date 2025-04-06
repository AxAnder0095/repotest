import './ProjectStyles.css'
import {Link} from "react-router-dom";

function Project(projectProp) {
    return (
        <>
            <div className='project-image-container'>
                    <img id='project-image' src={projectProp.image} alt={projectProp.alt}/>
            </div>
            <div className={'project-desc-container'}>
                <p id='project-title'>{projectProp.title}</p>
                <p id='project-desc'>{projectProp.description}</p>
            </div>
            <div className='link-container'>
                <div className={'link-container-wrapper'}>
                    <Link id='project-button' to={projectProp.github}>Code</Link>
                    <Link id='project-button' to={projectProp.demo}>Demo</Link>
                </div>
            </div>
        </>
    )
}

export default Project;