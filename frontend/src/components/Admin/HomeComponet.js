import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container, Card } from 'react-bootstrap'
import { useApi } from '../../Hooks/useApi'
const Home = () => {
    const { data } = useApi('api/portfolio');
    const [qtyItems, setQtyitemns] = useState(0)

    useEffect(() => {
        data && setQtyitemns(data.data.data.lenght)
    }, [data])
    return (
        <Container>
            <Card bg='dark' text='light' classname='mb-2 text-center p-3'>
                <Card.Header>Bem Vindo</Card.Header>
                <Card.Body>
                    <Card.Title>Items no Portfolio</Card.Title>
                    <Card.Text style={{ fontSize: 100 }}>{qtyItems}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
const p = styled.div`

`
export default Home