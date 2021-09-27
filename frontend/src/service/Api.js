import axios from 'axios'

import Userfront from '@userfront/react'

Userfront.init('6nz69vn7')

const accessToken = Userfront.accessToken()

const api = axios.create({
    baseUrl: '/api'
})
export default api

export const deletarItem = (slug) => {
    axios.delete(`api/portfolio/${slug}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(res => {
            console.log('Resultado', res)
            return res;

        })
        .catch(e => {
            console.log('Erro', e)
            return e;
        })
    console.log('deletado no Backend', slug)
}

export const editadoItem = (slug, { title, description, longDescription, image }) => {
    axios.patch(`api/portfolio/${slug}`, {
        title, description, longDescription, image
    }, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(res => {
            console.log('alterado', res)
            return res
        })
        .catch(e => {
            console.log('erro', e)
            return e
        })
}

export const adicionadoItem = ({ title, description, longDescription, image }) => {
    axios.post(`api/portfolio/`, {
        title, description, longDescription, image
    }, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(res => {
            console.log('Adicionado', res)
            return res
        })
        .catch(e => {
            console.log('erro', e)
            return e
        })
}