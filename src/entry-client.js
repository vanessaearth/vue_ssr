// 挂载创建的vue实例，将来在浏览器执行
import { createApp } from './main'
// 创建vue实例
const { app, router, store } = createApp()
// 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态自动嵌入到最 终的 HTML // 在客户端挂载到应用程序之前，store 就应该获取到状态:
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
// 路由就绪，执行挂载（激活过程）
router.onReady(() => {
  app.$mount('#app')
})
