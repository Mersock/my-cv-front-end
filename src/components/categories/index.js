import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody
} from 'reactstrap'

const Index = () => {
    return (
        <Card>
            <CardImg
                top width="100%"
                src="/static/noimage-600x400.jpg"
                alt="Card image"
            />
            <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
        </Card>
    )
}

export default Index
