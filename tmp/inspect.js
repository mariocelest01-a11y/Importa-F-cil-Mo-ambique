const fs = require('fs');

const js = fs.readFileSync('/tmp/routes.js', 'utf8');

// Find asset matches
const assets = js.match(/\/assets\/[a-zA-Z0-9_\-\.]+/g) || [];
console.log('Assets:', Array.from(new Set(assets)));

// Find URLs
const urls = js.match(/https?:\/\/[^\s"'`<>]+/g) || [];
console.log('URLs:', Array.from(new Set(urls)));

// Find strings in the file to see full FAQ answers and sections
fs.writeFileSync('/tmp/routes_pretty.txt', js.replace(/;/g, ';\n').replace(/\{/g, '{\n').replace(/\}/g, '\n}'));

// Find accordion / FAQ items in routes
const matches = js.match(/"O curso ensina[\s\S]*?(?=",\s*")/g) || [];
console.log('FAQ matches:', matches);
