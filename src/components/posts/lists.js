import React from 'react'
import Link from 'next/link'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap'

const Lists = (props) => {
    const { posts } = props
    return (
        posts.map(post => (
            <Card className="border-dark mb-3" key={post.id}>
                <CardImg
                    className="img-thumbnail"
                    top width="300px" height="300px"
                    src="/static/noimage-600x400.jpg"
                    alt="Card image"
                />
                <CardBody>
                    <CardTitle><h2><b>{post.title}</b></h2></CardTitle>
                    <CardText>{post.body}</CardText>
                    <Button color="secondary"><Link href={post.slug}><a>READ MORE »</a></Link></Button>
                </CardBody>
                <style jsx>{`
                a {
                    color: #fff;
                }
              `}</style>
            </Card>
        ))
    )
}

export default Lists
