import './ProjectsStyles.css';
import {ProjectData} from "./ProjectData.jsx";
import Project from "./Project.jsx";



function Projects(){
    return (
        <div>
            <div className='projects'>
                <div className='project'>
                    <Project
                        image={ProjectData.portfolio.image}
                        title={ProjectData.portfolio.title}
                        alt={ProjectData.portfolio.alt}
                        description={ProjectData.portfolio.description}
                        github={ProjectData.portfolio.github}
                        demo={ProjectData.portfolio.demo}
                    />
                </div>
                <div className='project'>
                    <Project
                        image={ProjectData.weatherApp.image}
                        title={ProjectData.weatherApp.title}
                        alt={ProjectData.weatherApp.alt}
                        description={ProjectData.weatherApp.description}
                        github={ProjectData.weatherApp.github}
                        demo={ProjectData.weatherApp.demo}
                    />
                </div>
                <div className={'project'}>
                    <Project
                        image={ProjectData.animationSite.image}
                        title={ProjectData.animationSite.title}
                        alt={ProjectData.animationSite.alt}
                        description={ProjectData.animationSite.description}
                        github={ProjectData.animationSite.github}
                        demo={ProjectData.animationSite.demo}
                    />

                </div>
                <div className='project'>
                    <Project
                        image={ProjectData.miniCactpot.image}
                        title={ProjectData.miniCactpot.title}
                        alt={ProjectData.miniCactpot.alt}
                        description={ProjectData.miniCactpot.description}
                        github={ProjectData.miniCactpot.github}
                        demo={ProjectData.miniCactpot.demo}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;