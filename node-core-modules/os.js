const os = require('os');

// arch()
console.log(os.arch());

// platform() if it macbook show me darwin if windows show win32 if linux show linux
console.log(os.platform());

if (os.platform() === 'darwin') {
    console.log('You are on a mac');
}else if (os.platform() === 'win32'){
    console.log('You are on  windows');
}else{
    console.log('You are on  linux');
}

// cpus() show me model model: 'Intel(R) Core(TM) i5-8300H CPU @ 2.30GHz', itp
console.log(os.cpus());

// freemem() Этот метод возвращает количество свободной оперативной памяти в байтах на компьютере

console.log(os.freemem());
console.log(`Free memory: ${os.freemem() / 1024 / 1024/ 1024} GB`);

// totalmem() Этот метод возвращает общее количество оперативной памяти в байтах на компьютере
console.log(os.totalmem());
console.log(`Total memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir()
console.log(os.homedir());

// uptime()
console.log(os.uptime());
const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const minutes = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;

console.log(`Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

// hostname()
console.log(os.hostname());