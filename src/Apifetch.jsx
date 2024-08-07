import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Api.css'
// function Apifetch() {
//     const [product, setProduct] = useState([]);
//     const base_url = 'https://dummyjson.com/products';

//     const fetchData = async () => {
//         const result = await fetch(base_url)
//             .then(result => result.json())
//             .then(products => setProduct(products.products));
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

//     console.log(product);
//     return (
      // <div className="card-container">
  //     {product.map(item => (
          // <Card style={{ width: '18rem' }} key={item.id} className="m-3 stylish-card">
          //     <Card.Img className="img" variant="top" src={item.thumbnail} />
          //     <Card.Body>
          //         <Card.Title className="card-title">{item.title}</Card.Title>
          //         <Card.Text className="card-text">
          //             {item.description}
          //         </Card.Text>
          //         <Button variant="primary" className="buy-button">Buy Now</Button>
          //     </Card.Body>
          // </Card>
  //     ))}
  // </div>
//     );
// }

// export default Apifetch;



function Apifetch() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        console.log(result); // Log the result to check its structure
        setProducts(result.products); // Assuming 'products' is an array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return ( 
      <div className="card-container">
        {products.map((product) => (
            <Card style={{ width: '18rem' }} key={product.id} className="m-3 stylish-card">
            <Card.Img className="img" variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Title className="card-title">{product.title}</Card.Title>
                <Card.Text className="card-text">
                    {product.description}
                </Card.Text>
                <Button variant="primary" className="buy-button">Buy Now</Button>
            </Card.Body>
        </Card>
        ))}
        </div>
  );
}

export default Apifetch;
