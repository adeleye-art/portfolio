import { useEffect } from 'react';
import TestimonialCard from "./TestimonialCard"
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import Swiper from 'swiper/bundle';
import rnleo1 from "./assets/rnleo1.jpg"
import nonye from "./assets/nonye.jpg"

function Testimonial (){
    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const swiper = new Swiper('.testimonial-carousel', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 9000,
            disableOnInteraction: false,
          },
        });
      }, []);


    return(
        <div className="testimonial-style-one-area default-padding-bottom">
            <div className="container">
                <div className="testimonial-style-one-box">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">Testimonials</h4>
                            <h2 className="title">Customers feedback</h2>
                            <div className="devider"></div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="testimonial-carousel text-center swiper ">
                                <div className=" swiper-wrapper">
                                    <TestimonialCard 
                                        img = {<img src={rnleo1} alt="person1"/>}
                                        text = {
                                            `Adeleye's work on my site is exceptional! He's understanding, dedicated, and delivers beyond expectations. My consumers love the website, designed to perfection. I eagerly anticipate more wonders from him. The best.`
                                          }
                                        name ={`Rhaby Nickel`}
                                        occupation = {`Investment Adivisor`}
                                    
                                    />
                                    <TestimonialCard
                                    
                                         img = {<img src={nonye} alt="person1"/>}
                                        text = {`Collaborating with Adeleye transformed our projects. A skilled frontend developer, Adeleye brings precision and creativity to elevate user experiences. Their commitment to quality makes them a standout choice for frontend development initiatives`}
                                        name ={`Chinoye Desire`} 
                                    
                                        occupation = {`Data Analyst`}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}



export default Testimonial