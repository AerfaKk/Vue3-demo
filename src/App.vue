
<template>
  <nav>
    <div>
      <img v-on:click="goHome" class="logo" src="../public/favicon.ico" alt="logo">
      <RouterLink :to="{ path: '/parts', hash: '#router_view' }" active-class="active">汽车配件</RouterLink>
      <RouterLink :to="{ path: '/cgq', hash: '#router_view' }" active-class="active">传感器</RouterLink>
      <RouterLink :to="{ path: '/cgq', hash: '#router_view' }" active-class="active">传感器</RouterLink>
      <RouterLink :to="{ path: '/cgq', hash: '#router_view' }" active-class="active">传感器</RouterLink>
      <a href="#">服务与支持</a>
      <el-input
        v-model="search"
        style="width: 200px;
        height: 30px;
        margin: auto 0;"
        clearable
        :prefix-icon="Search"
      /> 
      <el-button round :icon="Grid" style="margin: auto 0;">中国</el-button>
    </div>
  </nav>

  <main>
    <img src="./img/v2-056e22d3f54164924938f963852d6657_r.jpg" alt="">
  </main>

  <div class="sp" id="router_view">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">

  import { inputEmits } from 'element-plus'
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRouter,RouterLink } from 'vue-router'
  import { Search,Grid } from '@element-plus/icons-vue'

  const router = useRouter()
  let search = ref('')
  

  function goHome() {
    router.push('/')
  }


  // 响应式变量：是否滚动离开顶部
  const isScroll = ref(false)


  // 滚动处理函数
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    isScroll.value = scrollTop > 0
    const nav_as=document.querySelectorAll('nav a') as NodeListOf<HTMLElement>
    if (isScroll.value) {
      document.querySelector('nav')!.style.backgroundColor = 'white'
      nav_as.forEach(link => {
        link.classList.remove('white')
        link.classList.add('black')
      })

    } else {//顶部时
      document.querySelector('nav')!.style.backgroundColor = 'transparent'
      nav_as.forEach(link => {
        link.classList.remove('black')
        link.classList.add('white')
      })
    }
  }

  // 挂载时监听滚动事件
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    // 初始化判断
    handleScroll()
  })

  // 卸载时移除监听（避免内存泄漏）
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

</script>

<style scoped>  
  nav {
    align-items: center;
    background-color: transparent;
    position: fixed;
    width: 100%;
    height: 60px;
  }
  nav>div {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .logo {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    margin-top: 5px;
    cursor: pointer;
  }
  nav a {
    text-decoration: none;
    font-size: 15px;
    text-align: center;
    margin-right: 30px;
    color: #000;
  }
  .white {
    color: white;
  }
  .black {
    color: black;
  }
  nav a:hover {
    color: rgb(192, 192, 192);
  }
  .active {
    color: rgb(0, 0, 0);
    border-bottom: 1px solid #000;
  }

  .sp {
    margin-top: 50px;
  }
  main {
    width: 100%;
    height: 800px;
  }
  main img {
    width: 100%;
    height: 100%;
    overflow: hidden;  
  }
</style>
