import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'

import styled from 'styled-components'
import PortfolioAdmin from '../components/Admin/PortfolioAdmin'
import HomeComponet from '../components/Admin/HomeComponet'

import { Redirect } from 'react-router-dom'
import Userfront from '@userfront/react'

import jwt_decode from 'jwt-decode'

Userfront.init('6nz69vn7')



const Admin = ({ location }) => {
    const projectId = '6nz69vn7'

    if (!Userfront.accessToken()) {
        return (
            <Redirect to={{
                pathname: '/login',
                state: { from: location },
            }}
            />
        )
    }
    const accessData = jwt_decode(Userfront.accessToken())
    const userData = jwt_decode(Userfront.idToken())


    const Adminroles = accessData.authorization[projectId].roles
    const isAdmin = Adminroles.includes('admin')

    if (!isAdmin) {
        return (
            <Redirect to={{
                pathname: '/portfolio'
            }}
            />
        )
    }

    console.log("Access", accessData)
    console.log("user", userData)


    const access = JSON.stringify(accessData)
    const user = JSON.stringify(userData)




    return (

        <Jumbotron>
            <Container>
                <Panel>
                    <h1>Ola Admin</h1>
                    <p>Pagina Admin</p>
                    <p>Administraçao</p>
                </Panel>
                <Tabs transition={false} defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <HomeComponet />
                    </Tab>
                    <Tab eventKey="portfolio" title="Portfolio">
                        <PortfolioAdmin />
                    </Tab>
                    <Tab eventKey="user" title="User">
                        <p>User</p>
                        <p>{access}</p>
                        <p>{user}</p>
                    </Tab>
                </Tabs>
            </Container>
        </Jumbotron>

    )
}

const Panel = styled.div`
    background-color: whitesmoke;
    border-radius: 1rem;
`

export default Admin