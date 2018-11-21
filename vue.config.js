module.exports = {
    baseUrl: "/",               //根路径
    outputDir: "dist",          // 构建输出目录
    assetsDir: "assets",        //静态资源目录（js,css,img,fonts）
    // LintOnSave: false,          //是否开启esLint保存检测，有效值 true || false || 'error'
    devServer:{
        open: true,               
        host: "localhost",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy:{
            //配置跨域
            '/api': {
                target: "http//localhost:5000/api/",
                ws: true,
                changeOrigin: true,
                pathRewrite:{
                    '^/api': ''
                }
            
            }
        }
    }
}