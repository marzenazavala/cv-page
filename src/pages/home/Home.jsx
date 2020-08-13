import React from 'react';
import { useSpring, animated } from 'react-spring'
import './home.scss';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const Home = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return(
        <div className='home-container'>
            <div className='box-container' onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <animated.div className='box box-1' style={{ transform: props.xy.interpolate(trans1) }}>js</animated.div>
                <animated.div className='box box-2' style={{ transform: props.xy.interpolate(trans2) }}>react</animated.div>
                <animated.div className='box box-3'style={{ transform: props.xy.interpolate(trans3) }}>react</animated.div>
                <animated.div  className='box box-4' style={{ transform: props.xy.interpolate(trans4) }}>js</animated.div >
                <animated.div className='box box-5' style={{ transform: props.xy.interpolate(trans3) }}>cv</animated.div>
                <animated.div className='box box-6'style={{ transform: props.xy.interpolate(trans2) }}>me</animated.div>
            </div>
            
        </div>
    )
}

export default Home