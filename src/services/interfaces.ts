export interface AnyObject {
  // eslint-disable-next-line
  [key: string]: any;
}

export interface ClientInterface {
  get(url: string): Promise<ClientResponse>;
  patch(url: string, body: AnyObject): Promise<ClientResponse>;
}

export interface ClientResponse extends Object {
  data: object;
  status: number;
  statusText: string;
  headers: object;
}
