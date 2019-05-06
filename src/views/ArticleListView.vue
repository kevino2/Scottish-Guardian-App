<template lang="html">
  <div v-if="articles" id="view">
    <ArticleList :articles="articles" />
    <ArticleListItem v-if="selectedArticle" :article="selectedArticle" />
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList';
import ArticleListItem from '@/components/ArticleListItem';
import {eventBus} from '@/main.js';
import Header from "@/components/Header"

export default {
  name: 'article-view',
  components:{
    Header,
    ArticleList,
    ArticleListItem
  },
  data() {
    return {
      articles: [],
      selectedArticle: null
    }
  },
  mounted() {
    fetch('https://content.guardianapis.com/search?q=scotland&format=json&api-key=test')
    .then(response => response.json())
    .then(data => this.articles = data.response.results)
    eventBus.$on('article-selected', (article) => {
    this.selectedArticle = article;
    })
   }
  }


</script>

<style lang="css" scoped>

</style>
