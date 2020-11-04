import utils from "./utils";

const fastify = require('fastify')({ 'logger': false });

// Register fastify router
utils.route(fastify);

const start = async () => {
  try {
    await fastify.listen(3000);
  }
  catch (error) {
    process.exit(1);
  }
};

start().then(() => console.log('Server is running on http://localhost:3000/'));
