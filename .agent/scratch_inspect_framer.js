const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\alami\\.gemini\\antigravity-ide\\brain\\3ed97492-fe75-404c-91e6-37f93c235a6a\\.system_generated\\steps\\127\\content.md', 'utf8');

// Find all script tags or text content
const scripts = content.match(/<script[^>]*>([\s\S]*?)<\/script>/gi) || [];
console.log('Found scripts:', scripts.length);

const framerNames = content.match(/data-framer-name="([^"]+)"/g) || [];
console.log('Framer names:', [...new Set(framerNames)].slice(0, 40));

// Find framer animation properties
const animations = content.match(/transform|translate3d|cubic-bezier|spring|scroll/gi) || [];
console.log('Animation keywords count:', animations.length);
