import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import firstImg from '../../../assets/1.png'
import secondImg from '../../../assets/2.png'
import thirdImg from '../../../assets/3.png'

const EditorsInsights = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 m-3">
      
        <Col>
        <Card>
          <Card.Img variant="top" src={firstImg} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
        <Col>
        <Card>
          <Card.Img variant="top" src={secondImg} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
        <Col>
        <Card>
          <Card.Img variant="top" src={thirdImg} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
  </Row>
  )
}

export default EditorsInsights