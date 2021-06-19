import React from 'react';
import Card from 'bootstrap-4-react/lib/components/card';
import { Col, Container, Row } from 'bootstrap-4-react/lib/components/layout';
import Box from '@material-ui/core/Box';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Cards = () =>{
    return(
        <>
            <Container>
                <h1 className="m-5 text-center text-white">Upcoming Title</h1>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Box boxShadow={5} className="cont">
                            <Card className="text-center rounded dotted-border mb-5" style={{background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'}}>
                                <Card.Body>
                                    <DeleteOutlinedIcon className="rotate" style={{ fontSize : 80, color : '#fff'}} />
                                    <Card.Title className="font-weight-bold text-white mt-2">Special title treatment</Card.Title>
                                    <Card.Text className="font-weight-light">
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Box>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Box boxShadow={5} className="cont">
                            <Card className="text-center rounded dotted-border mb-5" style={{background: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)'}}>
                                <Card.Body>
                                    <DeleteOutlinedIcon style={{ fontSize : 80, color : '#fff'}} />
                                    <Card.Title className="font-weight-bold text-white mt-2">Special title treatment</Card.Title>
                                    <Card.Text className="font-weight-light">
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Box>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Box boxShadow={5} className="cont">
                            <Card className="text-center rounded dotted-border mb-5" style={{background: 'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)'}}>
                                <Card.Body>
                                    <DeleteOutlinedIcon style={{ fontSize : 80, color : '#fff'}} />
                                    <Card.Title className="font-weight-bold text-white mt-2">Special title treatment</Card.Title>
                                    <Card.Text className="font-weight-light">
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Box>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Box boxShadow={5} className="cont">
                            <Card className="text-center rounded dotted-border mb-5" style={{background: 'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)'}}>
                                <Card.Body>
                                    <DeleteOutlinedIcon style={{ fontSize : 80, color : '#fff'}} />
                                    <Card.Title className="font-weight-bold text-white mt-2">Special title treatment</Card.Title>
                                    <Card.Text className="font-weight-light">
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Cards;


