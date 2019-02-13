// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

// router.beforeEach((to, from, next)=>{
//   console.log("跳转之前上报数据")
//   next()
// })

// 路由钩子，可以记录页面的pv
router.afterEach((to, from)=>{
  console.log("跳转之后上报数据")
  console.log("来自：" + from.path)
  console.log("跳至：" + to.path)
})

Vue.directive('stat',{
  bind(el, binding) {
    el.addEventListener('click', () => {
      const data = binding.value;
      let prefix = 'store';
      // if (OS.isAndroid || OS.isPhone) {
      //   prefix = 'mall';
      // }
      
      console.log("自定义指令")
      console.log("type："+ prefix +"_"+ data.type)
      console.log("desc："+ data.desc)
    }, false);
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#appIndex',
  router,
  store,
  components: { App },
  template: '<App/>'
})