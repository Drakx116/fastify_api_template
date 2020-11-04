import routes from '../routes'

export default (fastify) => {
  fastify.register(routes.alive, { 'prefix': '/alive' });
};
