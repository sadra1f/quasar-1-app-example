import axios from 'axios';
import { ClientInterface, ClientResponse } from './interfaces';

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
}
