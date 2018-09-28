import React from 'react';
import { Container, Card, CardBody, CardTitle, Button, ButtonGroup, Row, Col } from 'reactstrap';

const Cards = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm="12">
                        <h3>Group Projects</h3>
                        <hr />
                    </Col>
                </Row>
            <Row>
                <Col lg="4" md="6">
                    <Card>
                        <CardTitle><i className="fa fa-arrow-up" aria-hidden="true"></i> Mentor Up</CardTitle>
                        <CardBody>
                            <img src={require('../assets/mentorupdemo.gif')} height="200px" width="250px" alt="books" />
                                <p className="app-info">MERN app designed to further women in tech by promoting mentorship, community and learning.</p>
                                <ButtonGroup>
                                    <Button a href="https://agile-caverns-57821.herokuapp.com/" target="_blank">View App</Button>
                                    <Button a href="https://github.com/tenillez/MentorUp" target="_blank">View Code</Button>
                                </ButtonGroup>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="6">
                    <Card>
                        <CardTitle><i className="fa fa-book" aria-hidden="true"></i> Storyboard Adventures</CardTitle>
                        <CardBody>
                            <img src={require('../assets/story.png')} height="200px" width="250px" alt="books" />
                                <p className="app-info">MVC structured application that allows users to create and collaborate to write stories.</p>
                                <ButtonGroup>
                                    <Button a href="https://storyboardadventures.herokuapp.com/dashboard" target="_blank">View App</Button>
                                    <Button a href="https://github.com/cmronk/storyboard" target="_blank">View Code</Button>
                                </ButtonGroup>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="6">
                    <Card>
                        <CardTitle><i className="fa fa-music" aria-hidden="true"></i> VIKI</CardTitle>
                        <CardBody>
                            <img src={require('../assets/viki.png')} height="200px" width="250px" alt="books" />
                            <p className="app-info">Piano keyboard and a Youtube playlist to teach you piano via Tone.js & Youtube API.</p>    
                                <ButtonGroup>
                                    <Button a href="https://cmronk.github.io/VIKI/" target="_blank">View App</Button>
                                    <Button a href="https://github.com/cmronk/VIKI" target="_blank">View Code</Button>
                                </ButtonGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <br />
                <Col sm="12">
                    <h3>Applications Built</h3>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col lg="4" md="6">
                    <Card>
                        <CardTitle><i className="fa fa-flask" aria-hidden="true"></i> Science Scraper</CardTitle>
                        <CardBody>
                            <img src={require('../assets/scraperDemo.gif')} height="200px" width="250px" alt="books" />
                                <p className="app-info">MVC application that gathers articles from Popular Mechanics.</p>
                                <ButtonGroup>
                                    <Button a href="https://glacial-escarpment-81369.herokuapp.com/" target="_blank">View App</Button>
                                    <Button a href="https://github.com/cmronk/mongoscrape" target="_blank">View Code</Button>
                                </ButtonGroup>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="6">
                    <Card>
                        <CardTitle><i className="fa fa-mouse-pointer" aria-hidden="true"></i> Clicky</CardTitle>
                        <CardBody>
                            <img src={require('../assets/clicky.png')} height="200px" width="250px" alt="books" />
                                <p className="app-info">Clicky is a Dr. Seuss themed React game designed to test your memory.</p>
                                <ButtonGroup>
                                    <Button a href="https://cmronk.github.io/clickyclickclickity/" target="_blank">View App</Button>
                                    <Button a href="https://github.com/cmronk/clickyclickclickity" target="_blank">View Code</Button>
                                </ButtonGroup>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="6">
                    <Card>
                        <CardTitle><i className="fa fa-repeat" aria-hidden="true"></i> Giphy</CardTitle>
                        <CardBody>
                            <img src={require('../assets/giphy.gif')} height="200px" width="250px" alt="books" />
                                <p className="app-info">Fetch Gifs from the catergories or create your own. Brought to you by the Giphy API.</p>    
                                <ButtonGroup>
                                    <Button a href="https://cmronk.github.io/GifTastic/" target="_blank">View App</Button>
                                    <Button a href="https://github.com/cmronk/GifTastic" target="_blank">View Code</Button>
                                </ButtonGroup> 
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            </Container>
        </div >
    )
}

export default Cards;