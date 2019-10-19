import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardText
} from 'reactstrap'
const Index = () => {
    return (
        <div>
            <Card className="border-dark mb-3">
                <CardHeader>Tags</CardHeader>
                <CardBody>
                    <CardText>
                        <span className="badge badge-pill badge-dark">JavaScript</span>&nbsp;
                        <span className="badge badge-pill badge-dark">Node.js.</span>&nbsp;
                        <span className="badge badge-pill badge-dark">Laravel</span>&nbsp;
                        <span className="badge badge-pill badge-dark">Golang</span>&nbsp;
                        <span className="badge badge-pill badge-dark">Java</span>&nbsp;
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Index
