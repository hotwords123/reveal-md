
const Path = require('path');

const scripts = [
    'extra-md'
];
const preprocessors = scripts.map(name => require(Path.join(__dirname, name)));

module.exports = async (markdown, options) => {
    for (let fn of preprocessors) {
        markdown = await fn(markdown, options);
    }
    return markdown;
};
