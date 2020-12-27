* @Author: hao.ling
* @Date: 2020/12/6 4:59 下午
* @Explanation: 显示主体
<template>
    <div id="content">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "con"
    }
</script>

<style scoped>
    #content {
        margin-left: -150px;
    }
</style>