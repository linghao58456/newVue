* @Author: hao.ling
* @Date: 2021/1/9 2:01 下午
* @Explanation: 项目列表
<template>
    <div id="project_list">
        <a-layout id="layout">
            <a-layout-header style="background-color: white;">
                <a-form id="search" layout="inline">
                    <a-form-item label="项目名称">
                        <a-input class="lang_input" size="small" placeholder="项目名称" v-model="project_name"/>
                    </a-form-item>
                    <a-form-item label="项目地址">
                        <a-input class="lang_input" size="small" placeholder="项目地址" v-model="project_address"/>
                    </a-form-item>
                    <a-form-item label="项目负责人">
                        <a-select class="input" size="small">
                            <a-select-option v-for="name in project_manager" :key="name.value" :value="name.value">
                                {{name.name}}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="状态">
                        <a-select class="input" size="small">
                            <a-select-option v-for="status in project_status" :key="status.value" :value="status.value">
                                {{status.name}}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                    <my-icon @click="searchProject" type="icon-search" class="icon_btn" style="color: blue;"/>
                    <my-icon @click="add" type="icon-add" class="icon_btn" style="color: green;"/>
                </a-form>
            </a-layout-header>
            <a-layout-content>
                <a-table :columns="columns" :data-source="project_list" bordered>

                </a-table>
            </a-layout-content>
        </a-layout>
    </div>
</template>

<script>
    const columns = [
        {dataIndex: "id", key: "id", title: "id"},
        {dataIndex: "project_name", key: "project_name", title: "项目名称"},
        {dataIndex: "project_address", key: "project_address", title: "项目地址"},
        {dataIndex: "project_manager", key: "project_manager", title: "项目负责人"},
        {dataIndex: "project_status", key: "project_status", title: "状态"},
        {dataIndex: "project_created", key: "project_created", title: "创建者"},
        {dataIndex: "project_create_time", key: "project_create_time", title: "创建时间"},
        {dataIndex: "project_modify", key: "project_modify", title: "修改者"},
        {dataIndex: "project_modify_time", key: "project_modify_time", title: "修改时间"},
        {dataIndex: "action", key: "action", title: "操作", scopedSlots: {customRender: "action"}}
    ]

    export default {
        name: "projectList",
        data() {
            return {
                project_name: "", project_address: "", project_manager: [{name: "全部", value: 0}],
                project_status: [{name: "全部", value: 0}, {name: "开启", value: 1}, {name: "关闭", value: 2}],
                project_list: [], columns,
            }
        },
        created() {
            this.searchProjectManager()
            this.searchProject()
        },
        methods: {
            // 新增
            add() {
                this.$router.push({name: "addProject"})
            },
            // 查询项目
            searchProject() {
                this.Get("/projectList", {currentPage: 0, pageSize: 10}).then(res => {
                    let status = ""
                    let manager = ""
                    let create = ""
                    let modify = ""
                    res['code'] === 1000 ? res['data'].map(item => {
                        item['status'] === 0 ? status = "开启" : status = "关闭"
                        this.project_manager.map(name => {
                            item['project_manager'] === name.value ? manager = name.name : ""
                            item['createId'] === name.value ? create = name.name : ""
                            item['modifyId'] === name.value ? modify = name.name : ""
                        })
                        this.project_list.push({
                            id: item['project_id'], project_name: item['project_name'],
                            project_address: item['project_address'], project_manager: manager,
                            project_status: status, project_created: create, project_modify: modify,
                            project_create_time: this.getDate(item['create_time']),
                            project_modify_time: this.getDate(item['modify_time'])
                        })
                    }) : this.message.error(res['message'], 2)
                })
            },
            // 或者项目负责人
            searchProjectManager() {
                this.Get("/searchUser", {}).then(res => {
                    res['code'] === 1000 ? res['data'].map(name => {
                        this.project_manager.push({name: name['username'], value: name['userId']})
                    }) : this.message.error(res['message'], 2)
                })
            },

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
        width: 80px;
    }

    .lang_input {
        width: 150px;
    }

    .icon_btn {
        cursor: pointer;
        margin-top: 5px;
        margin-right: 10px;
        font-size: 25px
    }

    #search {
        margin-top: 10px;
        margin-left: -30px;
    }
</style>