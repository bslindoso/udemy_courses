"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const server = restify.createServer({
    name: 'meat-api',
    version: '1.0.0'
});
// configurar para funcionar a query
server.use(restify.plugins.queryParser());
server.get('/info', [
    (req, resp, next) => {
        if (req.userAgent() && req.userAgent().includes('MSIE 7.0')) {
            // resp.status(400)
            // resp.json({
            //     message: 'Por favor, atualize o seu navegador'
            // })
            let error = new Error();
            error.statusCode = 400;
            error.message = 'Por favor, atualize o seu navegador';
            return next(error);
        }
        return next();
    }, (req, resp, next) => {
        // resp.contentType = 'application/json'
        // resp.status(400)
        // resp.setHeader('Content-Type', 'application/json')
        // resp.send({message: 'hello with send'})
        resp.json({
            browser: req.userAgent(),
            method: req.method,
            url: req.href(), // ou o req.url
            path: req.path(),
            query: req.query
        });
        return next();
    }
]);
server.listen(3000, () => {
    console.log('API is running on http://localhost:3000');
});
