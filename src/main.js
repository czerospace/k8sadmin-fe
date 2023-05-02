import { createApp } from 'vue'
import App from './App.vue'

// 引入 router
import router from './router'
// 引入 ant
import Antd from 'ant-design-vue'
// 引入 暗黑风格主体
import 'ant-design-vue/dist/antd.dark.css'
// 引入 Icons
import * as Icons from '@ant-design/icons-vue'

const app = createApp(App)
// 图标注册全局组件
for (const i in Icons) {
    app.component(i, Icons[i])
}
// 引入 ant
app.use(Antd)
// 引入 router
app.use(router)
app.mount('#app')