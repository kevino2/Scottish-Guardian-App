import Vue from 'vue';
import Router from 'vue-router';

import ArticleListView from '@/views/ArticleListView';
import ArticleView from '@/views/ArticleView';


Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: "/",
      name: "articles",
      component: ArticleListView
    },
    {
      path: "/article",
      name: "article",
      component: ArticleView,
      props: true
    }
  ]
});
