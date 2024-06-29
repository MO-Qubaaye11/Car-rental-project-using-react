import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row, ListGroup, ListGroupItem } from 'reactstrap'
import '../../Styles/footer.css'


const quickLinks = [
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '#',
    display: 'Privacy Policy'
  },
  {
    path: '/cars',
    display: 'Car Listing'
  },
  {
    path: '/blogs',
    display: 'Blogs'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
]

const Footer = () => {

  const date = new Date()
  const yeaar = date.getFullYear()

  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12' >
        <div className="logo footer_logo">
            <h1 ><Link to='/home' className='d-flex align-items-center gap-3'>
            <i class="ri-car-line"></i>
            <span>Rent Car <br />Service</span>
            </Link>
            </h1>
          </div>
          <p className='footer_logo_content'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo cumque sunt
             odit repellat neque maxime assumenda fugiat natus qui obcaecati et harum, 
             facilis numquam. Asperiores hic aspernatur illum? Voluptas, tempore.
          </p>

        </Col>
        <Col lg='2' md='4' sm='6'>
          <div className='mb-4'>
            <h5 className="footer_link-title">Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item, index)=>(
                  <ListGroupItem key={index} className='p-0 mt-3 quick_link'>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>
        <Col lg='3' md='4' sm='6'>
          <div className="mb-4">
              <h5 className="footer_link-title mb-4">Head Office</h5>
              <p className='office_info'>Banaadir Street, Hodan, Mogadishu</p>
              <p className='office_info'>Phone: +252618552904</p>
              <p className='office_info'>Email: GroupB@gmail.com</p>
              <p className='office_info'>Office Time: 04:00.AM - 7:00.PM</p>
          </div>
        </Col>
        <Col lg='3' md='4' sm='12' >
          <div className="mb-4">
              <h5 className="footer_link-title">News Letters</h5>
              <p className="section_description">Subscribe our newsletters</p>
              <div className="newsletter">
                <input type="email" placeholder='Email' />
                <span><i class="ri-send-plane-line"></i></span>
              </div>
          </div>
        </Col>
        <Col lg='12'>
          <div className="footer_bttom">
            <p className="section_description d-flex align-items-center justify-content-center gap-1 pt-4">
            <i class="ri-copyright-line"></i> 
            Copyright {yeaar}, Developed by Eng Kulmiye, All rights reserved.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
