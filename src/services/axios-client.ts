import axios from 'axios';
import { ClientInterface, ClientResponse } from './interfaces';

export default class AxiosClient implements ClientInterface {
  public async get(url: string): Promise<ClientResponse> {
    const response = await axios.get(url);
    return response as ClientResponse;
  }
}
