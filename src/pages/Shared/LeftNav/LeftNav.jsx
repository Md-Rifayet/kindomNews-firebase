import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import firstImg from '../../../assets/1.png'
import secondImg from '../../../assets/2.png'
import thirdImg from '../../../assets/3.png'


const LeftNav = () => {
  const [categories, setCategories] = useState([])

  useEffect(() =>{
      fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error))
  },[])
  return (
    <div>
        <h2>All Categoty</h2>
     <div className='ps-4'>
     {
        categories.map(category =><p key={category.id}>
          <Link to={`/category/${category.id}`} className='text-decoration-none text-black m-'>{category.name}</Link>
        </p>)
    }
     </div>

     <Row xs={1} md={1} lg={1} className="g-4 m-3">
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

    </div>
  )
}

export default LeftNav