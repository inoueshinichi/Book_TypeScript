import * as path from 'path';
import * as fs from 'fs';

const dirname: string = "/Users/inoueshinichi/Desktop/MyGithub/Book_TypeScript/"
const packageStr: string = fs.readFileSync(path.resolve(dirname, 'package.json'), { encoding: 'utf-8'});
const packageJson: any = JSON.parse(packageStr);
console.log("----- output package -----");
console.log(packageJson);