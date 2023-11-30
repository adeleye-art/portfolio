/* eslint-disable react/prop-types */

import { useSpring, animated } from 'react-spring';


 

function Card({img, rating, text}){
  const { count } = useSpring({
    count: rating,
    from: { count: 0 },
    reset: true,
    config: { duration: 3000 },
    onRest: () => {},
  });

  return (
    <div className='expterise-item'>
      <div className="top">
        <div className='icon'>
          {img}
        </div>
        <div className="fun-fact">
          <div className="counter">
            <animated.h1 className="timer">
              {count.to(value => Math.floor(value))}
            </animated.h1>                           
            <div className="operator">%</div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <h4>{text}</h4>
      </div>
    </div>       
  )
}



export default Card