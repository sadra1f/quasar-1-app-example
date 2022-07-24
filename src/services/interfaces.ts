export interface ClientInterface {
  get(url: string): Promise<ClientResponse>;
}

export interface ClientResponse extends Object {
  data?: object;
}
