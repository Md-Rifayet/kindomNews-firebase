import React from 'react'
import Header from '../pages/Shared/Header/Header'
import Footer from '../pages/Shared/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import LeftNav from '../pages/Shared/LeftNav/LeftNav'
import RightNav from '../pages/Shared/RightNav/RightNav'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar'

const NewsLayout = () => {
  return (
    <div>
          <Header></Header>
        <Container>
            <Row>
              <NavigationBar></NavigationBar>
                <Col lg={9} sm>
                    <Outlet></Outlet>
                </Col>
                <Col lg={3} sm>
                    <RightNav></RightNav>
                </Col>
            </Row>
    </Container>
        <Footer></Footer>
    </div>
  )
}

export default NewsLayout