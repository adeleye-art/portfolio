function TestimonialCard(testiCard){
    return(
    
                <div className="swiper-slide">
                    <div className="testimonial-style-one">
                        <div className="item">
                            <div className="thumb">
                                {testiCard.img}

                            </div>
                            <div className="content">
                                <p>{testiCard.text}</p>
                            </div>
                        
                            <div className="provider">
                                <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>

                                </div>
                                <div className="info">
                                    <h4>{testiCard.name}</h4>
                                    <span>{testiCard.occupation}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            
    
    )
}



export default TestimonialCard