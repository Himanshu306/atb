import React from "react";
import { Jumbotron } from 'bootstrap-4-react/lib/components';
import "../../assets/scss/star.scss";
import Typed from "react-typed";
import { Col, Container, Row } from 'bootstrap-4-react/lib/components/layout';
import { Header } from '../header/Header';
import { App } from "../../App";
import  SatelliteImg  from "../../assets/img/satellite4.png";
import ChatBotWin from "../../components/chatbot/ChatBotWin.jsx";

export class FrontWelcome extends React.Component {

  render() {
    return (
      <div id="home" className="intro route bg-image background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
          <Header />
          <Container fluid={true}>
              <Row className="justify-content-center py-5">
                  <Col md={8} sm={12}  style={{top : '40%', position: 'absolute'}}>
                      <h3 className="display-1 font-weight-bold text-danger">
                        Hi, I'm ATB
                      </h3>
                      <h3 className="display-7 font-weight-light text-white"> 
                      <Typed
                          strings={[
                              "WELCOME TO ALL THINGS BRANDING"
                          ]}
                          typeSpeed={80}
                          backDelay={1100}
                          backSpeed={30}
                          loop
                          />
                      </h3>
                      <h4 className="display-7 font-weight-bold text-danger" ><a href={App}>Go Ahead</a></h4>    
                  </Col>
                  <Col>
                    <img src={SatelliteImg} onClick={{ChatBotWin}} className="satelliteImg" height="80px" width="80px" alt="Satellite" />
                  </Col>
              </Row>
          </Container>
      </Jumbotron>
  </div>      
    );
  }
}