const fastify = require('fastify')({ 'logger': false });

// First route
fastify.get('/', async (req, res) => {
  return {
    'message': 'API is alive.'
  };
});

const start = async () => {
  try {
    await fastify.listen(3000);
  }
  catch (error) {
    process.exit(1);
  }
};

start().then(() => console.log('Server is running on http://localhost:3000/'));
