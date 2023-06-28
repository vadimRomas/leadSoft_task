import {Button, Card, Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {CRUDBasket} from "../../utils/product";

export const Basket = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const storageProduct = new CRUDBasket().getProducts()
        setProducts(storageProduct ? storageProduct : [])
    }, [])

    const removeProduct = (product) => {
        const removedProduct = products.filter(value => value.id !== product.id)
        setProducts(removedProduct)
        new CRUDBasket().deleteProduct(product)
    }

    return (

        <Row xs={1} md={5} className="g-4" style={{width: '100%', justifyContent: 'center'}}>
            {products.map((value, idx) =>
                <Col style={{width: '24rem', margin: '10px'}} key={idx}>
                    <Card style={{width: '100%', margin: '10px'}}>
                        <Card.Img variant="top"
                                  style={{marginLeft: 'auto', marginRight: 'auto', width: '100px', height: '100px'}}
                                  src={value.image}/> {/*src="holder.js/100px180"*/}
                        <Card.Body>
                            <Card.Title>{value.title.length > 15 ? value.title.slice(0, 14) + '...' : value.title}</Card.Title>
                            <Card.Text>{value.description.length > 81 ? value.description.slice(0, 80) + '...' : value.description}</Card.Text>
                            <Button variant="danger" onClick={e => removeProduct(value)}>Remove from basket</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
    )
}
