import { useState, useEffect } from 'react';
import { Button, Col, Label, Row, Card, CardGroup, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import axios from 'axios'

const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:2000/products');
        setProducts(response.data);
    }
    return (
        <div className='container mt-5'>
            <CardGroup>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://i.etsystatic.com/22166676/r/il/071dd6/2759724136/il_570xN.2759724136_o2jv.jpg"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Primordial Jade Winged Spear
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Weapon Spear
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text
                        </CardText>
                        <Button className='button is-primary mt-2'>
                            Button
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://www.touchtapplay.com/wp-content/uploads/2022/02/Genshin-Impact-2.5-Kagura-Verity.jpg"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Kagura Verity
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Weapon Catalyst
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text
                        </CardText>
                        <Button className='button is-primary mt-2'>
                            Button
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://i.ytimg.com/vi/9h2TpNpQS40/maxresdefault.jpg"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Aquila Favonia
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Weapon Sword
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text
                        </CardText>
                        <Button className='button is-primary mt-2'>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>
            <br></br>
            <CardGroup>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://clutchpoints.com/wp-content/uploads/2021/10/Should-you-pull-for-Polar-Star-in-Genshin-Impact-Is-Polar-Star-strong-.jpg"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Polar Star
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Weapon Bow
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text
                        </CardText>
                        <Button className='button is-primary mt-2'>
                            Button
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://img.game8.co/3289956/74f159ff21ce2dcdefa366416a8f5e93.png/show"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text
                        </CardText>
                        <Button className='button is-primary mt-2'>
                            Button
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/Genshin-Impact-Intertwined-Fates-and-Acquaint-Fates.png.jpg"
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text
                        </CardText>
                        <Button className='button is-primary mt-2'>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Catalog