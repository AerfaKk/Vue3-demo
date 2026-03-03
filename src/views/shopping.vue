<template>
    <div class="left">
        <div class="img">            
        </div>
        <div class="content">
            <h2>参数详情</h2>
            <h3>品牌：<span>???</span></h3>
            <h3>类型：<span>???</span></h3>
            <h3>型号：<span>???</span></h3>
        </div>
    </div>
    <div class="right">
        <p class="name">name????</p>
        <p class="money">￥????</p>
        <div class="shop">
            <span style="margin-right:40px; margin-left: 150px; color: #525252;">数量:</span>
            <el-input-number v-model="number" :min="1" :max="99" class="number"></el-input-number>
            <el-button type="primary" @click="" :icon="Select">立即购买</el-button>
        </div>
    </div>
    
</template>

<script setup>
    import { ref } from 'vue'
    import { Select } from '@element-plus/icons-vue'
    const number = ref(1)
</script>

<style scoped>
    .left{
        width: 60%;
        min-height: 1000px;
        background-color: #eeeded;
        padding-top: 60px;
    }
    .right{
        position: fixed;
        width: 40%;
        height: 100%;
        background-color: #eeeded;
        bottom: 0;
        right: 0;
    }
    .img{
        width: 90%;
        height: 500px;
        border: 1px solid #000;
        margin: 0 auto;
    }
    .content{
        width: 90%;
        height: 500px;
        border: 1px solid #000;
        margin: 0 auto;
        margin-top: 50px;
    }
    h2{
        text-align: center;
    }
    h3{
        margin-top: 20px;
        margin-left: 40px;
    }
    .name{
        margin-top: 100px;
        font-size: 40px;
        margin-left: 40px;
    }
    .money{
        margin-top: 20px;
        margin-left: 40px;
        font-size: 30px;
    }
    .shop{
        position: absolute;
        width: 100%;
        height: 50px;
        bottom: 80px;
        font-size: 20px;
        line-height: 50px;
    }
    .number{
        height: 40px;
        width: 140px;
        margin-right: 100px;
    }
</style>