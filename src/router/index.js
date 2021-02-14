import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../components/index";
import register from "../views/index/register";
import login from "../views/index/login";
import forget from "../views/index/forget";
import reset from "../views/index/reset";
import home from "../components/home";
import change from "../views/home/change";
import projectList from "../views/config/project/projectList";
import dataList from "../views/config/data/dataList";
import addProject from "../views/config/project/addProject";

Vue.use(VueRouter)

const routes = [{
    path: "/",
    component: index,
    children: [{
        path: "/register",
        name: "register",
        component: register
    }, {
        path: "/",
        name: "login",
        component: login
    }, {
        path: "/forget",
        name: "forget",
        component: forget
    }, {
        path: "/reset",
        name: "reset",
        component: reset
    }]
}, {
    path: "/home",
    name: "home",
    component: home,
    children: [{
        path: "/changePwd",
        name: "changePwd",
        component: change
    }, {
        path: "/project/list",
        name: "projectList",
        component: projectList
    }, {
        path: "/project/add",
        name: "addProject",
        component: addProject
    }, {
        path: "/database/list",
        name: "databaseList",
        component: dataList
    }]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
