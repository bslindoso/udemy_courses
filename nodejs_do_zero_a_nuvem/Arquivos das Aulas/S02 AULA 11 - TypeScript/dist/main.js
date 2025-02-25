"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
console.log('n-fatorial');
const argv = require('yargs').demandOption('num').argv;
const num = argv.num;
console.log(`O fatorial de ${num} é igual a ${(0, fatorial_1.fatorial)(num)}`);
