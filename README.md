# vue-ssr

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### npm install

vuex
vue-server-renderer
express
vue-router
webpack-node-externals
lodash.merge
cross-env

### ssr 优点：seo，首屏到达时间快

### ssr 确点：服务器负载大，开发要求高，构建部署需要 node 环境

### 技术选型：

1.首屏内容到达时间重要程度

2.seo 是否是重要需求？仅有少量营销页面需要 seo，可以考虑预渲染，pre-render

3.已经完成的 spa，重构量很大怎么？可以考虑 puppeteer 爬虫

4.高流量情况是否做好服务器负载准备，缓存策略制定
