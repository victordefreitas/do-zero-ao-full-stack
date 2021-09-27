import React, { useState } from 'react'

import { Table, Button, Image, Modal } from 'react-bootstrap'
import styled from 'styled-components'
import { useApi } from '../../Hooks/useApi'
//  import moment from 'moment'
import Dialog from '../Dialog'
import PortfolioForm from './PortfolioForm'
import { deletarItem, editadoItem, adicionadoItem } from '../../service/Api'

const PortfolioAdmin = () => {
    const handerDel = (slug) => {
        deletarItem(slug)
        console.log('Delatado', slug)
    }
    const handerDit = (slug, data) => {
        editPortfolioItem(slug, data)
        console.log('Editado', slug)
    }
    const handerAdd = (slug, data) => {
        addPortfolioItem(data)
        console.log('Adicionado')
    }
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [longDescription, setLongDescription] = useState()
    const [image, setImage] = useState()
    const [slug, setSlug] = useState()
    const [action] = useState({
        del: {
            header: 'DESEJA DELETAR?',
            bntVariant: 'danger',
            bntLabel: 'CONFIRMAR?',
            showbody: true,
            body: 'VOCÊ DESEJAR EXCLUIR ESSE PORTFOLIO?',
            callback: handerDel
        },
        Edit: {
            header: 'Editar Portfolio',
            bntVariant: 'primary',
            bntLabel: 'Salvar',
            showbody: false,
            callback: handerDit
        },
        add: {
            header: 'Adicionar um novo Portfolio',
            bntVariant: 'primary',
            bntLabel: 'Novo',
            showbody: false,
            callback: handerAdd
        }

    })
    const [currentAction, setCurrentAction] = useState({
        header: '',
        btnVariant: '',
        bntLabel: '',
        body: ''
    })
    const [show, setShow] = useState(false)

    const headerShow = (portfolio, actn) => {
        setCurrentAction(actn)
        setShow(true)
        setTitle(portfolio?.title || '')
        setDescription(portfolio?.description || '')
        setLongDescription(portfolio?.longDescription || '')
        setImage(portfolio?.image || '')
        setSlug(portfolio?.slug || '')
        console.log('currentaction', actn)
    }
    const addPortfolioItem = (data) => {
        const newPortfolioItem = {
            title: data.title,
            description: data.description,
            longDescription: data.longDescription,
            image: data.image
        }
        adicionadoItem(newPortfolioItem)
    }

    const editPortfolioItem = (slug, data) => {
        const newPortfolioItem = {
            title: data.title,
            description: data.description,
            longDescription: data.longDescription,
            image: data.image
        }
        editadoItem(slug, newPortfolioItem)
    }
    const { data } = useApi('/Api/portfolio')

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Titulo</th>
                        <th>Data</th>
                        <th>Açao</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.data?.data?.map(item => {
                            return (
                                <tr key={item.slug}>
                                    <th>
                                        <Logo src={item.image} thumbnail />
                                    </th>
                                    <td>{item.title}</td>
                                    <td>{item.createDat}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => headerShow(item, action.del)}>Excluir</Button>
                                        <Button variant="info" onClick={() => headerShow(item, action.Edit)}>Editar</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <Button variant="success" size='lg' onClick={() => headerShow(null, action.add)}>ADICIONAR UM NOVO</Button>
                </tbody>
            </Table>
            <Dialog show={show} setShow={setShow} currentAction={currentAction} slug={slug}>
                {currentAction.showbody && currentAction.body}
                {!currentAction.showbody &&
                    (<PortfolioForm
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        longDescription={longDescription}
                        setLongDescription={setLongDescription}
                        image={image}
                        setImage={setImage}
                        slug={slug}
                        setSlug={setSlug}
                    />
                    )}
            </Dialog>
        </div>

    )
}
const Logo = styled(Image)`
 height: 90px;
`

export default PortfolioAdmin

