- 使用inquirer命令行交互工具
  
    创建交互命令，项目名称，端口号，选择依赖包等
- 使用ejs创建模版文件
  
    根据解析出的命令条件创建模版1
    
- 使用prettier格式化模版文件（代码美化）

- 使用execa执行yarn命令，自动安装依赖
  
1. 创建文件夹

    创建项目根目录

1. 创建入口文件
   
    ejs 嵌入式模版
    challk 文字变色

3. 创建 package.json

4. 安装依赖

    使用 child_process 或 第三方库 execa 帮我们安装依赖
5. 发布到npm
    如果使用的是淘宝镜像要先切换成npm源
    包名不能重复
    在package.json中设置files,只上传bin和package.json文件
    npm publish --registry https://registry.npmjs.org
6. npm删除包
    npm unpublish --registry https://registry.npmjs.org --force