// 转换配置信息
export function createConfig(answer) {
    function hasMiddleware(name) {
        return answer.middleware.includes(name);
    }
    return {
        packageName: answer.packageName,
        prot: answer.prot,
        middleware: {
            static: hasMiddleware('koaStatic'),
            router: hasMiddleware('koaRouter')
        }
    }
}