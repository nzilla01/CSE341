const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info:{
        title: 'My API',
        description : 'Contact API(CSE341)',
    },
    host:'localhost:5000',
    schemes: ['http'],
};

const outputFile ='./swagger.json';
const endpointFiles =['./server/router/index.js'];

swaggerAutogen(outputFile, endpointFiles, doc)

//generate swaggerAutogen.json
// swaggerAutogen(outputFile, endpointFiles, doc).then(async ()=> {
//     await import('./index.js')
// }); 