const url = require('url');
const querystring = require('querystring')

// url.parse()

const myUrl = url.parse('https://example.com/listing?id=1000&premium=true');
console.log(myUrl);

// url.format()
const myUrl2 = url.format({
    protocol:'https',
    host: 'www.examle.com',
    pathname: 'listing', 
    query: {
        id: 1000,
        premium: true,
    }
})
console.log(myUrl2);

// querystring.parse()
const myQs = 'year=2023&month=january&day=28';
const q = querystring.parse(myQs)
console.log(q);

// querystring.stringify()

const myQs2 = querystring.stringify({
    year:2023,
    month:'january',
    day: 28,
})

console.log(myQs2);