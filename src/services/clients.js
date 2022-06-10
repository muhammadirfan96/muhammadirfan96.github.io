import axios from "axios"

export const getClients = async (setClients) => {
    try {      
        const res = await axios.get('http://localhost:3003/clients')
        setClients(res.data)
        console.log('get data run')
    } catch (error) {
        console.error(error)
    }
}

export const addClient = async (inputs) => {
    try {
        await axios.post('http://localhost:3003/clients', inputs)
        console.log('added data successfully')
    } catch (error) {
       console.error(error)
    }
}