import useSWR from 'swr'

import api from '../service/Api'

export const useApi = (url) => {
    const { data, error } = useSWR(url, async (url) => {
        const response = await api.get(url);
        return response
    })


    return { data, error }
}