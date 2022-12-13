export default () => {
    return {
        type: "input",
        name: "packageName",
        // message: "输入包或项目名称",
        validate(val) {
            if (val) return true;
            return '请输入包或项目名称！'
        }
    }
}