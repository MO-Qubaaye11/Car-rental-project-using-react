import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import carData from '../assets/data/carData'
import CarItem from '../components/UI/CarItem'

import '../Styles/car-listing.css'
const CarListing = () => {
  return <Helmet title='Cars'>
    <CommonSection title='Car Listings' />

    <section>
      <Container>
        <Row>
          <Col lg='12'>
              <div className='d-flex align-items-center gap-3 mb-5'>
                <span className='d-flex align-items-center gap-2'>
                  <i class="ri-sort-asc"></i> Sort By 
                </span>

                <select className='select_group'>      { /*---------- select>option*7 => Creating select attribute have 7 options ---*/}
                  <option >Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High To Low</option>
                </select>

              </div>
          </Col>

          {

            carData.map(item=> <CarItem item={item} key={item.id} />)

          }

        </Row>
      </Container>
    </section>

  </Helmet>
}

export default CarListing
