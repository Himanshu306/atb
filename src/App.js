import React, {Component, useState, useRef} from 'react';
//import {Header} from './components/header/Header.jsx';
import Hero from './components/hero/Hero.jsx';
import Cards from './components/cards/Cards.jsx';
import './App.css';
import './assets/scss/city.scss'
import {CardBackground} from './components/cards/CardBackground.jsx'
import { useSpring, animated } from 'react-spring';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import './assets/scss/newcard.scss';
import  SatelliteImg  from "./assets/img/satellite4.png";
import  AirImg  from "./assets/img/air.png";
import  EarthImg  from "./assets/img/earth.png";
import  FireImg  from "./assets/img/fire.png";
import  WaterImg  from "./assets/img/water.png";

function NewCard({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}

function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}

function Hero1({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + '%'
          }}
        >
          <div className="ratio-inner">
            <img src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
      <h1>How do we mould your story?</h1>
    </div>
  );
}

const cards = [
  {
    title: 'Website',
    description:
      'Landscapes with a touch of you',
    image: [EarthImg],
    imageRatio: 1
  },
  {
    title: 'Visual design',
    description:
      'Creativity that flows',
    image: [WaterImg],
    imageRatio: 1
  },
  {
    title: 'Content',
    description:
      "Copy like a breath of fresh air",
    image: [AirImg],
    imageRatio: 1
  },
  {
    title: 'Marketing',
    description:
      "Ignite a digital odyssey",
    image: [FireImg],
    imageRatio: 1
  }
];


export class App extends Component {



  constructor(props){
    super(props);
    this.state = {
      hero :{
        title: 'Your element',
        subtitle: 'Where you come from ',
        text: 'Let us tell your story',
      }
    }
  }

  render(){
    return (
      <div>
        <Hero title={this.state.hero.title} subtitle={this.state.hero.subtitle} text={this.state.hero.text} />
        {/* <Cards /> */}
        <div className="main">
          <Particles>
            <Hero1>
              <div className="container">
                <Info />
                <div className="row">
                  {cards.map((card, i) => (
                    <div className="column cards-style">
                      <NewCard>
                        <div className="card-title text-danger text-center">{card.title}</div>
                        <div className="card-body text-center">{card.description}</div>
                        <Image ratio={card.imageRatio} src={card.image} />
                      </NewCard>
                    </div>
                  ))}
                </div>
              </div>
            </Hero1>
          </Particles>
        </div>
        <div style={{position : 'relative'}}>
        <CardBackground />
        </div>
        <div>
          <img src={SatelliteImg} className="satelliteImg" alt="Satellite" width="80px" height="80px" />
        </div>
      </div>
    );
  }
}
