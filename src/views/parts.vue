<template>
    <div class="parts">
        <div class="nav">
            <RouterLink :to="{ path: '/parts/allParts', hash: '#router_view' }" active-class="active">全部</RouterLink>
            <RouterLink :to="{ path: '/parts/teslaParts', hash: '#router_view' }" active-class="active">特斯拉</RouterLink>
            <RouterLink :to="{ path: '/parts/liParts', hash: '#router_view' }" active-class="active">理想</RouterLink>
            <RouterLink :to="{ path: '/parts/nioParts', hash: '#router_view' }" active-class="active">蔚来</RouterLink>
        </div>
        <div class="shop">
            <RouterView> 
            </RouterView>
        </div>
    </div>
</template>

<script setup>
    import { useRouter,RouterLink } from 'vue-router'
    const router = useRouter()
</script>

<style scoped>
    .parts{
        display: flex;
        width: 100%;
        height: 100%;
        background: #eeeded;
    }
    .nav{
        background-color: #ffffff;
        border-radius: 20px;
        padding: 10px 5px;
        width: 13%;
        margin-left: 200px;
        margin-right: 100px;
        display: flex;
        flex-direction: column;
    }
    .shop{
        width: 70%;
        min-height: 1000px;
        border-radius: 20px;
        background-color: #ffffff;
        margin-right: 150px;
        padding: 20px 20px;
    }
    .nav a{
        text-decoration: none;
        text-align: center;
        padding: 15px 20px;
        color: #000000;
        border-radius: 10px;
    }
    .active{
        background-color: #dfdfdf;

    }

</style>