<template>
    <div class="home">
         <div class="tesla">
            <RouterLink :to="{ path: '/parts/teslaParts', hash: '#router_view' }">
                <img src="../img/主营特斯拉.avif" alt="">
            </RouterLink>
        </div>
        <div class="nio">
            <RouterLink :to="{ path: '/parts/nioParts', hash: '#router_view' }">
                <img src="../img/蔚来.png" alt="">
            </RouterLink>
        </div>
        <div class="li">
            <RouterLink :to="{ path: '/parts/liParts', hash: '#router_view' }">
                <img src="../img/理想.png" alt="">
            </RouterLink>
        </div>
    </div>
   
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>
    
<style scoped>
    .home{
        display: flex;
        justify-content: space-around;
    }
</style>