import { AnyObject, ClientInterface, ClientResponse } from './interfaces';

export default class FetchClient implements ClientInterface {
  public async get(url: string): Promise<ClientResponse> {
    const response = await fetch(url);
    const data = (await response.json()) as object;
    const headers: { [key: string]: string } = {};

    response.headers.forEach((value, key) => {
      headers[key] = value;
    });

    return {
      data: data,
      status: response.status,
      statusText: response.statusText,
      headers: headers,
    } as ClientResponse;
  }

  public async patch(url: string, body: AnyObject): Promise<ClientResponse> {
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
    const data = (await response.json()) as object;
    const headers: { [key: string]: string } = {};

    response.headers.forEach((value, key) => {
      headers[key] = value;
    });

    return {
      data: data,
      status: response.status,
      statusText: response.statusText,
      headers: headers,
    } as ClientResponse;
  }
}
