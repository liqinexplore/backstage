
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute,Link } from 'react-router';
import Home from './modules/_public/Home';
import Dashboard from './modules/_public/Dashboard';
import NotFound from './modules/_public/NotFound';
const routerConfig = [
    {
path: '/',
component: Dashboard, //默认面板
indexRoute: { component: Home },//当刚开始进入，什么路由也没有的时候加载
breadcrumbName:'首页',
childRoutes: [
require('./modules/circle')//子路由地址
]
    },
    {
   path: "home",
   breadcrumbName: "主页",
   component: Home
 },{
    path: "*",
    component: Dashboard,
    indexRoute: {
      component: NotFound
    }
  }
];
render((
<Router  history={hashHistory} routes={routerConfig} />
), document.getElementById('app'));
