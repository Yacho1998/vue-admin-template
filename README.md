# vue-admin-template
vue+node+mysql学校内务管理系统
使用了vue轻量级后台管理系统基础模板<br>


## 相关依赖
* [vue-router](https://router.vuejs.org/zh/)
* [iview](https://www.iviewui.com/docs/guide/install)
* [axios](https://www.kancloud.cn/yunye/axios/234845)
* [vuex](https://vuex.vuejs.org/zh/)

## 功能

#### 标签栏
* 点击标签切换页面
* 刷新当前标签页
* 关闭其他标签/关闭所有标签

**注意：** 组件的名称和路由的名称一定要一致，例如 `Home.vue` 组件名称 `name: home`，则在路由文件中也要给它设置为 `name: home`，否则页面内容不能缓存

```js
// 在router文件中
{
    path: 'home',
    name: 'home',
    component: () => import('../views/Home.vue')
}

// 在Home.vue中
export default {
    name: 'home'
}
```

#### 侧边栏
* 伸展/收缩
* 页面宽度过小自动收缩
* 多级菜单（利用iView组件）

#### 用户相关
* 消息通知
* 用户头像
* 基本资料

#### 动态菜单栏
* 根据数据动态生成菜单
* 在菜单项上添加 hidden 属性可以隐藏该菜单项，但还是可以正常访问页面，具体请看 DEMO 及其相关代码

#### 面包屑
* 展示当前页面的路径

#### 权限控制
* 如果在未登陆的情况下访问指定页面 将会重定向到登陆页


#### 页面标题 `document.title`
在 `src/utils/index` 下可设置默认的 `title`，在每个路由配置项上可设置对应的 `title`，具体示例请看代码

#### 其它
* 利用`axios`拦截器 实现了`ajax`请求前展示`loading` 请求结束关闭`loading`

## 注意
* 源码可见 并且添加了必要的注释 可以自行更改


`Index`组件一般情况下只需要传数据就行 其他不用关注

市面上有大量的vue后台管理系统模板 但是功能都太丰富了 而且有很多组件用不上 所以写了这么一个最基础的 只有必要功能的模板
UI库使用的是`iView`和饿了么 有大量的组件可用 


cd vue-admin-template

npm i
```

#### 开发
```
npm run serve
```

#### 打包
````
npm run build
````
打包后的文件要放在服务器根目录下，否则会出现空白页面。
如果不是服务器根目录则需要更改打包的路径，打开 `vue.config.js` 文件，添加如下代码
```js
publicPath: './',
```
添加后如下所示
```js
module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://xxxx/device/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}
```
### 如果对你有帮助，请给个Star
