const argv=require('yargs').argv;
var colors = require('colors/safe');
const {crearArchivo} = require('./multiplicar/multiplicar');



// console.log(process.argv);

let argv2=process.argv;
// let parametro=argv[2];
// let base= parametro.split('=')[1];
console.log(colors.blue('hello'));
// console.log(argv);
// console.log(argv2);
//
// crearArchivo(base)
// .then(archivo =>console.log(`Archivo Creado: ${archivo}`))
// .catch(e =>console.log(e));



// let data =''
// for (let i = 1; i <= 10; i++) {
//  data +=`${base} * ${i} = ${base*i}\n`;
// }
//
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//   if (err) throw err;
//   console.log(`Archivo tabla-${base}.txt creado`);
// });
