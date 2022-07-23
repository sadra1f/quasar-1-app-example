import { createServer } from 'miragejs';

const createMockServer = () => {
  return createServer({
    routes() {
      this.namespace = 'api';

      this.get('/marketing', () => {
        return [
          {
            id: '0',
            title: 'Plugin 1',
            details: 'A short text.',
            status: 'allowed',
          },
          {
            id: '1',
            title: 'Plugin 2',
            details: 'A short text.',
            status: 'blocked',
          },
          {
            id: '2',
            title: 'Plugin 3',
            details: 'A short text.',
            status: 'disabled',
          },
          {
            id: '3',
            title: 'Plugin 4',
            details: 'A short text.',
            status: 'disabled',
          },
          {
            id: '4',
            title: 'Plugin 5',
            details: 'A short text.',
            status: 'allowed',
          },
        ];
      });
    },
  });
};

export { createMockServer };
