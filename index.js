server = require('./api/server');

const port = 4000

server.listen(port, () => console.log(`**Your server is now listening on port ${port}**`))