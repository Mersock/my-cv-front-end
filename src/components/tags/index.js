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
                        <span className="badge badge-pill badge-dark badge-tags">React</span>&nbsp;
                        <span className="badge badge-pill badge-dark badge-tags">Node.js.</span>&nbsp;
                        <span className="badge badge-pill badge-dark badge-tags">Laravel</span>&nbsp;
                        <span className="badge badge-pill badge-dark badge-tags">Golang</span>&nbsp;
                        <span className="badge badge-pill badge-dark badge-tags">Java</span>&nbsp;
                    </CardText>
                </CardBody>
                <style jsx>{`
                    .badge-tags{
                        cursor:pointer;
                    }
                `}
                </style>
            </Card>
        </div>
    )
}

export default Index
