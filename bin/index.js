#!/usr/bin/env node
// fs
import fs from "fs";
import createIndexTemplate from './createIndexTemplate.js';
import createPackageTemplate from './createPackageTemplate.js';
// 引入面板选项
import question from "./question/index.js";
import { createConfig } from "./config.js";
import { execa } from 'execa'
import chalk from "chalk";
import checkPackageName from "./utils.js/checkPath.js";

const answer = await question();
// console.log(answer);
const inputConfig = createConfig(answer);
console.log(inputConfig);

// 1.创建文件目录
const result = await checkPackageName(inputConfig.packageName);
console.log(chalk.bgGreen(`开始创建项目${inputConfig.packageName}，请稍等~`));

result && fs.mkdirSync(getRootPath(inputConfig.packageName));

// 2.创建项目入口文件
fs.writeFileSync(`${getRootPath(inputConfig.packageName)}/index.js`, createIndexTemplate(inputConfig));

// 3.创建项目package.json文件
fs.writeFileSync(`${getRootPath(inputConfig.packageName)}/package.json`, createPackageTemplate(inputConfig))

// 4.安装依赖
console.log(chalk.bgGreen('依赖安装中~'));
await execa("yarn", {
    cwd: getRootPath(inputConfig.packageName),
    stdio: [2, 2, 2]
})
// 输出提示信息
console.log(chalk.bgBlue(`
    cd ${inputConfig.packageName} 
    yarn dev
`))
/**
 * 提取出公共路径
*/
function getRootPath(path) {
    return `./${path}`;
}

