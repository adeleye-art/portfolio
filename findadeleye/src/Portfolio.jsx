    import PortfolioCard from "./PortfolioCard"

    import rnleo from './assets/rnleo.jpg'
    import toDo from './assets/toDo.png'
    

function Portfolio(){
    const projects = [
        {
            headingImg: <img src={rnleo} alt="investment app" />,
            client: 'Rhaby Nickel',
            type: 'Static website',
            date: '2021',
            title: 'investment app',
            address: 'online',        
            links:'rnleocompanylimited.com',
            details: 'This project showcases my ability to create impactful web applications that serve a specific purpose and enhance the user experience. The combination of cutting-edge technology, security measures, and user-centric design makes this investment website a valuable asset for those navigating the complex world of finance.',
            moreDetails:'In my role as a frontend developer, I spearheaded the development of a dynamic and mobile-optimized investment platform. Recognizing the increasing reliance on mobile devices, this platform was meticulously crafted to provide users with a seamless and responsive experience across various mobile devices'
        },
        {
            headingImg: <img src={toDo} alt="toDO app" />,
            client: 'Personal project',
            type: 'web app',
            date: '2023',
            address: 'online',
            title: 'To-Do App',
            links:<a href="https://findadeleye-to-do.netlify.app/" target="_blank" rel="noreferrer">To-Do app</a>,
            details: "As a part of my personal projects, I developed a Todo App that helps users manage their tasks efficiently. The application provides a user-friendly interface to add, edit, and delete tasks, with a real-time update feature for seamless user experience.",
            moreDetails:"Utilizing React.js for the frontend and incorporating state management for efficient data handling, the Todo App showcases my proficiency in building interactive and responsive web applications. The project also demonstrates my commitment to creating solutions that enhance productivity and organization.",
            
        }
    ];

    return(
        <div id="portfolio" className="project-style-one-area default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="heading-left">
                            <h4 className="sub-title"> Recent Work</h4>
                            <h2 className="title">Showcasing My Project</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt--50">
                    {projects.map((project, index) => (
                        <PortfolioCard img={project.headingImg} projectData={project} key={index} title={project.title}/>
                    ))}
                </div>
            </div>
        </div>
    );
}


    export default Portfolio