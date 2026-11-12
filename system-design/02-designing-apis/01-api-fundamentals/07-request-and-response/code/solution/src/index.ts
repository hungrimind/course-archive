export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface Request {
  method: HttpMethod
  path: string
}

export interface ApiSuccessResponse<T> {
  status: 'success'
  data: T
}

export interface ApiErrorResponse {
  status: 'error'
  message: string
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse

export function handleRequest(req: Request): ApiResponse<number[]> {
  if (req.method === 'GET' && req.path === '/api/data') {
    return {
      status: 'success',
      data: [1, 2, 3]
    }
  }

  return {
    status: 'error',
    message: 'Not found'
  }
}

const request: Request = { method: 'GET', path: '/api/data' }
const response = handleRequest(request)
console.log(`${request.method} ${request.path}`)
console.log(JSON.stringify(response, null, 2))
