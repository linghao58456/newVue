* @Author: hao.ling
* @Date: 2020/12/6 2:23 下午
* @Explanation: 首页
<template>
    <div id="index">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    #index {
        width: 100%;
        height: 100%;
        background-size: auto;
        background: url('../assets/loading_bg.jpg');
        position: fixed;
    }
</style>