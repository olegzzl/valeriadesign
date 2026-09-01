const fs = require('fs');
const html = fs.readFileSync('code.html', 'utf8');
console.log(html.substring(24000, 24600));
