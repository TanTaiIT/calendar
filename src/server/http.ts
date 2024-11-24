import axios from 'axios'
//

const DEFAULT_HEADER = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
  'Cache-Control': 'no-cache',
  'Pragma': 'no-cache',
  'Expires': '0',
}

const createHttp = ({type = ''}) => {
  const http = axios.create({
    headers: DEFAULT_HEADER,
    timeout: 10000,
    baseURL: `${import.meta.env.BASE_URL}/api/${type}/v1`
  })

  return http
}

export const createCmdHttp = () => {
  return createHttp({type: 'cmd'})
}

export const createReadHttp = () => {
  return createHttp({type: 'read'})
}

export const createAggrHttp = () => {
  return createHttp({type: 'aggr'})
}
