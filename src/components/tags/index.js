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
                        <span class="badge badge-pill badge-dark">JavaScript</span>
                        <span class="badge badge-pill badge-dark">Node.js.</span>
                        <span class="badge badge-pill badge-dark">Laravel</span>
                        <span class="badge badge-pill badge-dark">Golang</span>
                        <span class="badge badge-pill badge-dark">Java</span>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Index
