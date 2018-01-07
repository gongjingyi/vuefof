// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Index from '../src/components/index/index';
import Login from '../src/components/login/login';
import Survey from '../src/components/survey/survey';
import Commit from '../src/components/commit/commit';
import Detail from '../src/components/detail/detail';
import Licai from '../src/components/licai/licaicommit';
import Infolist from '../src/components/infolist/infolist';
import Group from '../src/components/positions/group';
import Prompt from '../src/components/positions/prompt';

import '../src/common/stylus/index.styl';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: Index
}, {
    path: '/index',
    component: Index
}, {
    path: '/login',
    component: Login
}, {
    path: '/survey',
    component: Survey
}, {
    path: '/commit',
    component: Commit
}, {
    path: '/detail',
    component: Detail
}, {
    path: '/licai',
    component: Licai
}, {
    path: '/infolist',
    component: Infolist
}, {
    path: '/positions/group',
    component: Group
}, {
    path: '/positions/prompt',
    component: Prompt
}];
const router = new VueRouter({
    linkActiveClass: 'active',
    routes
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
});