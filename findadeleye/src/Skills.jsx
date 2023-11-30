import Card from "./card"
import reactLogo from "./assets/react.png"
import typeScript from './assets/typeScript.png'
import net from './assets/dotnet.png';
import jest from './assets/jest.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';


function Skills(){
    const mark = <FontAwesomeIcon icon={faCheck} size="2xs" style={{color: "#2acf5c",}}/>


    return (
        <>
        <div id="services" className="expertise-area default-padding-top animated undefined active">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="heading-left mb-60">
                            <h4 className="sub-title">Personal skills</h4>
                            <h2 className="title">Check my expertise</h2>

                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="expertise-items">
                            <Card img = {<img src={reactLogo}/>}
                            rating={95} text="React.js"/>
                            <Card img = {<img  src={typeScript}/>}
                            rating={90} text="TypeScript"/>
                            <Card img = {<img src={net}/>}
                            rating={80} text="Asp.net"/>          
                            <Card img = {<img  src={jest}/>}
                            rating={80} text="jest"/>          
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="services-style-two-area default-padding">
            <div className="container">
                <div className="services-box">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="heading-left mb-60">
                                <h4 className="sub-title">WHAT I DO</h4>
                                <h2 className="title" >MY SPECIALICIATION</h2>
                            </div>
                        </div>
                    </div>

                





           
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-style-two-items">
                                <div className="">
                                    <div className="swiper-wrapper" id="swiper-wrapper-67a96b427063c10d10">
                                        <div className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev">
                                            <div className="services-style-two">
                                                <div className="row">
                                                    <div className="col-lg-5">
                                                        <h2 className="bg-text D">D</h2>

                                                    </div>
                                                    <div className="col-lg-7 pl-50 pl-md-15 pl-xs-15">
                                                        <div className="services-two-info">
                                                            <h2>Frontend Development</h2>
                                                            
                                                            <p>Crafting captivating website designs that seamlessly blend aesthetics with functionality.
                                                                <br/> Indulgence diminution and modern design principles guide my work, 
                                                                <br/>ensuring an engaging and minimalist user interface.
                                                                <br/> Elevate your online presence with my expertise in responsive development.
                                                            </p>
                                                            <ul className="s mt-30">
                                                                <li>{mark}  Ongoing website updates and enhancements</li>
                                                                <li>{mark}  Specialized in WordPress support</li>
                                                                <li> {mark} Optimization of themes and plugins</li>
                                                                <li> {mark} Ensuring a secure and scalable platform</li>
                                                                <li> {mark} Social media management for maximum online impact</li>
                                                            </ul>
                                                            <div className="btn-standard mt-10">
                                                            <a href='#contact'>HIRE ME</a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div> 
                        
                </div>
            </div>
        </div>

        </>
        
    )
}

export default Skills 