* @Author: hao.ling
* @Date: 2021/1/17 11:12 上午
* @Explanation: 新增项目
<template>
    <div id="add">
        <a-layout id="layout">
            <a-layout-header style="background-color: white;">
                <a-breadcrumb separator=">" style="margin-top: 10px;margin-left: 10px">
                    <a-breadcrumb-item>
                        <router-link :to="{name:'projectList'}">项目列表</router-link>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item>新增项目名称</a-breadcrumb-item>
                </a-breadcrumb>
            </a-layout-header>
            <a-layout-content style="height: 500px">
                <a-form :form="addForm" :label-col="{span:2}" @submit="commit">
                    <a-form-item label="项目名称">
                        <a-input class="input" placeholder="项目名称" size="small"
                                 v-decorator="['project_name',{rules:[{required:true,message:'请输入项目名称'}]}]"/>
                    </a-form-item>
                </a-form>
                <a-button @click="commit">提交</a-button>
            </a-layout-content>
        </a-layout>
    </div>
</template>

<script>
    export default {
        name: "addProject",
        data() {
            return {
                addForm: this.$form.createForm(this, {name: "addForm"})
            }
        },
        methods: {
            // 提交
            commit() {
                this.addForm.validateFields((err, values) => {
                    if (!err) {
                        console.log(values['project_name'])
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .input {
        width: 200px;
    }
</style>