import axios, { type AxiosResponse } from 'axios'
import { get } from 'lodash'
import envVar from '@/config/envVar'

type ResponseStructure = [data: any, error: null] | [data: null, error: Error]

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<ResponseStructure> {}
}

//= > api-auth
export const api = axios.create({
  baseURL: envVar.BackendHost,
})

api.interceptors.request.use(async (config) => {
  config.headers.Authorization = envVar.BotToken
  return config
})

const formatResponse = (response: AxiosResponse) => {
  const data = response.data

  return {
    status: get(data, 'status') || response.status,
    code: get(data, 'code'),
    message: get(data, 'message'),
    data: get(data, 'data') || data,
  }
}

//= > handler
const handleSuccessRes = (response: any): any => {
  return [formatResponse(response), null]
}

const handleErrorRes = (error: any) => {
  return [null, formatResponse(error.response), error.response]
}

//= > use
api.interceptors.response.use(handleSuccessRes, handleErrorRes)
