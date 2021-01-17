* @Author: hao.ling
* @Date: 2020/12/6 4:51 下午
* @Explanation: 主页
<template>
    <div id="index-home">
        <a-layout>
            <a-layout-header id="header">
                <top/>
            </a-layout-header>
            <a-layout>
                <a-layout-sider id="side">
                    <menu-list/>
                </a-layout-sider>
                <a-layout-content id="content">
                    <con/>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
    import MenuList from "../views/home/menu";
    import Con from "../views/home/content";
    import Top from "../views/home/top";

    export default {
        name: "home",
        components: {Top, Con, MenuList}
    }
</script>

<style scoped>
    #header {
        background-color: pink;
    }

    #side {
        background-color: white;
        height: 91%;
        position: absolute;
    }

    #content {
        background-color: white;
        height: 91%;
        width: 86%;
        left: 14%;
        position: absolute;
    }
</style>