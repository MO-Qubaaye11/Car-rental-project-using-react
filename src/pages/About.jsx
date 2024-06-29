import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import AboutSection from '../components/UI/AboutSection'
import { Container, Row, Col } from 'reactstrap'
import BecomeDriverSection from '../components/UI/BeComeDriverSection'

import driveImg from '../assets/all-images/drive.jpg'
import OurMembers from '../components/UI/OurMembers'
import '../Styles/about.css'


const About = () => {
  return <Helmet title='About'>
    <CommonSection title='About Us' />
    <AboutSection aboutClass='aboutPage' />

    <section className="about_page-section">
      <Container>
        <Row>

          <Col lg='6' md='6' sm='12'>
            <div className="about_page-img">
              <img src={driveImg} alt="" className='w-100 rounded-3'  />
            </div>
          </Col>
          <Col lg='6' md='6' sm='12'>
            <div className="about_page-content">
              <h2 className="section_title">We Are Committed
                To Provide Safe Ride Solution</h2>
              <p className="section_description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Perspiciatis qui, in accusamus autem deleniti eveniet odit 
                cumque, nisi beatae quibusdam itaque earum ab id, voluptatibus
                 perferendis quod molestiae nostrum quis!
              </p>

              <p className="section_description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Perspiciatis qui, in accusamus autem deleniti eveniet odit 
                cumque, nisi beatae quibusdam itaque earum ab id, voluptatibus
                 perferendis quod molestiae nostrum quis!
              </p>

              <div className='d-flex align-items-center gap-3 mt-4'>
                <span className='fs-4'><i class="ri-phone-line"></i> </span>
                <div>
                  <h6 className="section_subtitle">Need Any Help?</h6>
                  <h4 className='tel_text'><a href="tel:+252618552904">+252618552904</a></h4>
                </div>
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>

    <BecomeDriverSection />

    <section>
      <Container>
        <Row>

          <Col lg='12' className='mb-5 text-center'>
              <h6 className="section_subtitle">Experts</h6>
              <h2 className="section_title">Our Members</h2>
          </Col>

          <OurMembers />

        </Row>
      </Container>
    </section>

  </Helmet>
}

export default About
