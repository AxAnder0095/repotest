import './homeStyles.css'
import HTML from './imgs/html.png'
import CSS from './imgs/css-3.png'
import JS from './imgs/java-script.png'
import CSHARP from './imgs/c-sharp.png'
import JAVA from './imgs/java.png'
import PY from './imgs/python.png'
import CPP from './imgs/c-.png'
import BOOTSTRAP from './imgs/bootstrap.png'
import TYPESC from './imgs/typescript.png'
import REACTIMG from './imgs/physics.png'
import SQLIMG from './imgs/sql.png'
import MYSQLIMG from './imgs/mysql-database.png'
import RELATIONIMG from './imgs/relational.png'
import COMPUTERIMG from './imgs/coding (1).png'
import BOOKS from './imgs/stack-of-books.png'
import GRAD from './imgs/graduated.png'
import WORK from './imgs/software.png'
import {Icons} from "../Objects/Icons.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Projects from "./Projects.jsx";



function Home() {
    return (
        <>
            <Navbar/>
            <div className='container home-container'>

                {/*introduction row*/}
                <div className='row intro-row'>
                    <div className='col-lg-1 d-flex justify-content-center align-items-center'>

                    </div>
                    <div className='col-lg-11 d-flex justify-content-center align-items-center'>
                        <div className='row'>
                            <h3 className='text-dark'>Hi! i&#39;m</h3>
                            <h1 className='name' id='header-name'>Alexander Brown </h1>
                            <p className='about-me-desc'>and I&#39;m a recent graduate from Aurora University.
                                I studied for a degree in Computer Science and learned many technologies and languages along the way, 
                                my favorite ones so far being C#, Java, Python and React.js. When I was younger and 
                                started college, I initially didn&#39;t know which degree I would go for, but I always 
                                remembered the time I attempted to make my own personal website to show to my brother.
                                While still in my first semester, i would talk to some of my classmates who
                                were in a computer science curriculum and ask them to show me some projects they made.
                                A few of them showed me some websites they made for their class project which i thought looked amazing,
                                and then one classmate showed me his own personal app he made for his desktop that displayed his
                                pc hardware specs. After witnessing what you can create with programming, I finally made
                                the decision to pursue a degree in Computer Science.
                                Being in this space has made me thankful as a person for pushing me to be a
                                critical thinker and a great problem solver. Some of my other favorite things to do
                                not relating to programming are weight training, video games and cooking.
                            </p>
                        </div>
                    </div>
                </div>


                <div className='container mb-5 border border-dark'/>

                <div className='text-center text-dark mb-5' id='projects-ID'>
                    <img src={WORK} alt={'project image'}
                         style={{ width: '150px', height: '150px' }}
                         className='mb-3'/>
                    <h1 className=''>Projects</h1>
                    <div>My area for displaying projects I have made</div>
                </div>

                <div className='container projects-container'>
                    <Projects/>
                </div>

                <div className='container mb-5 mt-5 border border-dark'/>

                {/*skill row title*/}
                <div className='text-center text-dark' id='skill-ID'>
                    <img src={COMPUTERIMG} alt={'computer image'}
                         style={{ width: '150px', height: '150px' }}
                         className='mb-3'/>
                    <h1 className=''>Skills</h1>
                    <div className=' mb-5'>Skills I have obtained though many years of academic work
                        and personal journey throughout the years</div>
                </div>

                {/*skill row*/}
                <div className='row skill-row d-flex justify-content-center gap-2'>
                    <div className='col-lg-3 sk'>
                        <div className='skill-box'>
                            <div className='skill-box-title'>
                                {/*<p>hello</p>*/}
                                <div>
                                    <svg xmlns={Icons.codeSlash.path} width="40" height="40" fill="currentColor"
                                         className={Icons.codeSlash.iconClassName + ' asdf'}
                                         viewBox="0 0 16 16">
                                        <path
                                            d={Icons.codeSlash.d}/>
                                    </svg>
                                </div>
                                <div className='ms-2'>Web Development</div>
                            </div>
                            <div className='skill-box-description '>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={HTML}
                                             alt={'html-image'}

                                        />
                                        <span>HTML</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={CSS}
                                             alt={'css-image'}
                                        />
                                        <span>CSS</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={BOOTSTRAP}
                                             alt={'bootstrap image'}
                                        />
                                        <span>Bootstrap</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={TYPESC}
                                             alt={'typescript image'}
                                        />
                                        <span>Typescript</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={JS}
                                             alt={'javascript image'}
                                        />
                                        <span>Javascript</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={REACTIMG}
                                             alt={'react image'}
                                        />
                                        <span>React</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 sk'>
                        <div className='skill-box'>
                            <div className='skill-box-title'>
                                <svg xmlns={Icons.braces.path} width="40" height="40" fill="currentColor"
                                     className={Icons.braces.iconClassName}
                                     viewBox="0 0 16 16">
                                    <path
                                        d={Icons.braces.d}/>
                                </svg>
                                <div className='ms-2'>Programming</div>
                            </div>
                            <div className='skill-box-description'>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={JAVA}
                                             alt={'JAVA-image'}
                                        />
                                        <span>Java</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={PY}
                                             alt={'PY image'}
                                        />
                                        <span>Python</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={CSHARP}
                                             alt={'C# image'}
                                        />
                                        <span>C#</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={CPP}
                                             alt={'c++ image'}
                                        />
                                        <span>C++</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 sk'>
                        <div className='skill-box'>
                            <div className='skill-box-title'>
                                <svg xmlns={Icons.database.path} width="40" height="40" fill="currentColor"
                                     className={Icons.database.iconClassName}
                                     viewBox="0 0 16 16">
                                    <path
                                        d={Icons.database.d}/>
                                </svg>
                                <div className='ms-2'>Databases</div>
                            </div>
                            <div className='skill-box-description'>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={SQLIMG}
                                             alt={'sql image'}
                                        />
                                        <span>SQL</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={MYSQLIMG}
                                             alt={'mysql image'}
                                        />
                                        <span>MySQL</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={RELATIONIMG}
                                             alt={'relational database image'}
                                        />
                                        <span>Relational Databases</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container mt-5 mb-5 border border-dark'/>

                {/*education title*/}
                <div className='text-center text-dark' id='education-ID'>
                    <img src={BOOKS} alt={'books image'}
                         style={{ width: '150px', height: '150px' }}
                         className='mb-3'/>
                    <h1 className=''>Education</h1>
                    <div className=' mb-5'>Colleges and Universities I attended during the duration of my
                        academic life</div>
                </div>

                {/*education row*/}
                <div className='row '>
                    <div className='col-lg-2'>{/* spacer */}</div>
                    <div className='col-lg-5'>
                        <div className='school-container mb-4'>
                            <div className='school'>
                                <div className='text-center'>
                                    <b>Aurora University</b>
                                </div>
                            </div>
                            <div className='school-desc'>
                                <span>
                                    Bachelors of Computer Science
                                </span>
                            </div>
                        </div>
                        <div className='school-container'>
                            <div className='school'>
                                <div className='text-center'>
                                    <b>Waubonsee Community College</b>
                                </div>
                            </div>
                            <div className='school-desc'>
                                <span>
                                    Associates of Applied Sciences
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-1'>{/* spacer */}</div>
                    <div className='col-lg-4 d-flex justify-content-center align-items-center'>
                        <img src={GRAD} alt='orange'
                             style={{ width: '350px', height: '350px' }} id='grad-image'/>
                    </div>
                </div>
            </div>
            <div className='container mt-5 '></div>
            <Footer/>
        </>
    )
}

export default Home;