import React, { useEffect } from 'react'
import carData from '../assets/data/carData'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import { useParams } from 'react-router-dom'
import BookingForm from '../components/UI/BookingForm'
import PaymentMethod from '../components/UI/PaymentMethod'


const CarDetails = () => {

  // ==============  Useparams  <=> waxaa loo isticmaalaa inuu iskuggu keena xira link yadii iyo xogtii aan haysanay inuu noo soo qaado
  const {slug} = useParams() 
  const singleCarItem = carData.find(item=> item.carName === slug)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return <Helmet title={singleCarItem.carName}>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
              <img src={singleCarItem.imgUrl} className="w-100" />
          </Col>
          <Col lg='6'>
          <div className="car_info">
            <h2 className="section_title">{singleCarItem.carName}</h2>
              <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                <h6 className="rent_price fw-bold fs-4 ">
                  ${singleCarItem.price}.00 / Day
                </h6>

                <span className='d-flex align-items-center gap-5'>
                  <span style={{color:'#f9a826', cursor:'pointer'}}>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-line"></i>
                  </span>
                  ( {singleCarItem.rating} Ratings)
                </span>
              </div>
              <p className="section_description">
                {singleCarItem.description}
              </p>

              <div className='d-flex align-items-center mt-3' style={{columnGap: '4rem'}}>
                <span className='d-flex align-items-center gap-1 section_description'>
                <i class="ri-roadster-line" style={{color:'#f9a826'}}></i> {singleCarItem.model}
                </span>

                <span className='d-flex align-items-center gap-1 section_description'>
                    <i class="ri-settings-2-line" style={{color:'#f9a826'}}></i> {singleCarItem.automatic}
                </span>

                <span className='d-flex align-items-center gap-1 section_description'>
                    <i class="ri-timer-flash-line" style={{color:'#f9a826'}}></i> {singleCarItem.speed}
                </span>

              </div>

              <div className='d-flex align-items-center mt-3' style={{columnGap: '2.8rem'}}>
                <span className='d-flex align-items-center gap-1 section_description'>
                <i class="ri-map-pin-line" style={{color:'#f9a826'}}></i> {singleCarItem.gps}
                </span>

                <span className='d-flex align-items-center gap-1 section_description'>
                    <i class="ri-wheelchair-line" style={{color:'#f9a826'}}></i> {singleCarItem.seatType}
                </span>

                <span className='d-flex align-items-center gap-1 section_description'>
                <i class="ri-building-2-line" style={{color:'#f9a826'}}></i> {singleCarItem.brand}
                </span>

              </div>
          </div>
             
          </Col>

          <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>

        </Row>
      </Container>
    </section>
  </Helmet>
}

export default CarDetails
