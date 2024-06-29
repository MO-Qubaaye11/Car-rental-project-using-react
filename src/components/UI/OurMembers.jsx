import React from 'react'
import '../../Styles/our-members.css'
import { Col } from 'reactstrap'

import ava01 from '../../assets/all-images/ava-1.jpg'
import ava02 from '../../assets/all-images/ava-2.jpg'
import ava03 from '../../assets/all-images/ava-3.jpg'
import ava04 from '../../assets/all-images/ava-4.jpg'
import { Link } from 'react-router-dom'

const OUR_MEMBERS = [
    {
        name: 'Mascud Hassan',
        experience: '5 Year of experience',
        phUrl: '#',
        fbUrl: '#',
        insUrl: '#',
        wsUrl: '#',
        twitUrl: '#',
        linkedinUrl: "#",
        imgUrl: ava01,
    },
    {
        name: 'Maryan Jama',
        experience: '15 Year of experience',
        phUrl: '#',
        fbUrl: '#',
        insUrl: '#',
        wsUrl: '#',
        twitUrl: '#',
        linkedinUrl: "#",
        imgUrl: ava02,
    },
    {
        name: 'Jamila Zaki',
        experience: '25 Year of experience',
        phUrl: '#',
        fbUrl: '#',
        insUrl: '#',
        wsUrl: '#',
        twitUrl: '#',
        linkedinUrl: "#",
        imgUrl: ava04,
    },
    {
        name: 'Ahmed Rashid',
        experience: '2 Year of experience',
        phUrl: '+252618552904',
        fbUrl: '#',
        insUrl: '#',
        wsUrl: '#',
        twitUrl: '#',
        linkedinUrl: "#",
        imgUrl: ava03,
    },
];

const OurMembers = () => {
  return <>
  {
    OUR_MEMBERS.map((item, index)=>(
        <Col lg='3' md='3' sm='4' xs='6' key={index} className='mb-4'>
            <div className="single_member">
                <div className="single_member-img">
                    <img src={item.imgUrl} alt="" className='w-100' />

                    <div className="single_member-social">
                        <Link to={`tel:${item.phUrl}`}>
                           <a><i class="ri-phone-line"></i></a> 
                        </Link>
                        
                        <Link to={item.fbUrl} >
                           <a href={item.fbUrl}><i class="ri-facebook-line"></i></a> 
                        </Link>

                        <Link to={item.twitUrl}>
                            <a href={item.twitUrl}><i class="ri-twitter-line"></i></a> 
                        </Link>

                        <Link to={item.linkedinUrl}>
                           <a href={item.linkedinUrl}><i class="ri-linkedin-line"></i></a> 
                        </Link>

                        <Link to={item.wsUrl}>
                            <a href={item.wsUrl}><i class="ri-whatsapp-line"></i></a> 
                        </Link>
                        
                        <Link to={item.insUrl}>
                           <a href={item.insUrl}><i class="ri-instagram-line"></i></a> 
                        </Link>

                    </div>
                </div>
                <h6 className='text-center mb-0 mt-3'>{item.name}</h6>
                <p className="section_description text-center">{item.experience}</p>

            </div>
        </Col>
    ))
  }
  </>
}

export default OurMembers