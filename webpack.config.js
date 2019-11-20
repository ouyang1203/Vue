/** 
 * webpack 配置文件(低于webpack 4 的必须要有这个文件)
 *注意： 配置文件路径必须要在根目录，不能在src目录下！！
 * 这个配置文件其实就是一个JS文件,通过NODE中的模块操作，向外暴露了一个配置对象
 * 在这个配置文件中，需要指定入口和出口
*/
const path = require('path');
//启用热更新的第二步
const webpack = require('webpack');

module.exports={
    //development开发模式，打包的代码不会被压缩，开启代码调试
    //production生产模式，打包的代码会被压缩，关闭代码调试
    mode:'development',//"production" | "development" | "none"
    entry:'./src/main.js',//入口设置
    output:{
        path:path.join(__dirname,'./dist'),//指定输出目录
        filename:'bundle.js'//指定输出文件名
    },
    devServer:{//这是配置dev-server命令参数的第二中方式
        // --open --port 3000 --contentBase src --hot
        //自动打开浏览器
        open:true,
        //设置启动时的运行端口
        port:3000,
        //制定托管的根目录
        contentBase:'src',
        //启动热更新的第一步
        hot:true
   },
   plugins:[//配置插件的节点
        //实例化一个热更新的对象
        new webpack.HotModuleReplacementPlugin()
   ]
}
/**
 * 使用webpack-dev-server工具，来实现自动打包编译的功能
 * 1. 运行cnpm i webpack-dev-server -D (不能安装在C盘)把这个工具安装到项目的本地开发依赖
 * 2. 安装完毕后这个工具的用法和webpack用法完全一样
 * 3. 由于我们是在项目中本地安装的webpack-dev-server，所以无法把它当做脚本命令在powershell终端
 * 中直接执行（只有那些安装到全局的-g工具才能在终端中执行）
*/