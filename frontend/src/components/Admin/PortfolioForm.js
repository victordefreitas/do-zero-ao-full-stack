import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Form, Container } from 'react-bootstrap'

const PortfolioForm = ({ title, setTitle, description, setDescription, longDescription, setLongDescription, image, setImage, slug, setSlug }) => {
    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Label>Descrição Longa</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        value={longDescription}
                        onChange={(e) => setLongDescription(e.target.value)}
                    />
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Group>
            </Form>
        </Container >
    )
}

export default PortfolioForm