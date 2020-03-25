const { createRenderer } = require('vue-server-renderer')
const express = require('express')
const Vue = require('vue')

const app = express()

const renderer = createRenderer()

const vm = new Vue({
  data: { name: 'tom' },
  template: '<div>{{name}}</div>'
})
// express路由
app.get('/', async (req, res) => {
  const html = await renderer.renderToString(vm)
  res.send(html)
})

app.listen(3000, () => {
  console.log('start')
})
