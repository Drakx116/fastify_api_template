import routes from './routes/alive';

const fastify = require('fastify')({ 'logger': false });

// Register fastify router
fastify.register(routes.alive, { 'prefix': '/alive' });

const start = async () => {
  try {
    await fastify.listen(3000);
  }
  catch (error) {
    process.exit(1);
  }
};

start().then(() => console.log('Server is running on http://localhost:3000/'));
