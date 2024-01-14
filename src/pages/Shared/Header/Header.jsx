import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee"


const Header = () => {

  return (
    <div className='mb-4'>
        <Container>
        <div className="text-center">
            <img src={logo} alt="" />
            <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>

        <div className='d-flex bg-light p-3'>
            <Button variant="danger">Latest</Button>
            <Marquee className='text-danger' speed={40} pauseOnClick={true}>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>

 
        </Container>
    </div>
  )
}

export default Header