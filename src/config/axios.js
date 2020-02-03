import axio  from 'axios';


const clienteAxios = axio.create(
    {
        baseURL : 'http://localhost:4000/'
    }
)


export default clienteAxios;