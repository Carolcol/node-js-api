const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>')
        res.write('<body><h1>HELLO BABY</h1></body>')
        res.write('<form method="POST" action="/createuser"><input type="text" name="createuser"><button type="submit">SUBMIT</button></form>')
        res.write('</html>')
        return res.end();
    }

    if (url == '/users') {
        res.write('<html>')
        res.write('<body><ul><li>user1</li><li>user2</li></ul></body>')
        res.write('</html>')
        return res.end();
    }

    if(method === 'POST' && url === 'createuser') {
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
        })
    }
}

module.exports = requestHandler;