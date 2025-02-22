import './ProjectsStyles.css';
import {ProjectData} from "./ProjectData.jsx";
import Project from "./Project.jsx";



function Projects(){
    return (
        <div>
            <div className='row d-flex justify-content-center gap-4'>
                <div className='project col-lg-3'>
                    <Project
                        image={ProjectData.portfolio.image}
                        title={ProjectData.portfolio.title}
                        alt={ProjectData.portfolio.alt}
                        description={ProjectData.portfolio.description}
                        github={ProjectData.portfolio.github}
                    />
                </div>
                <div className='project col-lg-3'>
                    <Project
                        image={ProjectData.miniCactpot.image}
                        title={ProjectData.miniCactpot.title}
                        alt={ProjectData.miniCactpot.alt}
                        description={ProjectData.miniCactpot.description}
                        github={ProjectData.miniCactpot.github}
                    />
                </div>
                {/*<div className='project col-lg-3'>three</div>*/}
            </div>
        </div>
    )
}

export default Projects;