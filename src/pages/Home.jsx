import React from 'react'

import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import FindCarForm from '../components/UI/FindCarForm';
import AboutSection from '../components/UI/AboutSection';
import ServicesList from '../components/UI/ServicesList';
import carData from '../assets/data/carData'
import CarItem from '../components/UI/CarItem';
import BeComeDriverSection from '../components/UI/BeComeDriverSection';
import Testimonials from '../components/UI/Testimonials';
import BlogList from '../components/UI/BlogList';

const Home = () => {
  return ( <Helmet title='Home'>

    {/* ========  Hero Section ===========     */}
  <section className="p-0 hero_slider-section">
    <HeroSlider />

    <div className="hero_form">
      <Container >
        <Row className='form_row' >
          <Col lg='4' md='4'>
          <div className="find_cars-left">
            <h2>Find your best car here.</h2>
          </div>
          </Col>

          <Col lg='8' md='8'>
          <FindCarForm />
          </Col>
        </Row>
      </Container>
    </div>

  </section>

  {/* ================ About Section ============ */}
    <AboutSection />

    {/* ================ Services Section ========= */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
          <h6 className="section_subtitle">See Our</h6>
          <h2 className="section_title">Popular Services </h2>
          </Col>
          <ServicesList/>
        </Row>
      </Container>
    </section>

    {/* ============ Car Item Section =========== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>  
          <h6 className="section_subtitle">
            Come with
          </h6>
          <h2 className="section_title">Hot Offers</h2>
          </Col>
          {
            carData.slice(0,6).map(item =>(
              <CarItem item={item} key={item.id} />
            ))
          }
        </Row>
      </Container>
    </section>

    {/* ============= Be come a driver ============= */}
    <BeComeDriverSection />


    {/* =============== Testimonial Sections ========== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-4 text-center'>
          <h6 className='section_subtitle'>Our Clients Says</h6>
          <h2 className='section_title'>Testimonials</h2>
          </Col>
          <Testimonials />
        </Row>
      </Container>
    </section>

    {/* ================= Blog List Section =========== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
          <h6 className='section_subtitle'>Explore Our Blogs</h6>
          <h2 className='section_title'>Latest Blogs</h2>
          </Col>
          <BlogList />
        </Row>
      </Container>
    </section>


    </Helmet>
  )
}

export default Home
