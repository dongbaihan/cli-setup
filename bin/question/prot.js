
export default () => {
    return {
        type: "number",
        name: "prot",
        message: "输入端口号",
        default() {
            return 8080;
        }
    }
}