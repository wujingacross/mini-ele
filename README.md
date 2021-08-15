# mini-ele

## tips:

1. lib/theme-chalk中的样式，使用当前项目中packages/theme-chalk项目，`build:theme`命令没有成功，无法生成样式文件
2. 根目录下的rollup.config.js配置文件中， 使用@rollup/plugin-commonjs插件会报错，暂时注释掉，不影响UI库的打包

## resolve:

1. theme-chalk问题，使用[element-2.14.1](https://github.com/ElemeFE/element/releases)版本的代码
使用`build:theme`命令生成出来的，然后拷贝过来
2. node-sass 这个包不好装
可以使用下面的命令进行安装

`npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/`

