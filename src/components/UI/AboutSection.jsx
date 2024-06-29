import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../Styles/about-section.css'
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'

const AboutSection = ({aboutClass}) => {
  return <section className='about_section'
   style={aboutClass === 'aboutPage' ? {marginTop: "0px" } : {marginTop: "280px" } }>
    <Container>
        <Row>
            <Col lg='6' md='6'>
            <div className="about_section-content">
                <h4 className="section_subtitle text-center">About Us</h4>
                <h2 className="section_title text-center">Welcome to car rent service</h2>
                <p className="section_description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Harum accusamus rem doloribus modi quis repellat excepturi, maiores at incidunt
                      inventore architecto culpa nesciunt. Quaerat adipisci illo nihil voluptatibus 
                      temporibus amet!</p>
               
                <div className="about_section-item d-flex align-items-center">
                    
                    <p className="section_description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                    </p>

                    <p className="section_description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                    </p>

                </div>

                <div className="about_section-item d-flex align-items-center">
                    
                    <p className="section_description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                    </p>

                    <p className="section_description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                    </p>

                </div>

            </div>
            </Col>

            <Col lg='6' md='6'>
            <div className="about_img">
                <img src={aboutImg} className='w-100' alt="" />
            </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default AboutSection