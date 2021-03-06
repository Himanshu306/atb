import { Jumbotron } from 'bootstrap-4-react/lib/components';
import { Col, Container, Row } from 'bootstrap-4-react/lib/components/layout';
import React from 'react';
import Typical from 'react-typical'
import { Header } from '../header/Header';
import "../../assets/scss/star.scss";
import Typed from "react-typed";

// const bgImg = {
//     backgroundImage : `url(${bgBlackImg})`,
//     backgroundSize : 'cover',
//     backgroundPosition : 'center',
//     backgroundRepeat : 'no-repeat',
//     position  : 'relative',
//     height : window.innerHeight
// }


const Hero = (props) => {
    return(
        <>
            <div id="home" className="intro route bg-image background">
                <div id="stars" />
                <div id="stars2" />
                <div id="stars3" />
                <Jumbotron className="bg-transparent jumbotron-fluid p-0">
                    <Header />
                    <Container fluid={true}>
                        <Row className="justify-content-center py-5">
                            <Col md={8} sm={12}  style={{top : '40%', position: 'absolute'}}>
                                {/* { props.title && <h1 className="display-1 font-weight-bold text-danger">{props.title}</h1> } */}
                                { props.title && <h3 className="display-1 font-weight-bold text-danger">
                                <Typed
                                    strings={[
                                        "Your story",
                                        "Your brand",
                                        "With a dash of panache"
                                    ]}
                                    typeSpeed={80}
                                    backDelay={1100}
                                    backSpeed={30}
                                    loop
                                    />
                                    </h3>}
                                { props.subtitle && <h3 className="display-4 font-weight-light text-white">{props.subtitle}
                                <Typed
                                    strings={[
                                        "your raison d???etre",
                                        "your values",
                                        "and your style"
                                    ]}
                                    typeSpeed={80}
                                    backDelay={1100}
                                    backSpeed={30}
                                    loop
                                    />
                                </h3> }
                                <h4 className="display-5 font-weight-light text-white">Let us tell your story</h4>    
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        </>
    );
}

export default Hero;