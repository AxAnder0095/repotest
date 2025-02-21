import './ProjectStyles.css'
import Portfolio from './imgs/portfolio.png'



function Projects(){

    const ProjectData = {
        portfolio: {
            image: Portfolio,
            title: 'Portfolio',
        }
    }

    return (
        <div>
            <div className='row d-flex justify-content-center gap-3'>
                <div className='project col-lg-3'>
                    <img src={ProjectData.portfolio.image} alt="Portfolio" style={{width: '300px', height: '200px'}} />
                </div>
                <div className='project col-lg-3'>two</div>
                <div className='project col-lg-3'>three</div>
            </div>
        </div>
    )
}

export default Projects;