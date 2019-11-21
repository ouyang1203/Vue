//main.js是我们所有JS的入口(千万不能使用cnpm安装,否则在npm run dev自动编译时会有莫名其妙的错)
//首先到项目路径下执行npm init -y初始化项目
//1.  导入jquery终端执行 npm i jquery -s 给项目添加jquery
//es6中引入其他模块的方式
//由于ES6语法浏览器解析不了，所以这一行执行会报错
//npm install webpack@3.0.0 -g 安装3.0的webpack
//或者不指定版本安装最新的npm install webpack -g
//需要到终端里面执行webpack src/main.js -o dist/bundle.js()
import $ from 'jquery'

/**
 * 使用import语法导入CSS样式表
 * 注意：webpack默认只能处理包含JS类型的文件，其他非JS类型文件我们需要手动安装第三方loader加载器；
 * 1. 如果想要打包处理CSS文件，则需要安装npm i style-loader css-loader -D 到本地项目中
 * 2. 打开webpack.config.js配置文件，在里面新增一个配置节点叫做module,它是一个对象，在这个module对象里有rules属性，
 * 这个rules对象是数组，里面存放了所有第三方文件的匹配和处理规则
 * 
 * 注意webpack处理第三方文件类型的过程：
 * 1. 发现要处理的文件不是JS文件，然后就去配置文件中查找第三方loader规则
 * 2. 如果能找到对应的规则，就会调用对应的loader处理这种类型文件
 * 3. 在调用loader的时候是从后往前调用的
 * 4. 当最后一个loader调用完毕，会把处理的结果直接交给webpack进行打包合并最终输出到bundle.js中去
 * */
import './css/index.css'


$(function(){
    $("li:odd").css("backgroundColor",'green');
    $("li:even").css("backgroundColor",function(){
        return "#"+ "D97634";
    });
});
/**
 * 1. webpack 能够处理JS文件的相互依赖关系;
 * 2. webpack 能够处理JS兼容性问题，把高级的，浏览器不识别的语法，转换为较低的浏览器能识别的语法
 * 3. webpack命令格式为： webpack 要打包的文件路径 -o 打包好输出文件的路径
 * 
 * 使用webpack-dev-server工具来实现自动打包编译的功能
 * 0. 运行npm install webpack@3.0.0 -D或者npm install webpack webpack-cli -D(不指定版本)把webpack安装到本地项目中
 * 1. 运行npm i webpack-dev-server@2.11.3 -D 或者 npm i webpack-dev-server -D把这个工具安装到本地项目中
 * 2. 安装完毕后，这个工具的用法和webpack完全一样
 * 3. 由于我们是在项目中安装的webpack-dev-server,所以无法直接在powershell终端中运行;
 * (只有全局安装 -g 的工具，终端才能正常执行)
 * 4. 新的wepack4把weipack-cli分离了，导致webpack-dev-server报错，cnpm i webpack-cli -D就好了
 * 5. 在package.json文件中scripts新增属性"dev": "webpack-dev-server --open --port 3000 --contentBase src --hot"
 * 这个指令表示编译完成后自动打开浏览器并制定端口为3000,同时默认打开到src下面的index.html,
 * --hot表示热重载,修改后不再重新生成新的bundle.js，页面不刷新重载
 * 6. 再次运行npm run dev即可开启自动编译功能，在main.js文件中有修改的时候会自动编译，同时index.html中bundle.js需要改为根目录引用,
 * 否则页面查看无效果
 * 7.我们可以认为webpack-dev-server把打包好的文件以一种虚拟的形式托管到我们项目的根目录中，虽然我们看不到它，但是可以认为它和dist,src这些目录平级
*/