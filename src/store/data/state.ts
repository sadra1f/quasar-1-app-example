export interface ServiceInterface {
  id: string;
  title: string;
  slug: string;
}

export interface PluginInterface {
  id: string;
  title: string;
  details: string;
  status: string;
  service_id: string;
}

export interface DataStateInterface {
  prop: boolean;
  services: ServiceInterface[];
  plugins: PluginInterface[];
}

function state(): DataStateInterface {
  return {
    prop: false,
    services: [],
    plugins: [],
  };
}

export default state;
