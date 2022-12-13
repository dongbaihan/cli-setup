
import path from 'path';
import fs from 'fs';
import inquirer from "inquirer";
import process from 'process';
import chalk from 'chalk';
const checkPackageName = async (projectName) => {
    if (!projectName) {
        return '请输入包名或项目名！'
    }
    const cwd = process.cwd();
    // 拼接得到项目目录
    const targetDirectory = path.join(cwd, projectName);
    // console.log(targetDirectory)
    // 判断目录是否存在
    if (fs.existsSync(targetDirectory)) {
        let { isOverwrite } = await inquirer.prompt([
            // 返回值为promise
            {
                name: "isOverwrite", // 与返回值对应
                type: "list", // list 类型
                message: "目标目录已存在，选择操作？",
                choices: [
                    { name: "覆盖", value: true },
                    { name: "取消创建", value: false },
                ],
            },
        ]);
        // 选择 Cancel
        if (!isOverwrite) {
            console.log(chalk.bgRed("取消项目创建"));
            process.exit(1);
        } else {
            // 选择 Overwirte ，先删除掉原有重名目录
            console.log(chalk.bgGreen("正在删除已存在目录"));
            await fs.rmdirSync(targetDirectory, { recursive: true });
            return true;
        }
    } else {
        return true;
        // fs.mkdirSync(getRootPath(inputConfig.packageName));

    }
}
export default checkPackageName;
