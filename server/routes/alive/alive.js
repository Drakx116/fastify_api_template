export default (fastify, options, next) => {
  fastify.get('/', async (req, res) => {
    return {
      'message': 'API is alive.'
    };
  });
  next();
};
