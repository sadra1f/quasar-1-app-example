import axios from 'axios';
import { AnyObject, ClientInterface, ClientResponse } from './interfaces';

export default class AxiosClient implements ClientInterface {
  public async get(url: string): Promise<ClientResponse> {
    const response = await axios.get(url);
    return {
      data: response.data as object,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers as object,
    } as ClientResponse;
  }

  public async patch(url: string, body: AnyObject): Promise<ClientResponse> {
    const response = await axios.patch(url, body);
    return {
      data: response.data as object,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers as object,
    } as ClientResponse;
  }
}
