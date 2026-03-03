<template>
    <ul>
        <li class="part" v-for="part in nioParts" :key="part.id">
            <RouterLink to="/shopping" class="item">
                <img class="img" src="@/img/20141205212053_KxCde.jpeg" alt="">
                <span class="name">1111</span>
                <span class="money">money</span>
            </RouterLink>
        </li>
    </ul>
</template>

<script setup>
    import { reactive } from 'vue';
    import { RouterLink } from 'vue-router';
    let nioParts = reactive([
        { id: '001', name: '1', price: 1, src: ''},
        { id: '002', name: '2', price: 2, src: ''},
        { id: '003', name: '3', price: 3, src: ''},
        { id: '004', name: '4', price: 4, src: ''},
        { id: '005', name: '5', price: 5, src: ''}
    ])
</script>

<style scoped>
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .part{
        width: 360px;
        height: 300px;
        margin: 10px;
        margin-bottom: 30px;
    }
    ul::after {
        content: "";
        width: 360px; /* 和item宽度完全一致 */
        height: 0; /* 不占高度，只占宽度 */
        visibility: hidden; /* 隐藏占位元素，不影响视觉 */
        margin: 10px;
    }
    .item{

        text-decoration: none;
    }
    .img{
        width: 100%;
        height: 80%;
        border-radius: 10px;
    }
    .name{
        display: block;
        font-size: 20px;
        text-align: left;
        padding-left: 10px;
        text-decoration: none;
        margin: 5px 0;
    }
    .money{
        display: block;
        font-size: 15px;
        text-align: right;
        padding-right: 10px;
    }
</style>