const http = require('http');



http.createServer( (req, res) => {

    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    // const persona = {
    //     id: 1,
    //     nombre: 'Rasec'
    // };

    // res.write('id, nombre\n');
    // res.write('1, Rasec\n');
    // res.write('2, Maria\n');
    // res.write('3, Carlos\n');

    res.write('Hola Mundo');
    res.end();

}).listen(8080);
