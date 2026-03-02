<template>
    <ul>
        <li class="part" v-for="part in allParts" :key="part.id">{{ part.name }}</li>
    </ul>
</template>

<script setup>
    import { reactive } from 'vue';
    let allParts = reactive([
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
        border: 1px solid #000;
        margin: 10px;
    }
    ul::after {
        content: "";
        width: 360px; /* 和item宽度完全一致 */
        height: 0; /* 不占高度，只占宽度 */
        visibility: hidden; /* 隐藏占位元素，不影响视觉 */
        margin: 10px;
        border: 1px solid #000;
    }
</style>