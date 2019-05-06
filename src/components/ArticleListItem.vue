<template lang="html">
   <div class="article-list-item">
     <h2>{{article.webTitle}}</h2>
     <router-link :to="{ name: 'article', params: {article} }">More Info</router-link>
   </div>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="css" scoped>
</style>
