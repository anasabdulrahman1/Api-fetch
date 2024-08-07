import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Api.css'
function Apifetch() {
    const [product, setProduct] = useState([]);
    const base_url = 'https://dummyjson.com/products';

    const fetchData = async () => {
        const result = await fetch(base_url)
            .then(result => result.json())
            .then(products => setProduct(products.products));
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(product);
    return (
      <div className="card-container">
      {product.map(item => (
          <Card style={{ width: '18rem' }} key={item.id} className="m-3 stylish-card">
              <Card.Img className="img" variant="top" src={item.thumbnail} />
              <Card.Body>
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  <Card.Text className="card-text">
                      {item.description}
                  </Card.Text>
                  <Button variant="primary" className="buy-button">Buy Now</Button>
              </Card.Body>
          </Card>
      ))}
  </div>
    );
}

export default Apifetch;
