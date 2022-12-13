

export default () => {
    return {
        type: "checkbox",
        name: "middleware",
        message: "按下 <空格键> 选择, 按下<a> 全选, 按下<i> 全不选, 回车提交",
        choices: [
            {
                name: "koaStatic"
            },
            {
                name: "koaRouter"
            }
        ]
    }
}