import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardText
} from 'reactstrap'

const Index = () => {
    return (
        <Card className="border-primary mb-3">
            <CardHeader>Categoris</CardHeader>
            <CardBody>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odiosadfsadfasdfsadfdsaf</li>
                    <li className="list-group-item">Dapibus ac facilisis in asdfdsafsadf</li>
                    <li className="list-group-item">Vestibulum at eros asdfsadfasdfasdf</li>
                    <li className="list-group-item">Vestibulum at eros asdfsadfasdfasdf</li>
                    <li className="list-group-item">Vestibulum at eros asdfsadfasdfasdf</li>
                    <li className="list-group-item">Vestibulum at eros asdfsadfasdfasdf</li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default Index
