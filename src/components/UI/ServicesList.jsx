import React from 'react'
import '../../Styles/services-list.css'
import servicesData from '../../assets/data/serviceData'
import { Col } from 'reactstrap'
const ServicesList = () => {
  return (
    <>
    {
        servicesData.map(item =>(
            <ServicesItem item={item} key={item.id}/>
        ))
    }
    </>
  )
}

const ServicesItem = ({item}) => (
    <Col lg='4' md='4' sm='6' className='mb-3'>
    <div className="service_item">
        <span className='mb-3 d-inline-block'>
            <i class={item.icon} />
        </span>
        <h6>{item.title}</h6>
        <p className="section_description">
            {item.desc}
        </p>
    </div>
    </Col>
)
export default ServicesList