import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom'
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
  const news = useLoaderData();
  const {title, details, _id, image_url, category_id} = news;

  return (
    <div>
      
      <Card className='mt-3'>
    <Card.Img variant="top" src={image_url} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
          {details}
      </Card.Text>
      <Link to={`/category/${category_id}`}>
        <Button variant="danger"><FaArrowLeft></FaArrowLeft> All News in this Category</Button>
        </Link>
    </Card.Body>
  </Card>

  <EditorsInsights></EditorsInsights>
    </div>
  )
}

export default News