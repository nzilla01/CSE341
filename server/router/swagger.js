const express = require('express');
const router = express.Router();

// const swaggerAuto = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.js');

router.use('/api-docs',swaggerUi.server);
router.get('/api-docs', swaggerUi.setup(swaggerdocument));


module.export=router