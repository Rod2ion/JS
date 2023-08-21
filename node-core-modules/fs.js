// const fs = require('fs');
const { error } = require('console');
const fs = require('fs/promises');

// write to a file


// Callback version use const fs = require('fs');

// fs.writeFile('file1.txt', 'Hello world', (err) => {
//     if (err) throw err;
//         console.log('file create');
    
// })

// promis version use // const fs = require('fs/promises');
// fs.writeFile('file2.txt', 'hello word 2')
// .then(() => console.log('File created'))
// .catch((err) => console.log(err));

// sync version use const fs = require('fs');

// fs.writeFileSync('file3.txt', 'hello word 3');
// console.log('file created');

// Async/Await use const fs = require('fs/promises');  czyta to co jest w file 1 2 3 4 i pisze to w console

async function createFile(filename, content){
    try{
        await fs.writeFile(filename, content);
        console.log('file create');
    } catch (error){
        console.log(error);
    }
}

// read from a file // 

async function readFile(filename){
    try {
        const data = await fs.readFile(filename, 'utf8');
        console.log(data);
    }catch(error){
    console.log(error);
    }
}

// createFile('file4.txt', 'hello word 4')

// Delite a File

async function deliteFile(filename){
    try{
        await fs.unlink(filename);
        console.log(`File ${filename} deleted`);
    }catch (error){
        console.log(error);
    }
}

// deliteFile('file4.txt')

// readFile('file1.txt');
// readFile('file2.txt');
// readFile('file3.txt');
// readFile('file4.txt');

// Rename file

async function renameFile(oldName, newName) {
    try{
        await fs.rename(oldName, newName);
        console.log(`file ${oldName} renamed to ${newName}`);
    } catch(error){
        console.log(error);
    }
}

// renameFile('file1.txt', 'file.txt')

// create a folder

async function createFolder(folderName){
    try {
        await fs.mkdir(folderName);
        console.log(`Folder ${folderName} created`);
    } catch (error) {
        console.log(error);
    }
}

createFolder('folder1')