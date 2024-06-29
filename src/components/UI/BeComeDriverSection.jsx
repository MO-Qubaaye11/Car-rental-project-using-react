import React from 'react'
import '../../Styles/become-driver.css'
import { Container, Row, Col } from 'reactstrap'
import driverImg from '../../assets/all-images/cars-img/toyota-offer-2.png'

const BeComeDriverSection = () => {
  return <section className='become_driver'>
    <Container>
        <Row>
            <Col lg='6' md='6' sm='12' className='become_driver-img'>
            <img src={driverImg} alt="" className='w-100' />
            </Col>

            <Col lg='6' md='6' sm='12'>
            <h2 className="section_title become_driver-title">
                Do You Want To Earn With Us? So Don't Be Late!
            </h2>
            <button className="btn become_driver-btn">
                Become a Driver
            </button>
            </Col>
        </Row>
    </Container>
  </section>
}

export default BeComeDriverSection