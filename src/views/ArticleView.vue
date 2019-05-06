<template lang="html">

  <div v-if="article">
     <h2>{{article.webTitle}}</h2>
     <a href="article.webUrl">{{article.webUrl}}</a>
     <p>Category: {{article.sectionName}}</p>

  </div>

</template>

<script>
import ArticleListItem from '@/components/ArticleListItem';
import {eventBus} from '@/main.js';
import Header from "@/components/Header"

export default {
  components: {Header},
  props: ['article'],
}
</script>

<style lang="css" scoped>
</style>
