import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);


const routes = [{
    path: "/",
    name: "index",
    component: resolve => require(["@/components/page/index/index.vue"], resolve),
    // children: [{
    //     path: "/",
    //     name: "index",
    //     component: resolve => require(["@/components/page/index/index.vue"], resolve),
    // }, {
    //     path: "/",
    //     name: "index",
    //     component: resolve => require(["@/components/page/index/index.vue"], resolve),
    // }, {
    //     path: "/",
    //     name: "index",
    //     component: resolve => require(["@/components/page/index/index.vue"], resolve),
    // }, {
    //     path: "/",
    //     name: "index",
    //     component: resolve => require(["@/components/page/index/index.vue"], resolve),
    // }]
}];

const router = new VueRouter({
    mode: "history",
    routes
})

export default router