import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const BookCard = ({ item }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.coverLargeUrl} height="286px" width="359px"/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          출판사: {item.publisher}
          <br />
          가격: {item.priceStandard}원
        </Card.Text>
        <Button variant="primary" href={item.link} target="_blank">구매하기</Button>
      </Card.Body>
    </Card>
  );


};

export default BookCard;