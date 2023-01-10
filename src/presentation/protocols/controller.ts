import { httpResponse, HttpRequest } from './http'

export interface Controller {
  handle: (httpRequest: HttpRequest) => httpResponse
}
