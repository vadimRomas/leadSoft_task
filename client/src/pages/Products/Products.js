import {useEffect, useState} from "react";
import {getProducts} from "../../services/products";
import {Button, Card, Col, Row} from "react-bootstrap";
import {CRUDBasket} from "../../utils/product";

export const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    const addProduct = (product) => {
        new CRUDBasket().setProduct(product)
    }

    return (
        <Row xs={1} md={5} className="g-4" style={{width: '100%', justifyContent: 'center'}}>
            {products.map((value, idx) =>
                <Col style={{width: '24rem', margin: '10px'}} key={idx}>
                    <Card style={{width: '100%', margin: '10px'}}>
                        <Card.Img variant="top" style={{marginLeft: 'auto', marginRight: 'auto', width: '100px', height: '100px'}} src={value.image}/> {/*src="holder.js/100px180"*/}
                        <Card.Body>
                            <Card.Title>{value.title.length > 15 ? value.title.slice(0, 14) + '...' : value.title}</Card.Title>
                            <Card.Text>{value.description.length > 81 ? value.description.slice(0, 80) + '...' : value.description}</Card.Text>
                            <Button variant="success" onClick={e => addProduct(value)}>Add to basket</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
    )
}