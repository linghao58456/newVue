* @Author: hao.ling
* @Date: 2021/1/9 2:01 下午
* @Explanation: 项目列表
<template>
    <div id="project_list">
        <a-layout id="layout">
            <a-layout-header style="background-color: white;">
                <a-form id="search" layout="inline">
                    <a-form-item label="项目名称">
                        <a-input class="input" size="small" placeholder="项目名称" v-model="project_name"/>
                    </a-form-item>
                    <a-form-item label="">
                        <a-input class="input" size="small" placeholder=""/>
                    </a-form-item>
                    <my-icon @click="add" type="icon-add" class="icon_btn" style="color: green;"/>
                </a-form>
            </a-layout-header>
            <a-layout-content>
                <a-table>

                </a-table>
            </a-layout-content>
        </a-layout>
    </div>
</template>

<script>
    export default {
        name: "projectList",
        data() {
            return {
                project_name: ""
            }
        },
        methods: {
            add() {
                this.$router.push({name: "addProject"})
            }
        }
    }
</script>

<style scoped>
    #layout {
        width: 1200px;
        height: 640px;
        background-color: white;
    }

    .input {
        width: 100px;
    }

    .icon_btn {
        cursor: pointer;
        margin-top: 5px;
        font-size: 25px
    }
</style>