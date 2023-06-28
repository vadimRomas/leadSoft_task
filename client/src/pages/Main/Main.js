import {Carousel} from "react-bootstrap";


export const Main = () => {

    return (
        <div>
            <h3>Below are the best products we have. To view all products, go to the Products section</h3>
            <Carousel style={{height: '50%'}}>
            <Carousel.Item style={{height: '50%'}}>
                <img
                    style={{width: '430px', height: '425px', marginRight: 'auto', marginLeft: 'auto'}}
                    className="d-block"
                    src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    style={{width: '430px', height: '425px', marginRight: 'auto', marginLeft: 'auto'}}
                    className="d-block"
                    src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{width: '430px', height: '425px', marginRight: 'auto', marginLeft: 'auto'}}
                    className="d-block"
                    src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}